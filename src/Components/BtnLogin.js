import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { logout } from "../Reducers/AuthReducer";
import logoProfile from  "./assets/images/profile-header.jpg"
import {useTranslation} from "react-i18next";
export default function BtnLogin() {
    const { isLoggedIn } = useSelector((state) => state.auth);
    console.log({ isLoggedIn });
    const dispatch = useDispatch();
    const {i18n} = useTranslation()
    const {t} =useTranslation();
    function handleLogOut() {
        dispatch(logout())
    }
    if(!isLoggedIn) {
        return (
            <li style={{width:"190px",height:"50px"}}>
                <Link to="/login" className="btn btn-link"> {t("login")} <img src={logoProfile}  /></Link>
            </li>
        )
    } else {
        return (
            <li style={{width:"190px"}}>
                <button className="btn btn-danger" onClick={handleLogOut}>{t("logout")}
                </button>
            </li>
        )
    }

}