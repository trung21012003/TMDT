import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../Reducers/UserReducer";
import {useNavigate} from "react-router-dom";
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
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" name="email" className="form-control" id="exampleInputEmail1"
                                           placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" name="password" className="form-control"
                                           id="exampleInputPassword1"
                                           placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}