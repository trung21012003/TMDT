import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {useTranslation} from "react-i18next";
export default function CarouselProduct() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        arrows: false,
        autoplaySpeed : 4000,
    };
    const {i18n} = useTranslation()
    const {t} =useTranslation();
    return (
        <Slider {...settings}>
            <div className="item" >
                <div className="thumb">
                    <img style={{width:"220px",height:"378px"}} src={require("./assets/images/apex1.jpg")} alt=""/>
                    <div className="hover-effect">
                        <h6>2.4K {t("stream")}</h6>
                    </div>
                </div>
                <h4>APEX-2<br/><span>249K {t("download")}</span></h4>
                <ul>
                    <li><i className="fa fa-star"></i> 4.8</li>
                    <li><i className="fa fa-download"></i> 2.3M</li>
                </ul>
            </div>
            <div className="item" style={{marginLeft:"10px"}}>
                <div className="thumb">
                    <img style={{width:"220px",height:"378px"}} src={require("./assets/images/btf1.jpg")} alt=""/>
                    <div className="hover-effect">
                        <h6>2.4K {t("stream")}</h6>
                    </div>
                </div>
                <h4>Battle Field<br/><span>249K {t("download")}</span></h4>
                <ul>
                    <li><i className="fa fa-star"></i> 4.8</li>
                    <li><i className="fa fa-download"></i> 2.3M</li>
                </ul>
            </div>
            <div className="item" >
                <div className="thumb">
                    <img style={{width:"220px",height:"378px"}} src={require("./assets/images/got2.jpg")} alt=""/>
                    <div className="hover-effect">
                        <h6>2.4K {t("stream")}</h6>
                    </div>
                </div>
                <h4>Getting Over It<br/><span>249K {t("download")}</span></h4>
                <ul>
                    <li><i className="fa fa-star"></i> 4.8</li>
                    <li><i className="fa fa-download"></i> 2.3M</li>
                </ul>
            </div>
        </Slider>

    );
};
