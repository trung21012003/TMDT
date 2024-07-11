import LiveStream from "./LiveStream";
import CarouselProduct from "./CarouselProduct";
import Header from "./Header";
import Footer from "./Footer";

export default function Stream(){
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
                                        <h4><em>Live</em> Streams</h4>
                                    </div>
                                       <CarouselProduct />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="top-streamers">
                                    <div className="heading-section">
                                        <h4><em>Top</em> Streamers</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <span>01</span>
                                            <img src={require("./assets/images/avatar-01.jpg")} alt="" style={{maxWidth: "46px", borderRadius: "50%", marginRight: "15px" }}/>
                                                <h6><i className="fa fa-check"></i> LahutaM</h6>
                                                <div className="main-button">
                                                    <a href="#">Follow</a>
                                                </div>
                                        </li>
                                        <li>
                                            <span>02</span>
                                            <img src={require("./assets/images/avatar-02.jpg")} alt="" style={{maxWidth: "46px", borderRadius: "50%", marginRight: "15px" }} />
                                                <h6><i className="fa fa-check"></i> Kengan</h6>
                                                <div className="main-button">
                                                    <a href="#">Follow</a>
                                                </div>
                                        </li>
                                        <li>
                                            <span>03</span>
                                            <img src={require("./assets/images/avatar-03.jpg")} alt="" style={{maxWidth: "46px", borderRadius: "50%", marginRight: "15px" }} />
                                                <h6><i className="fa fa-check"></i> Areluwa</h6>
                                                <div className="main-button">
                                                    <a href="#">Follow</a>
                                                </div>
                                        </li>
                                        <li>
                                            <span>04</span>
                                            <img src={require("./assets/images/avatar-04.jpg")} alt="" style={{maxWidth: "46px", borderRadius: "50%", marginRight: "15px" }} />
                                                <h6><i className="fa fa-check"></i> Omeg</h6>
                                                <div className="main-button">
                                                    <a href="#">Follow</a>
                                                </div>
                                        </li>
                                        <li>
                                            <span>05</span>
                                            <img src={require("./assets/images/avatar-01.jpg")} alt="" style={{maxWidth: "46px", borderRadius: "50%", marginRight: "15px" }} />
                                                <h6><i className="fa fa-check"></i> GangTeam</h6>
                                                <div className="main-button">
                                                    <a href="#">Follow</a>
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