import styles from './module/login.module.css'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';
import {login} from "../Reducers/AuthReducer";

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const users = useSelector((state) => state.users );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function submitform(data) {

        let foundUser = null;
        users.forEach((u) => {
            if (u.email === data.email && u.password === data.password) {
                foundUser = u;
            }
        });
        console.log(data);
        if(foundUser != null){
            dispatch(login({isLoggedIn: true, user: foundUser}));
            navigate("/");

        }else {
            navigate("/login");


        }

    }
    return (
        <div className={styles.login} >

            <h1> Đăng Nhập </h1>

            <form onSubmit={handleSubmit(submitform)}>

                <input
                    type="text" className={styles.input}
                    placeholder="Email"
                    {...register("email", {required: "This field is required ", pattern:{
                            value: /^\S+@\S+$/i ,
                            message: "Invalid email address"
                        }})}
                />
                {errors.email && <span className={styles.span}>{errors.email.message}</span>}
                <input type="password"
                       className={styles.input} placeholder="Password"
                       {...register("password", {
                           required: "This field is required " ,

                       })} />
                {errors.password && <span className={styles.span}>{errors.password.message}</span>}
                <br />
                <button type="submit" className="btn btn-primary btn-block btn-large">Đăng nhập</button>
            </form>
        </div>

    )
}