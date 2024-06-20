import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function CarouselProduct() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
        autoplaySpeed : 2000,
    };
    return (
        <Slider {...settings}>
            <div className="item">
                <div className="thumb">
                    <img style={{width:"220px",height:"378px"}} src={require("./assets/images/featured-01.jpg")} alt=""/>
                    <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                    </div>
                </div>
                <h4>CS-GO<br/><span>249K Downloads</span></h4>
                <ul>
                    <li><i className="fa fa-star"></i> 4.8</li>
                    <li><i className="fa fa-download"></i> 2.3M</li>
                </ul>
            </div>
            <div className="item" style={{marginLeft:"10px"}}>
                <div className="thumb">
                    <img style={{width:"220px",height:"378px"}} src={require("./assets/images/featured-02.jpg")} alt=""/>
                    <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                    </div>
                </div>
                <h4>Gamezer<br/><span>249K Downloads</span></h4>
                <ul>
                    <li><i className="fa fa-star"></i> 4.8</li>
                    <li><i className="fa fa-download"></i> 2.3M</li>
                </ul>
            </div>
            <div className="item" >
                <div className="thumb">
                    <img style={{width:"220px",height:"378px"}} src={require("./assets/images/featured-03.jpg")} alt=""/>
                    <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                    </div>
                </div>
                <h4>Island Rusty<br/><span>249K Downloads</span></h4>
                <ul>
                    <li><i className="fa fa-star"></i> 4.8</li>
                    <li><i className="fa fa-download"></i> 2.3M</li>
                </ul>
            </div>
        </Slider>

    );
};
