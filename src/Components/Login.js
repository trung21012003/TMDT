import styles from './module/login.module.css'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';
import {login} from "../Reducers/AuthReducer";
import {ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
    const { register, handleSubmit,setError, formState: { errors } } = useForm();
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
        if(foundUser != null){
            dispatch(login({isLoggedIn: true, user: foundUser}));
            navigate("/")
        }else {
            navigate("/login");
            toast.error('', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

         }

    }
    return (
        <div className={styles.login} >
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />

            <h1> Đăng Nhập </h1>
            {errors.test && <span className={styles.span}>{errors.test.message}</span>}
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
                           pattern: {
                               value: /^\S+@\S+$/i,
                       },
                           minLength: {
                               value: 8,
                               message: "Password length should be at least 8 characters"
                           }
                       })} />
                {errors.password && <span className={styles.span}>{errors.password.message}</span>}
                <br />
                <button type="submit" className="btn btn-primary btn-block btn-large">Đăng nhập</button>
            </form>
        </div>

    )
}