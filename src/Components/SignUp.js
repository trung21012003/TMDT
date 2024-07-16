import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../Reducers/UserReducer";
import {Link, useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';
import Header from "./Header"
import styles from './module/login.module.css'
export default function SignUp() {
    const { register, handleSubmit, watch,formState: { errors } } = useForm();
    const users = useSelector((state) => state.users );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const passwordValue = watch('password');
    function onSubmit(data) {
        const lastUserId = users[users.length - 1].id;
        const email = data.email;
        const phone = data.phone;
        const password = data.password;
        const address = data.address;
        const city = data.city;
        const gender = data.gender;
        const birthday = data.birthday;
        const newId = lastUserId + 1;
        dispatch(addUser({id: newId, email, password, phone, address, city, gender, birthday}));
        navigate('/login');
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
                                           {...register("email", {
                                               required: "Vui Lòng Điền Email.",
                                               pattern:{
                                                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                   message: "Nhập địa chỉ email hợp lệ"
                                               }
                                           })}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword111" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputPassword111"
                                        {...register("password", {
                                            required: "Vui lòng điền vào ",
                                            pattern: {
                                                value:/^[A-Z].*[!@#$%^&*(),.?":{}|<>]$/,
                                                message: "Bắt đầu bằng chữ in hoa và có kí tự đặc biệt"
                                            }
                                        })}

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

                                    />
                                    {errors.confirmPassword && <span style={{color: 'red'}}>{errors.confirmPassword.message}</span>}
                                    />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="inputAddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="inputAddress"
                                           {...register('address') }
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

                                    />
                                    {errors.phone && <span className={styles.span}
                                                           style={{color: 'red'}}>{errors.phone.message}</span>}
                                </div>


                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">City</label>
                                    <input type="text" className="form-control" id="inputCity" placeholder="Sydney"
                                           />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputState" className="form-label">Gender</label>
                                    <select id="inputState" className="form-select"  {...register("gender")}>

                                        <option disabled >Chọn giới tính</option>

                                        <option disabled value="">Chọn giới tính</option>

                                        <option value="Male">Nam</option>
                                        <option value="Famale">Nữ</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="inputZip" className="form-label">Birthday</label>
                                    <input type="date" className="form-control" id="inputZip"
                                           {...register("birthday")}
                                           placeholder={"dd/MM/yyyy"}/>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck"
                                               {...register("checkbox", {
                                                   required: "vui lòng xác nhận"
                                               })
                                        } />
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