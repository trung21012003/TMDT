import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../Reducers/UserReducer";
import {Link, useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';
import Header from "./Header"
export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const users = useSelector((state) => state.users );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const lastUserId = users[users.length - 1].id;
        const newId = lastUserId + 1
        dispatch(addUser({id: newId , email, password}));
        navigate('/');
    }
    return (
        <div className="container">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-content">
                            <form className="row g-3" onSubmit={handleSubmit}>
                                {/*<div className="form-group">*/}
                                {/*    <label htmlFor="exampleInputEmail1">Email address</label>*/}
                                {/*    <input type="email" name="email" className="form-control" id="exampleInputEmail1"*/}
                                {/*           placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>*/}

                                {/*</div>*/}
                                {/*<div className="form-group">*/}
                                {/*    <label htmlFor="exampleInputPassword1">Password</label>*/}
                                {/*    <input type="password" name="password" className="form-control"*/}
                                {/*           id="exampleInputPassword1"*/}
                                {/*           placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>*/}
                                {/*</div>*/}
                                {/*<div className="form-group form-check">*/}
                                {/*    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>*/}
                                {/*    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>*/}
                                {/*</div>*/}
                                {/*new form*/}

                                <Link to="/">
                                    <button type="submit" className="btn btn-light col-3"> Back to home
                                    </button>
                                </Link>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4"
                                           onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4"
                                           onChange={(e) => setPassword(e.target.value)}/>/>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="inputPassword4"
                                    />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="inputAddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="inputAddress"
                                           placeholder="1234 Main St"/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="inputAddress2" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" id="inputAddress2"
                                           placeholder="0909090909"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">City</label>
                                    <input type="text" className="form-control" id="inputCity" placeholder="Sydney"/>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputState" className="form-label">Gender</label>
                                    <select id="inputState" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="inputZip" className="form-label">Birthday</label>
                                    <input type="text" className="form-control" id="inputZip"
                                           placeholder={"dd/MM/yyyy"}/>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
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