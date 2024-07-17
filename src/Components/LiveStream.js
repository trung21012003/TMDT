import {useTranslation} from "react-i18next";
import Rooms from "./Rooms";
import React from "react";

export default function LiveStream(){
    const {i18n} = useTranslation()
    const {t} =useTranslation();
    return (
        <div>
            <div className="live-stream">
                <div className="col-lg-12">
                    <div className="heading-section">
                        <h4><em>{t("mostPopular")}</em> {t("liveStream")}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <img style={{width:"261px", height :"261px"}} src={require("./assets/images/3ga.jpg")} alt=""/>
                                <div className="hover-effect">
                                    <div className="content">
                                        <div className="live">
                                            <a href="#">{t("live")}</a>
                                        </div>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-eye"></i> 12.2K</a></li>
                                            <li><a href="#"><i className="fa fa-gamepad"></i> LOL</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="down-content">
                                <div className="avatar">
                                    <img src={require("./assets/images/lol1.jpg")} alt=""
                                         style={{maxWidth: "46px", borderRadius: "50%", float: "left"}}/>
                                </div>
                                <span><i className="fa fa-check"></i> Thầy Giáo Ba</span>
                                <h4>Thầy Ba on da mic</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <img style={{width:"261px", height :"261px"}} src={require("./assets/images/emche.jpg")} alt=""/>
                                <div className="hover-effect">
                                    <div className="content">
                                        <div className="live">
                                            <a href="#">{t("live")}</a>
                                        </div>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-eye"></i> 1.2K</a></li>
                                            <li><a href="#"><i className="fa fa-gamepad"></i> TFT</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="down-content">
                                <div className="avatar">
                                    <img  src={require("./assets/images/tft1.jpg")} alt=""
                                         style={{maxWidth: "46px", borderRadius: "50%", float: "left"}}/>
                                </div>
                                <span><i className="fa fa-check"></i> Em Chè DCTL</span>
                                <h4>Hello anh em  </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <img style={{width:"261px", height :"261px"}} src={require("./assets/images/domixi1.jpg")} alt=""/>
                                <div className="hover-effect">
                                    <div className="content">
                                        <div className="live">
                                            <a href="#">{t("live")}</a>
                                        </div>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-eye"></i> 28.2K</a></li>
                                            <li><a href="#"><i className="fa fa-gamepad"></i> CS-GO</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="down-content">
                                <div className="avatar">
                                    <img src={require("./assets/images/avatar-03.jpg")} alt=""
                                         style={{maxWidth: "46px", borderRadius: "50%", float: "left"}}/>
                                </div>
                                <span><i className="fa fa-check"></i> Mixi Gaming</span>
                                <h4>Restream hôm qua.....</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <img style={{width:"261px", height :"261px"}} src={require("./assets/images/virus.jpg")} alt=""/>
                                <div className="hover-effect">
                                    <div className="content">
                                        <div className="live">
                                            <a href="#">Live</a>
                                        </div>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-eye"></i> 10.2K</a></li>
                                            <li><a href="#"><i className="fa fa-gamepad"></i> Youtube</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="down-content">
                                <div className="avatar">
                                    <img src={require("./assets/images/popular-01.jpg")} alt=""
                                         style={{maxWidth: "46px", borderRadius: "50%", float: "left"}}/>
                                </div>
                                <span><i className="fa fa-check"></i> VirusS Reaction</span>
                                <h4>Reaction J97 tới khi nào chán thì thôi.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <img style={{width:"261px", height :"261px"}} src={require("./assets/images/xeme.jpg")} alt=""/>
                                <div className="hover-effect">
                                    <div className="content">
                                        <div className="live">
                                            <a href="#">{t("live")}</a>
                                        </div>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-eye"></i> 1.2K</a></li>
                                            <li><a href="#"><i className="fa fa-gamepad"></i> Youtube</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="down-content">
                                <div className="avatar">
                                    <img src={require("./assets/images/avatar-01.jpg")} alt=""
                                         style={{maxWidth: "46px", borderRadius: "50%", float: "left"}}/>
                                </div>
                                <span><i className="fa fa-check"></i> Xemexis</span>
                                <h4>Tâm sự cuộc đời</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <img style={{width:"261px", height :"261px"}} src={require("./assets/images/pewpew.jpg")} alt=""/>
                                <div className="hover-effect">
                                    <div className="content">
                                        <div className="live">
                                            <a href="#">{t("live")}</a>
                                        </div>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-eye"></i> 1.2K</a></li>
                                            <li><a href="#"><i className="fa fa-gamepad"></i> LiveNow</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="down-content">
                                <div className="avatar">
                                    <img src={require("./assets/images/avatar-02.jpg")} alt=""
                                         style={{maxWidth: "46px", borderRadius: "50%", float: "left"}}/>
                                </div>
                                <span><i className="fa fa-check"></i> PewPew</span>
                                <h4> Tìm Bạn 4 Phương</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <img style={{width:"261px", height :"261px"}} src={require("./assets/images/misthy.jpg")} alt=""/>
                                <div className="hover-effect">
                                    <div className="content">
                                        <div className="live">
                                            <a href="#">{t("live")}</a>
                                        </div>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-eye"></i> 18.2K</a></li>
                                            <li><a href="#"><i className="fa fa-gamepad"></i> GTA</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="down-content">
                                <div className="avatar">
                                    <img src={require("./assets/images/avatar-03.jpg")} alt=""
                                         style={{maxWidth: "46px", borderRadius: "50%", float: "left"}}/>
                                </div>
                                <span><i className="fa fa-check"></i> MisThy</span>
                                <h4>Thy Ngoc dao da MixiCity</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <img style={{width:"261px", height :"261px"}} src={require("./assets/images/remind.jpg")} alt=""/>
                                <div className="hover-effect">
                                    <div className="content">
                                        <div className="live">
                                            <a href="#">{t("live")}</a>
                                        </div>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-eye"></i> 8.2K</a></li>
                                            <li><a href="#"><i className="fa fa-gamepad"></i> Youtube</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="down-content">
                                <div className="avatar">
                                    <img src={require("./assets/images/avatar-04.jpg")} alt=""
                                         style={{maxWidth: "46px", borderRadius: "50%", float: "left"}}/>
                                </div>
                                <span><i className="fa fa-check"></i> Remind TV</span>
                                <h4>Hát hò 1 xíu rồi chơi game</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="main-button">
                            <a href="streams">{t("loadMoreStream")}</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="live-stream">
                <div className="col-lg-12">
                    <div className="heading-section">
                        <h4><em>Chơi Game Cùng Nhau</em></h4>
                    </div>
                    <div className="row">
                        <Rooms/>
                    </div>
                </div>
            </div>

        </div>

    )
}