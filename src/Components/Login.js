
import styles from './module/login.module.css'
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';
import {login} from "../Reducers/AuthReducer";
import {useTranslation} from "react-i18next";
import logo from "./assets/images/22.png";

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const users = useSelector((state) => state.users );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {i18n} = useTranslation()
    const {t} =useTranslation();
    function submitform(data) {
        let foundUser = null;
        users.forEach((u) => {
            if (u.email === data.email && u.password === data.password) {
                foundUser = u;
            }
        });
        console.log(data);
        if(foundUser != null){
            dispatch(login({user: foundUser}));
            navigate("/");

        }else {
            navigate("/login");


        }

    }
    return (
        <div className={styles.login}>
            <Link to="/" className="logo m-0">
                <img src={logo} alt="Logo"/>
            </Link>
            <div style={{border: "2px solid lightgray", padding: "10px", borderRadius: "7%"}}>

                <div style={{display: "flex", justifyContent: "center"}}>
                    <Link to="/login" className="active">
                        <h2 type="text" className="">{t("login")}  </h2>
                    </Link>


                </div>


                <form onSubmit={handleSubmit(submitform)}>

                    <input
                        type="text" className={styles.input}
                        placeholder="Email(*)"
                        {...register("email", {
                            required: "This field is required ", pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email && <span className={styles.span}>{errors.email.message}</span>}
                    <input type="password"
                           className={styles.input} placeholder="Password(*)"
                           {...register("password", {
                               required: "This field is required ",
                           })} />
                    {errors.password && <span className={styles.span}>{errors.password.message}</span>}
                    <br/>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <button type="submit" style={{backgroundColor: "#e75e8d"}}
                                className="btn btn-outline-dark ">{t("login")} </button>
                        <Link to="/" className="active">
                            <button style={{marginLeft: "70px", marginTop: "5px", width: "110px"}} type="button"
                                    className="btn btn-outline-light">{t("home")}
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
            <div style={{display: "flex",justifyContent: "space-between" , margin:"20px 15px" }}>
            <h6 style={{justifyContent :"center"}} > {t("account")}</h6> <h6><Link to="/signup" className="active"> {t("register")} {t("now")}</Link></h6>
            </div>
        </div>
    )
}
