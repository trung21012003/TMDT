import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { logout } from "../Reducers/AuthReducer";
import logoProfile from  "./assets/images/profile-header.jpg"
export default function BtnLogin() {
    const { isLoggedIn } = useSelector((state) => state.auth);
    console.log({ isLoggedIn });
    const dispatch = useDispatch();

    function handleLogOut() {
        dispatch(logout())
    }
    if(!isLoggedIn) {
        return (

            <li><Link to="/login">Đăng Nhập <img src={logoProfile}
                                                      alt=""/></Link>
            </li>

        )
    } else {
        return (
            <li> <button className="btn  btn-danger" onClick={handleLogOut} >Đăng Xuất <img src="assets/images/profile-header.jpg"
                                                      alt=""/></button>
            </li>
        )
    }

}