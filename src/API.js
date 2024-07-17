//Auth token we will use to generate a meeting and connect to it
export const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIyNTVhMmJmYi0xMjgxLTQzNWQtODMwMC1hNGZmNzcwMDkzZmYiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcyMTE0NDc4MCwiZXhwIjoxNzIzNzM2NzgwfQ.49LwAqm8kAEusDv_Ss_JD0dINDqC2uJWeOs38U4V0OI";
// API call to create meeting
export const createMeeting = async ({ token }) => {
    const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
        method: "POST",
        headers: {
            authorization: `${authToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    });
    //Destructuring the roomId from the response
    const { roomId } = await res.json();
    return roomId;
};

export const  fecthHlsDownsteamUrl  = async ({meetingId}) => {
    const res = await fetch(`https://api.videosdk.live/v2/rooms/${meetingId}`,
        {
            method: "GET",
            headers: {
                authorization: `${authToken}`,
                "Content-Type": "application/json",
            }
        });
    const json = await res.json();
    console.log(json.links.get_room);
    const { downstreamUrl }  = json.links;
    return downstreamUrl;
}
