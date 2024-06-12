import styles from './module/login.module.css'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {login} from "../Reducers/AuthReducer";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const users = useSelector((state) => state.users );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        let foundUser = null;
        users.forEach((u) => {
            if (u.email === email && u.password === password) {
                foundUser = u;
            }
        });
        if(foundUser != null){
            dispatch(login({isLoggedIn: true, user: foundUser}));
            navigate("/")
        }else {
            navigate("/")
        }
    }
    return (
        <div className={styles.login} onSubmit={handleSubmit}>
            <h1> Đăng Nhập </h1>
            <form >
                <input type="text" className={styles.input}  onChange={(e) => setEmail(e.target.value)} placeholder="Email" required="required"/>
                <input type="password" onChange={(e) => setPassword(e.target.value)}   className={styles.input} placeholder="Password" required="required"/>
                <button type="submit" className="btn btn-primary btn-block btn-large">Đăng nhập</button>
            </form>
        </div>

    )
}