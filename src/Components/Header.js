import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useTransition} from "react";
import logo from './assets/images/logo.png';
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

export default function Header() {
    const location = useLocation();
    const currentPath = location.pathname;
    const {isLoggedIn} = useSelector((state) => state.auth.isLoggedIn);
    const {i18n} = useTranslation()
    const {t} =useTranslation()
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
                                <Link to="/" className="logo">
                                    <img src={logo} alt="Logo"/>
                                </Link>
                                <div className="search-input">
                                    <form id="search" action="#">
                                        <input type="text" placeholder="Type Something" id='searchText'
                                               name="searchKeyword"
                                        />
                                        <i className="fa fa-search"></i>
                                    </form>
                                </div>

                                <ul className="nav">
                                    <li><Link to="/" className={currentPath === '/' ? 'active' : ''}>{t("home")}</Link>
                                    </li>
                                    <li><Link to="/cart"
                                              className={currentPath === '/cart' ? 'active' : ''}><i style={{fontSize :"20px"}}
                                        className="fa fa-cart-plus"></i></Link></li>
                                    <li><Link to="/browse"
                                              className={currentPath === '/browse' ? 'active' : ''}>Browe</Link></li>
                                    <li><Link to="/streams"
                                              className={currentPath === '/streams' ? 'active' : ''}>Streams</Link></li>
                                    <li><Link to="/games"
                                              className={currentPath === '/games' ? 'active' : ''}>Games</Link></li>
                                    <li>
                                        <div className="language">
                                            <select style={{backgroundColor: "#668"}} className="chooseLanguage"
                                                    onChange={(e) => changeLanguage(e.target.value)}>
                                                <option value="vi" className="language-vi">
                                                    Tiếng Việt
                                                </option>
                                                <option value="en" className="language-en">
                                                    Tiếng Anh
                                                </option>
                                            </select>

                                        </div>
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