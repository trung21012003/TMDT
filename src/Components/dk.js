
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../Reducers/UserReducer";
import {Link, useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';
import Header from "./Header"
import styles from "./module/login.module.css";
export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [gender, setGenDer] = useState("Chọn Giới Tính");
    const [birthday, setBirthday] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [phone, setPhone] = useState("");
    const users = useSelector((state) => state.users );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register,  formState: { errors } } = useForm();
    const handleSubmit = (e) => {
        e.preventDefault();
        const lastUserId = users[users.length - 1].id;
        const newId = lastUserId + 1
        if((isChecked) && (password === passwordConfirm)) {
            dispatch(addUser({id: newId , email, password, phone, address, city, gender, birthday}));
            navigate('/');
        }
    }
    return (
        <div className="container">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-content">
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <Link to="/" >
                                    <button type="submit" className="btn btn-light col-3">
                                        <i   style={{fontSize: "20px", marginRight: "4px"}} className="fa fa-chevron-left"></i> Back to home
                                    </button>
                                </Link>
                                <div className="col-6">
                                    <label htmlFor="inputAddress2" className="form-label">Phone Number</label>
                                    <input type="number" className="form-control" id="inputAddress2" onChange={(e) => setPhone(e.target.value)}
                                           placeholder="0909090909"
                                           {...register("phone", {
                                               required: "This field is required ", pattern: {
                                                   value: /^0\d{9}$/,
                                                   message: "Invalid phone number"
                                               }
                                           })}
                                    />
                                    {errors.phone && <span className={styles.span}>{errors.phone.message}</span>}
                                </div>
                                <button type="submit" className="btn btn-primary col-12">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}