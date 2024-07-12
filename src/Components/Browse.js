import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Header from "./Header";
import CarouselProduct from "./CarouselProduct";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from "./Footer";
import LiveStream from "./LiveStream";
import {useTranslation} from "react-i18next";
export default function  Browse () {
    const {i18n} = useTranslation()
    const {t} =useTranslation();
    return (
        <>
            <div className="container">
                <Header />
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-content">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="featured-games header-text">
                                        <div className="heading-section">
                                            <h4><em>{t("features")}</em> {t("game")}</h4>
                                        </div>
                                        <CarouselProduct />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="top-downloaded">
                                        <div className="heading-section">
                                            <h4><em>{t("top")}</em> {t("download")}</h4>
                                        </div>
                                        <ul>
                                            <li>
                                                <img src={require("./assets/images/game-01.jpg")} alt=""
                                                     className="templatemo-item"/>
                                                <h4>Fortnite</h4>
                                                <h6>Sandbox</h6>
                                                <span><i className="fa fa-star"
                                                         style={{color: "yellow"}}></i> 4.9</span>
                                                <span><i className="fa fa-download"
                                                         style={{color: "#ec6090"}}></i> 2.2M</span>
                                                <div className="download">
                                                    <a href="#"><i className="fa fa-download"></i></a>
                                                </div>
                                            </li>
                                            <li>
                                                <img src={require("./assets/images/game-02.jpg")} alt=""
                                                     className="templatemo-item"/>
                                                <h4>CS-GO</h4>
                                                <h6>Legendary</h6>
                                                <span><i className="fa fa-star"
                                                         style={{color: "yellow"}}></i> 4.9</span>
                                                <span><i className="fa fa-download"
                                                         style={{color: "#ec6090"}}></i> 2.2M</span>
                                                <div className="download">
                                                    <a href="#"><i className="fa fa-download"></i></a>
                                                </div>
                                            </li>
                                            <li>
                                                <img src={require("./assets/images/game-03.jpg")} alt=""
                                                     className="templatemo-item"/>
                                                <h4>PugG</h4>
                                                <h6>Battle Royale</h6>
                                                <span><i className="fa fa-star"
                                                         style={{color: "yellow"}}></i> 4.9</span>
                                                <span><i className="fa fa-download"
                                                         style={{color: "#ec6090"}}></i> 2.2M</span>
                                                <div className="download">
                                                    <a href="#"><i className="fa fa-download"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="text-button">
                                            <a href="profile">{t("viewAllGame")}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="start-stream">
                                <div className="col-lg-12">
                                    <div className="heading-section">
                                        <h4><em>{t("howToStartYour")}</em> {t("liveStream")}</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="item">
                                                <div className="icon">
                                                    <img src={require("./assets/images/service-01.jpg")} alt=""
                                                         style={{maxWidth: "60px", borderRadius: "50%"}}/>
                                                </div>
                                                <h4>{t("goToProfile")}</h4>
                                                <p>Cyborg Gaming is free HTML CSS website template provided by
                                                    TemplateMo. This is Bootstrap v5.2.0 layout.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="item">
                                                <div className="icon">
                                                    <img src={require("./assets/images/service-02.jpg")} alt=""
                                                         style={{maxWidth: "60px", borderRadius: "50%"}}/>
                                                </div>
                                                <h4>{t("liveStream")}</h4>
                                                <p>If you wish to support us, you can make a <a
                                                    href="https://paypal.me/templatemo" target="_blank">small
                                                    contribution via PayPal</a> to info [at] templatemo.com</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="item">
                                                <div className="icon">
                                                    <img src={require("./assets/images/service-03.jpg")} alt=""
                                                         style={{maxWidth: "60px", borderRadius: "50%"}}/>
                                                </div>
                                                <h4>{t("youAreLive")}</h4>
                                                <p>You are not allowed to redistribute this template's downloadable ZIP
                                                    file on any other template collection website.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="main-button">
                                                <a href="profile.html">{t("goToProfile")}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <LiveStream />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};
