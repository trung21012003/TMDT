import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {useTranslation} from "react-i18next";
import "./assets/css/game.css"
export default function Category() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        arrows: false,
        autoplaySpeed : 3000,
    };
    const {i18n} = useTranslation()
    const {t} =useTranslation();
    return (
        <Slider {...settings}>
            <div className="thumb">
                <img style={{width: "250px", height: "378px"}} src={require("./assets/images/tocdo.png")}
                     alt=""/>
                <div className="overlay"
                     style={{backgroundImage: "linear-gradient(to top, rgba(3, 3, 161, 1), rgba(0, 0, 255, 0))"}}>
                    <div className="text">{t("racing")}</div>
                </div>
            </div>

            <div className="thumb">
                <img style={{width: "250px", height: "378px"}} src={require("./assets/images/simple.png")}
                     alt=""/>
                <div className="overlay"
                     style={{backgroundImage: "linear-gradient(to top, rgba(163, 1, 1, 1), rgba(255, 0, 0, 0))"}}>
                    <div className="text">{t("simulation")}</div>
                </div>
            </div>

            <div className="thumb">
                <img style={{width: "250px", height: "378px"}} src={require("./assets/images/solo.png")}
                     alt=""/>
                <div className="overlay"
                     style={{backgroundImage: "linear-gradient(to top, rgba(222, 161, 13, 1), rgba(255, 255, 0, 0))"}}>
                    <div className="text">{t("fighting")}</div>
                </div>
            </div>

            <div className="thumb">
                <img style={{width: "250px", height: "378px"}} src={require("./assets/images/hanhdong.png")}
                     alt=""/>
                <div className="overlay"
                     style={{backgroundImage: "linear-gradient(to top, rgba(168, 1, 169, 1), rgba(128, 0, 128, 0))"}}>
                    <div className="text">{t("action")}</div>
                </div>
            </div>

            <div className="thumb">
                <img style={{width: "250px", height: "378px"}} src={require("./assets/images/kinhdi.png")}
                     alt=""/>
                <div className="overlay"
                     style={{backgroundImage: "linear-gradient(to top, rgba(139, 131, 134, 1), rgba(0, 0, 255, 0))"}}>
                    <div className="text">{t("horrified")}</div>
                </div>
            </div>

            <div className="thumb">
                <img style={{width: "250px", height: "378px"}} src={require("./assets/images/phieuluu.png")}
                     alt=""/>
                <div className="overlay"
                     style={{backgroundImage: "linear-gradient(to top, rgba(5, 121, 2, 1), rgba(0, 0, 255, 0))"}}>
                    <div className="text">{t("adventure")}</div>
                </div>
            </div>

            <div className="thumb">
                <img style={{width: "250px", height: "378px"}} src={require("./assets/images/sinhton.png")}
                     alt=""/>
                <div className="overlay"
                     style={{backgroundImage: "linear-gradient(to top, rgba(139, 121, 94, 1), rgba(0, 0, 255, 0))"}}>
                    <div className="text">{t("survival")}</div>
                </div>
            </div>

            <div className="thumb">
                <img style={{width: "250px", height: "378px"}} src={require("./assets/images/thethao.png")}
                     alt=""/>
                <div className="overlay"
                     style={{backgroundImage: "linear-gradient(to top, rgba(135, 206, 255, 1), rgba(0, 0, 255, 0))"}}>
                    <div className="text">{t("sport")}</div>
                </div>
            </div>

        </Slider>

    );
};
