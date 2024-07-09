import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../Reducers/UserReducer";
import {Link, useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';
import Header from "./Header"
import styles from './module/login.module.css'
export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [gender, setGenDer] = useState("Chọn Giới Tính");
    const [birthday, setBirthday] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const users = useSelector((state) => state.users );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, watch,formState: { errors } } = useForm();
    const passwordValue = watch('password');
    const onSubmit = (e) => {
        e.preventDefault();
        const lastUserId = users[users.length - 1].id;
        const newId = lastUserId + 1;
        if((isChecked) && (password === passwordConfirm)) {
            dispatch(addUser({id: newId, email, password, phone, address, city, gender, birthday}));
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
                            <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                                <Link to="/">
                                    <button type="submit" className="btn btn-light col-3">
                                        <i style={{fontSize: "20px", marginRight: "4px"}}
                                           className="fa fa-chevron-left"></i> Back to home
                                    </button>
                                </Link>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4"
                                           placeholder="nguyenvanA@gmail.com"
                                           onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputPassword4"
                                        {...register("password", {
                                            required: "Vui lòng điền vào ",
                                            pattern: {
                                                value:/^[A-Z].*[!@#$%^&*(),.?":{}|<>]$/,
                                                message: "Bắt đầu bằng chữ in hoa và có kí tự đặc biệt"
                                            }
                                        })}
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {errors.password && <span className={styles.span}
                                                           style={{color: 'red'}}>{errors.password.message}</span>}
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="inputPassword4"
                                           {...register('confirmPassword', {
                                               required: 'Vui lòng điền vào ',
                                               validate: value => value === passwordValue || 'Mật khẩu không khớp'
                                           })}
                                           onChange={(e) => setPasswordConfirm(e.target.value)}
                                    />
                                    {errors.confirmPassword && <span style={{color: 'red'}}>{errors.confirmPassword.message}</span>}
                                    />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="inputAddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="inputAddress"
                                           onChange={(e) => setAddress(e.target.value)}
                                           placeholder="1234 Main St"/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="inputAddress2" className="form-label">Phone Number</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="inputAddress2"
                                        placeholder="0909090909"
                                        {...register("phone", {
                                            required: "Vui lòng điền vào ",
                                            pattern: {
                                                value: /^0\d{9}$/,
                                                message: "Bắt đầu bằng số 0 và chỉ có 10 số"
                                            }
                                        })}
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                        }}
                                    />
                                    {errors.phone && <span className={styles.span}
                                                           style={{color: 'red'}}>{errors.phone.message}</span>}
                                </div>


                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">City</label>
                                    <input type="text" className="form-control" id="inputCity" placeholder="Sydney"
                                           onChange={(e) => setCity(e.target.value)}/>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputState" className="form-label">Gender</label>
                                    <select id="inputState" className="form-select" value={gender}
                                            onChange={(e) => setGenDer(e.target.value)}>
                                        <option disabled value="">Chọn giới tính</option>
                                        <option value="Male">Nam</option>
                                        <option value="Famale">Nữ</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="inputZip" className="form-label">Birthday</label>
                                    <input type="date" className="form-control" id="inputZip"
                                           onChange={(e) => setBirthday(e.target.value)}
                                           placeholder={"dd/MM/yyyy"}/>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck"
                                               onChange={(e) => setIsChecked(e.target.checked)}/>
                                        <label className="form-check-label" htmlFor="gridCheck"
                                               style={{color: "white"}}>
                                            Check me out
                                        </label>
                                    </div>
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