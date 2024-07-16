import React from "react";
import {useForm} from "react-hook-form";
import Header from "./Header";

export default function ForgotPassword(){
    function onSubmit(data) {
        const email = data.email;

    }

    const { register, handleSubmit, formState: { errors } }=useForm();
    return (
        <div className="container">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="page-content">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="col-md-6">
                                     <label htmlFor="inputEmail4" className="form-label">Email</label>
                                         <input type="email" className="form-control" id="inputEmail4"
                                         placeholder="nguyenvanA@gmail.com"
                                            {...register("email", {
                                            required: "Vui Lòng Điền Email.",
                                             pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Nhập địa chỉ email hợp lệ"
                                            }
                                            })}
                                         />
                                </div>
                                <button type="submit" className="btn btn-primary col-3" style={{marginTop:"10px"}}>Xác nhận</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}