import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import Header from "./Header";
import Footer from "./Footer";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Details(){
    const {id} = useParams();
    console.log(id);
    const products = useSelector((state) => state.products);
    console.log(products);
    const existingProduct = products.filter(f => f.id == id);
    const product = existingProduct[0];
    console.log(product);
    return(
        <>
        <div className="container">
            <Header />
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-content">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="feature-banner header-text">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src={require(`./assets/images/${product.image1}`)}  style={{borderRadius: "23px"}} />;
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="thumb">
                                                <img src={require(`./assets/images/${product.image2}`)} style={{borderRadius: "23px"}} />
                                                    <Link to={product.video} target="_blank">
                                                        <i className="fa fa-play"></i>
                                                    </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="game-details">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2>{product.name} Details</h2>
                                </div>
                                <div className="col-lg-12">
                                    <div className="content">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="left-info">
                                                    <div className="left">
                                                        <h4>Fortnite</h4>
                                                        <span>Sandbox</span>
                                                    </div>
                                                    <ul>
                                                        <li><i className="fa fa-star"></i> 4.8</li>
                                                        <li><i className="fa fa-download"></i> 2.3M</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="right-info">
                                                    <ul>
                                                        <li><i className="fa fa-star"></i> 4.8</li>
                                                        <li><i className="fa fa-download"></i> 2.3M</li>
                                                        <li><i className="fa fa-server"></i> 36GB</li>
                                                        <li><i className="fa fa-gamepad"></i> Action</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <img src={require(`./assets/images/${product.image3}`)} alt="" style={{borderRadius: "23px", marginBottom: "30px"}} />
                                            </div>
                                            <div className="col-lg-4">
                                                <img src={require(`./assets/images/${product.image4}`)} alt="" style={{borderRadius: "23px", marginBottom: "30px"}} />
                                            </div>
                                            <div className="col-lg-4">
                                                <img src={require(`./assets/images/${product.image5}`)} alt="" style={{borderRadius: "23px", marginBottom: "30px"}} />
                                            </div>
                                            <div className="col-lg-12">
                                                <p>{product.description}</p>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="main-border-button">
                                                    <a href="#">Download Fortnite Now!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="other-games">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="heading-section">
                                        <h4><em>Other Related</em> Games</h4>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item">
                                        <img src={require("./assets/images/game-01.jpg")} alt="" className="templatemo-item" />
                                            <h4>Dota 2</h4><span>Sandbox</span>
                                            <ul>
                                                <li><i className="fa fa-star"></i> 4.8</li>
                                                <li><i className="fa fa-download"></i> 2.3M</li>
                                            </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item">
                                        <img src={require("./assets/images/game-02.jpg")} alt="" className="templatemo-item" />
                                            <h4>Dota 2</h4><span>Sandbox</span>
                                            <ul>
                                                <li><i className="fa fa-star"></i> 4.8</li>
                                                <li><i className="fa fa-download"></i> 2.3M</li>
                                            </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item">
                                        <img src={require("./assets/images/game-03.jpg")} alt="" className="templatemo-item" />
                                            <h4>Dota 2</h4><span>Sandbox</span>
                                            <ul>
                                                <li><i className="fa fa-star"></i> 4.8</li>
                                                <li><i className="fa fa-download"></i> 2.3M</li>
                                            </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item">
                                        <img src={require("./assets/images/game-02.jpg")} alt="" className="templatemo-item" />
                                            <h4>Dota 2</h4><span>Sandbox</span>
                                            <ul>
                                                <li><i className="fa fa-star"></i> 4.8</li>
                                                <li><i className="fa fa-download"></i> 2.3M</li>
                                            </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item">
                                        <img src={require("./assets/images/game-03.jpg")} alt="" className="templatemo-item" />
                                            <h4>Dota 2</h4><span>Sandbox</span>
                                            <ul>
                                                <li><i className="fa fa-star"></i> 4.8</li>
                                                <li><i className="fa fa-download"></i> 2.3M</li>
                                            </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item">
                                        <img src={require("./assets/images/game-01.jpg")} alt="" className="templatemo-item" />
                                            <h4>Dota 2</h4><span>Sandbox</span>
                                            <ul>
                                                <li><i className="fa fa-star"></i> 4.8</li>
                                                <li><i className="fa fa-download"></i> 2.3M</li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}