import styles from './module/login.module.css'
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';
import {login} from "../Reducers/AuthReducer";
import {useTranslation} from "react-i18next";

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
        <div className={styles.login} >

            <h1> {t("LOGIN")} </h1>

            <form onSubmit={handleSubmit(submitform)}>

                <input
                    type="text" className={styles.input}
                    placeholder="Email"
                    {...register("email", {
                        required: "This field is required ", pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address"
                        }
                    })}
                />
                {errors.email && <span className={styles.span}>{errors.email.message}</span>}
                <input type="password"
                       className={styles.input} placeholder="Password"
                       {...register("password", {
                           required: "This field is required ",
                       })} />
                {errors.password && <span className={styles.span}>{errors.password.message}</span>}
                <br/>
                <button type="submit" className="btn btn-outline-success">{t("login")}</button>
                <Link to="/signUp" className="active">
                    <button style={{marginLeft: "90px"}} type="button" className="btn btn-outline-info">{t("register")}
                    </button>
                </Link>
                <div style={{display: "flex"}}>
                    <Link to="/" className="active">
                        <button style={{marginLeft: "1px", marginTop: "10px", width: "110px"}} type="button"
                                className="btn btn-outline-light">Trang chủ
                        </button>
                    </Link>
                    <Link to="/forgotpassword" className="active">
                        <button style={{marginLeft: "30px", marginTop: "10px", width: "150px"}} type="button"
                                className="btn btn-outline-warning">Quên mật khẩu
                        </button>
                    </Link>
                </div>
            </form>
        </div>

    )
}