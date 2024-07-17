import LiveStream from "./LiveStream";
import CarouselProduct from "./CarouselProduct";
import Header from "./Header";
import Footer from "./Footer";
import {useTranslation} from "react-i18next";

export default function Stream(){
    const {i18n} = useTranslation()
    const {t} =useTranslation();
    return(
        <div className="container">
            <Header />
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-content">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="featured-games header-text">
                                    <div className="heading-section">
                                        <h4><em>{t("live")}</em> {t("stream")}</h4>
                                    </div>
                                       <CarouselProduct />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="top-streamers">
                                    <div className="heading-section">
                                        <h4><em>{t("top")}</em> {t("streamer")}</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <span>01</span>
                                            <img style = {{width: "46px",height : "46px"}} src={require("./assets/images/domixi1.jpg")} alt="" style={{ width: "46px",height : "46px",maxWidth: "46px", borderRadius: "50%", marginRight: "15px" }}/>
                                                <h6><i className="fa fa-check"></i> Mixi Gaming</h6>
                                                <div className="main-button">
                                                    <a href="#">{t("follow")}</a>
                                                </div>
                                        </li>
                                        <li>
                                            <span>02</span>
                                            <img src={require("./assets/images/3ga.jpg")} alt="" style={{ width: "46px",height : "46px", maxWidth: "46px", borderRadius: "50%", marginRight: "15px" }} />
                                                <h6><i className="fa fa-check"></i> Thầy Giáo Ba</h6>
                                                <div className="main-button">
                                                    <a href="#">{t("follow")}</a>
                                                </div>
                                        </li>
                                        <li>
                                            <span>03</span>
                                            <img  src={require("./assets/images/misthy.jpg")} alt="" style={{ width: "46px",height : "46px", maxWidth: "46px", borderRadius: "50%", marginRight: "15px" }} />
                                                <h6><i className="fa fa-check"></i> Misthy</h6>
                                                <div className="main-button">
                                                    <a href="#">{t("follow")}</a>
                                                </div>
                                        </li>
                                        <li>
                                            <span>04</span>
                                            <img  src={require("./assets/images/pewpew.jpg")} alt="" style={{ width: "46px",height : "46px",maxWidth: "46px", borderRadius: "50%", marginRight: "15px" }} />
                                                <h6><i className="fa fa-check"></i> PewPew</h6>
                                                <div className="main-button">
                                                    <a href="#">{t("follow")}</a>
                                                </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <LiveStream />
                    </div>
                </div>
            </div>
            <Footer />
        </div>

)
}