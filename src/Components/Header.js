import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState, useTransition} from "react";
import logo from './assets/images/22.png';
import './assets/css/owl.css';
import './assets/css/animate.css';
import './assets/css/flex-slider.css';
import './assets/css/templatemo-cyborg-gaming.css';
import {Link, useLocation} from 'react-router-dom';
import {useSelector} from "react-redux";
import 'font-awesome/css/font-awesome.min.css';
import BtnLogin from "./BtnLogin";
import {useTranslation} from "react-i18next";
import "bootstrap-icons/font/bootstrap-icons.css";
import Loading from "./Loading";

export default function Header() {
    const Carts = useSelector((state) => state.cart.carts);
    const location = useLocation();
    const currentPath = location.pathname;
    const {isLoggedIn} = useSelector((state) => state.auth.isLoggedIn);
    const {i18n} = useTranslation()
    const {t} =useTranslation();
    const changeLanguage = (lng) => {
        if (lng === "vi" || lng === "en") {
            i18n.changeLanguage(lng);
        } else {
            console.error("Khong ton tai");
        }
    };
    return (
        <div className="col-12">
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <Link to="/" className="logo m-0" style={{width:"90px"}}>
                                    <img src={logo} alt="Logo" />
                                </Link>


                                <ul className="nav">
                                    <li><Link to="/" className={currentPath === '/' ? 'active' : ''}>{t("home")}</Link>
                                    </li>
                                    <li><Link to="/browse"
                                              className={currentPath === '/browse' ? 'active' : ''}>{t("browser")}</Link></li>
                                    <li><Link to="/streams"
                                              className={currentPath === '/streams' ? 'active' : ''}>{t("stream")}</Link></li>
                                    <li><Link to="/games"
                                              className={currentPath === '/games' ? 'active' : ''}>{t("game")}</Link></li>
                                    <li >
                                        <div className="language" >
                                            <select style={{backgroundColor: "rgb(31,33,34)", color:"#5f5e60", border: "none"}}  className="chooseLanguage"
                                                    onChange={(e) => changeLanguage(e.target.value)}>
                                                <option value="vi" className="language-vi" >
                                                    Vietnamese
                                                </option>
                                                <option value="en" className="language-en">
                                                    English
                                                </option>
                                            </select>
                                        </div>
                                    </li>
                                    <li style={{width:"70px"}}>
                                        <Link to="/cart"
                                              className={currentPath === '/checkout' ? 'active' : ''}><i
                                            style={{fontSize: "20px"}}
                                            className="fa fa-cart-plus"></i>
                                            <sup style={{padding: "3px"}}>{Carts.length}</sup>
                                        </Link>

                                    </li>
                                    <BtnLogin/>
                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>

                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    )
}