import { Toast } from 'primereact/toast';
import {addRooming} from "../Reducers/RoomReducer";

import React, {Component, useEffect, useState, useMemo, useRef} from "react";
    import {
        MeetingProvider,
        MeetingConsumer,
        useMeeting,
        useParticipant,
        Constants,


    } from "@videosdk.live/react-sdk";
    import {authToken, createMeeting, fecthHlsDownsteamUrl} from "./../API";
    import ReactPlayer from "react-player";
    import {useDispatch, useSelector} from "react-redux";
    import {useTranslation} from "react-i18next";


    function JoinScreen({ getMeetingAndToken }) {
        const [meetingId, setMeetingId] = useState(null);
        const onClick = async () => {
            await getMeetingAndToken(meetingId);
        };
        return (
            <div>
                <input
                    type="text"
                    placeholder="Enter Meeting Id"
                    onChange={(e) => {
                        setMeetingId(e.target.value);
                    }}
                />
                <button onClick={onClick}>Join</button>
                {" or "}
                <button onClick={onClick}>Create Meeting</button>
            </div>
        );
    }

            function ParticipantView(props) {
        const micRef = useRef(null);
        const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
            useParticipant(props.participantId);

        const videoStream = useMemo(() => {
            if (webcamOn && webcamStream) {
                const mediaStream = new MediaStream();
                mediaStream.addTrack(webcamStream.track);
                return mediaStream;
            }
        }, [webcamStream, webcamOn]);

        useEffect(() => {
            if (micRef.current) {
                if (micOn && micStream) {
                    const mediaStream = new MediaStream();
                    mediaStream.addTrack(micStream.track);

                    micRef.current.srcObject = mediaStream;
                    micRef.current
                        .play()
                        .catch((error) =>
                            console.error("videoElem.current.play() failed", error)
                        );
                } else {
                    micRef.current.srcObject = null;
                }
            }
        }, [micStream, micOn]);

        return (
            <div style={{
                height: "380px",
                background: "#1f2122",
                display: "flex",
            }}>
                <p>
                    Participant: {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic:{" "}
                    {micOn ? "ON" : "OFF"}
                </p>
                <audio ref={micRef} autoPlay playsInline muted={isLocal} />
                {webcamOn && (
                    <ReactPlayer
                        //
                        playsinline // extremely crucial prop
                        pip={false}
                        light={false}
                        controls={false}
                        muted={true}
                        playing={true}
                        //
                        url={videoStream}
                        //
                        height={"380px"}
                        width={"400px"}
                        onError={(err) => {
                            console.log(err, "participant video error");
                        }}
                    />
                )}
            </div>
        );
    }

    function Controls() {
        const { leave, toggleMic, toggleWebcam, toggleScreenShare,  enableScreenShare} = useMeeting();
        return (
            <div>
                <button onClick={() => leave()}>Leave</button>
                <button onClick={() => toggleMic()}>toggleMic</button>
                <button onClick={() => toggleWebcam()}>toggleWebcam</button>
                <button onClick={() => toggleScreenShare()}>toggleScreenShare</button>
            </div>
        );
    }
function CopyButton() {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Copied the text: " + text);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };
    }

    function SpeakerView() {
        //Get the participants and HLS State from useMeeting
        const { participants, hlsState } = useMeeting();

        //Filtering the host/speakers from all the participants
        const speakers = useMemo(() => {
            const speakerParticipants = [...participants.values()].filter(
                (participant) => {
                    return participant.mode == Constants.modes.CONFERENCE;
                }
            );
            return speakerParticipants;
        }, [participants]);
        return (
            <div>
                <p>Current HLS State: {hlsState}</p>
                {/* Controls for the meeting */}
                <Controls />

                {/* Rendring all the HOST participants */}
                {speakers.map((participant) => (
                    <ParticipantView participantId={participant.id} key={participant.id} />
                ))}
            </div>
        );
    }
    function ViewerView() {
        return null;
    }

    function HLSContainer() {
        const [downstreamUrl , setDownstreamUrl] = useState("");
        const  isJoined = useMemo(() => !!downstreamUrl, [downstreamUrl]);
        return isJoined ? (
            <p> HLSCONTAINER </p>
        )  : (
            <HLSJoinScreen  onDownstreamUrl={( downstreamUrl ) => {
                setDownstreamUrl(downstreamUrl);
            }
            }/>
        )

    }

    function HLSJoinScreen({ onDownstreamUrl }) {
        const [meetingId, setMeetingId] = useState(null);
        const handleOnclick = async (meetingId) => {
            console.log(meetingId);
            const downstreamUrl = await fecthHlsDownsteamUrl({meetingId});
            onDownstreamUrl(downstreamUrl);
        };
        return  (
            <div>
                <input
                    type="text"
                    placeholder="Enter Meeting Id"
                    onChange= {(e) => {
                        setMeetingId(e.target.value);
                    }}
                />
                <button onClick={() => {
                    handleOnclick(meetingId);
                }} >Join</button>

            </div>
        )
    }
    function Container(props) {
        const {participants, join, isMeetingJoined,  startHls} = useMeeting({
            onMeetingJoined : () => {
                startHls();
            },
            onHlsStarted :  (downstreamUrl)  => {
                console.log(downstreamUrl);
            }
        })
        return (
            <div className="container">
                <h3>Meeting Id: {props.meetingId}</h3>
                {isMeetingJoined ?  (
                    <div>
                        <Controls/>

                        {[...participants.keys()].map((participantId) => (
                            <ParticipantView
                                participantId={participantId}
                                key={participantId}
                            />
                        ))}
                    </div>
                ) : (
                    <button onClick={join}>Join</button>
                )}
            </div>
        )
    }

    function MeetingContainer({ addMeeting }) {
        const user111 = useSelector((state) => state.auth);

        const [meetingId, setMeetingId] = useState(null);

        // Getting the meeting id by calling the api we just wrote
        const getMeetingAndToken = async (id) => {
            const meetingId =
                id == null ? await createMeeting({token: authToken}) : id;
            console.log(meetingId);
            setMeetingId(meetingId);
            addMeeting(meetingId);
        };

        // This will set Meeting Id to null when the meeting is left or ended
        const onMeetingLeave = () => {
            setMeetingId(null);
        };
        return (
            authToken && meetingId ? (
                <MeetingProvider
                    config={{
                        meetingId,
                        micEnabled: false,
                        webcamEnabled: false,
                        name: (user111.user != null) ?  user111.user.user.email : "Ẩn Danh" ,
                        hls: true,
                    }}
                    token={authToken}
                >
                    <Container meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
                </MeetingProvider>
            ) : (
                <JoinScreen getMeetingAndToken={getMeetingAndToken} />
            )
        )
    }


    function MeetingView(props) {
        const [joined, setJoined] = useState(null);
        //Get the method which will be used to join the meeting.
        //We will also get the participants list to display all participants

        const { join, participants } = useMeeting({
            //callback for when meeting is joined successfully
            onMeetingJoined: () => {
                setJoined("JOINED");
            },
            //callback for when meeting is left
            onMeetingLeft: () => {
                props.onMeetingLeave();
            },
        });
        const joinMeeting = () => {
            setJoined("JOINING");
            join();
        };

        return (
            <div className="container">
                <h3>Meeting Id: {props.meetingId}</h3>
                {joined && joined == "JOINED" ? (
                    <div>
                        <Controls />
                        //For rendering all the participants in the meeting
                        {[...participants.keys()].map((participantId) => (
                            <ParticipantView
                                participantId={participantId}
                                key={participantId}
                            />
                        ))}
                    </div>
                ) : joined && joined == "JOINING" ? (
                    <p>Joining the meeting...</p>
                ) : (
                    <button onClick={joinMeeting}>Join</button>
                )}
            </div>
        );

    }
export default function Rooms() {
    const {i18n} = useTranslation()
    const {t} =useTranslation();
    const [joinedMeetingId, setJoinedMeetingId] = useState(null); // State để lưu meetingId đã tham gia
    const toast = useRef(null);
    const handleJoinMeeting = async (meetingId) => {
        const downstreamUrl = await fecthHlsDownsteamUrl({ meetingId });
        // Xử lý downstreamUrl ở đây (nếu cần)
        setJoinedMeetingId(meetingId); // Lưu meetingId vào state để cập nhật giao diện
    };
    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Copied To ClipBoard', life: 1000});
    }
    const [mode, setMode] = useState("host");
    const isHost = useMemo(() => mode === "host", [mode]);
    const dispatch = useDispatch();
    const meetings = useSelector((state) => state.room.rooms);
    function handleClick(event) {
        const text = event.target.innerText;
        navigator.clipboard.writeText(text).then(() => {
            showSuccess();
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });

    };
    const addMeeting = (meetingId) => {
        const date = new Date(); // Lấy ngày giờ hiện tại
        const isMeetingIdExist = (meetings, meetingId) => {
            // Sử dụng Array.find để tìm kiếm phần tử với id là meetingId
            const existingMeeting = meetings.find(room => room.id === meetingId);
            // Nếu existingMeeting khác undefined, tức là meetingId đã tồn tại trong state
            return !!existingMeeting;
        };
        if(!isMeetingIdExist(meetings, meetingId)) {
            dispatch(addRooming({ id: meetingId, date }));
        }

    };
    console.log(meetings);
    return (
        <>
            <div>
                <Toast ref={toast}/>
            </div>
            <h3>Các Phòng Game Hiện Tại:</h3>
            {meetings.map((meeting) => (
                <div className="col-lg-3 col-sm-6" key={meeting.id}>
                    <div className="item">
                        <div className="thumb">
                            <img src={require("./assets/images/live.jpg")} alt=""/>
                            <div className="hover-effect">
                                <div className="content">
                                    <div className="live">
                                        <a href="#"></a>
                                    </div>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-eye"></i> 1.2K</a></li>
                                        <li><a href="#"><i className="fa fa-gamepad"></i> LiveStream</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="down-content">
                            <div className="avatar">
                                <img src={require("./assets/images/avatar-01.jpg")} alt=""
                                     style={{maxWidth: "46px", borderRadius: "50%", float: "left"}}/>
                            </div>
                            <span><i className="fa fa-check"></i> </span>
                            <h4> {t("room")} - {t("start")}  {new Date(meeting.date).toLocaleString()}</h4>
                            <button onClick={handleClick}>{meeting.id}</button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="live-stream" style={{display: "flex", justifyContent: "center"}}>
                {
                    isHost ? <MeetingContainer addMeeting={addMeeting}/> : <HLSContainer/>
                }
            </div>

        </>
    )
}