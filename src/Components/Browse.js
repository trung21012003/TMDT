import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Header from "./Header";
import CarouselProduct from "./CarouselProduct";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export  default  function  Browse () {
    return (
        <>
            <Header />
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-content">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="featured-games header-text">
                                        <div className="heading-section">
                                            <h4><em>Featured</em> Games</h4>
                                        </div>
                                        <CarouselProduct />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="top-downloaded">
                                        <div className="heading-section">
                                            <h4><em>Top</em> Downloaded</h4>
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
                                            <a href="profile.html">View All Games</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="start-stream">
                                <div className="col-lg-12">
                                    <div className="heading-section">
                                        <h4><em>How To Start Your</em> Live Stream</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="item">
                                                <div className="icon">
                                                    <img src="assets/images/service-01.jpg" alt=""
                                                         style={{maxWidth: "60px", borderRadius: "50%"}}/>
                                                </div>
                                                <h4>Go To Your Profile</h4>
                                                <p>Cyborg Gaming is free HTML CSS website template provided by
                                                    TemplateMo. This is Bootstrap v5.2.0 layout.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="item">
                                                <div className="icon">
                                                    <img src="assets/images/service-02.jpg" alt=""
                                                         style={{maxWidth: "60px", borderRadius: "50%"}}/>
                                                </div>
                                                <h4>Live Stream Button</h4>
                                                <p>If you wish to support us, you can make a <a
                                                    href="https://paypal.me/templatemo" target="_blank">small
                                                    contribution via PayPal</a> to info [at] templatemo.com</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="item">
                                                <div className="icon">
                                                    <img src="assets/images/service-03.jpg" alt=""
                                                         style={{maxWidth: "60px", borderRadius: "50%"}}/>
                                                </div>
                                                <h4>You Are Live</h4>
                                                <p>You are not allowed to redistribute this template's downloadable ZIP
                                                    file on any other template collection website.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="main-button">
                                                <a href="profile.html">Go To Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="live-stream">
                                <div className="col-lg-12">
                                    <div className="heading-section">
                                        <h4><em>Most Popular</em> Live Stream</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="item">
                                            <div className="thumb">
                                                <img src="assets/images/stream-01.jpg" alt=""/>
                                                <div className="hover-effect">
                                                    <div className="content">
                                                        <div className="live">
                                                            <a href="#">Live</a>
                                                        </div>
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-eye"></i> 1.2K</a></li>
                                                            <li><a href="#"><i className="fa fa-gamepad"></i> CS-GO</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="down-content">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar-01.jpg" alt=""
                                                         style={{
                                                             maxWidth: "46px",
                                                             borderRadius: "50%",
                                                             float: "left"
                                                         }}/>
                                                </div>
                                                <span><i className="fa fa-check"></i> KenganC</span>
                                                <h4>Just Talking With Fans</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="item">
                                            <div className="thumb">
                                                <img src="assets/images/stream-02.jpg" alt=""/>
                                                <div className="hover-effect">
                                                    <div className="content">
                                                        <div className="live">
                                                            <a href="#">Live</a>
                                                        </div>
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-eye"></i> 1.2K</a></li>
                                                            <li><a href="#"><i className="fa fa-gamepad"></i> CS-GO</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="down-content">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar-02.jpg" alt=""
                                                         style={{
                                                             maxWidth: "46px",
                                                             borderRadius: "50%",
                                                             float: "left"
                                                         }}/>
                                                </div>
                                                <span><i className="fa fa-check"></i> LunaMa</span>
                                                <h4>CS-GO 36 Hours Live Stream</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="item">
                                            <div className="thumb">
                                                <img src="assets/images/stream-03.jpg" alt=""/>
                                                <div className="hover-effect">
                                                    <div className="content">
                                                        <div className="live">
                                                            <a href="#">Live</a>
                                                        </div>
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-eye"></i> 1.2K</a></li>
                                                            <li><a href="#"><i className="fa fa-gamepad"></i> CS-GO</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="down-content">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar-03.jpg" alt=""
                                                         style={{
                                                             maxWidth: "46px",
                                                             borderRadius: "50%",
                                                             float: "left"
                                                         }}/>
                                                </div>
                                                <span><i className="fa fa-check"></i> Areluwa</span>
                                                <h4>Maybe Nathej Allnight Chillin'</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="item">
                                            <div className="thumb">
                                                <img src="assets/images/stream-04.jpg" alt=""/>
                                                <div className="hover-effect">
                                                    <div className="content">
                                                        <div className="live">
                                                            <a href="#">Live</a>
                                                        </div>
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-eye"></i> 1.2K</a></li>
                                                            <li><a href="#"><i className="fa fa-gamepad"></i> CS-GO</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="down-content">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar-04.jpg" alt=""
                                                         style={{
                                                             maxWidth: "46px",
                                                             borderRadius: "50%",
                                                             float: "left"
                                                         }}/>
                                                </div>
                                                <span><i className="fa fa-check"></i> GangTm</span>
                                                <h4>Live Streaming Till Morning</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="main-button">
                                            <a href="streams.html">Discover All Streams</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
