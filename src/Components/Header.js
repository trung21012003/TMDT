import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import logo  from './assets/images/logo.png';
import './assets/css/owl.css';
import './assets/css/animate.css';
import './assets/css/flex-slider.css';
import './assets/css/templatemo-cyborg-gaming.css';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

import BtnLogin from "./BtnLogin";
export default function Header() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoggedIn } = useSelector((state) => state.auth.isLoggedIn);


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
                                    <li><Link to="/" className="active">Home</Link></li>
                                    <li><a href="browse">Browse</a></li>
                                    <li><a href="details">Details</a></li>
                                    <li><a href="streams">Streams</a></li>
                                    <BtnLogin />


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