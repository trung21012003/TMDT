import "./assets/css/checkout.css"
import {useSelector} from "react-redux";
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./Header";
import Footer from "./Footer";

import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
export default function Checkout() {
    const Carts = useSelector(state => state.cart.carts);
    const totalPrice =useSelector(state => state.cart.totalPrice);
    const user111 = useSelector((state) => state.auth.user);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const link = 'https://drive.google.com/file/d/1NyyEjctCj9_YAA3ahRrORYoRVb3XZi6c/view';
    useEffect(() => {
        if (isLoggedIn) {
            setEmail(user111.user.email);
            setCity(user111.user.city);
            setAddress(user111.user.address);
            setPhone(user111.user.phone);
        }
    }, [isLoggedIn]); // Phụ thuộc vào isLoggedIn
    console.log("Đang Nhập:", isLoggedIn);
    function handleSubmit(e) {

        e.preventDefault();
        if(password === user111.user.password) {
            navigate("/paymentsuccess",  { link });
        }else {
            setError('Sai Mật Khẩu! *');
        }

    }
    return (
        <section className="checkout spad">
            <Header />
            <div className="container">
                <div className="checkout__form">
                    <h4 style={{textAlign: "center"}}>THANH TOÁN</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-8 col-md-6">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="checkout__input">
                                            <p>Name<span>*</span></p>
                                            <input type="text"
                                                   onChange={(event) => setEmail(event.target.value)}/>
                                        </div>
                                        <div className="checkout__input">
                                            <p>Email<span>*</span></p>
                                            <input type="text" value={email}
                                                   onChange={(event) => setEmail(event.target.value)}/>
                                        </div>
                                        <div className="checkout__input">
                                            <p>City<span>*</span></p>
                                            <input type="text" value={city}
                                                   onChange={(event) => setCity(event.target.value)}/>
                                        </div>
                                        <div className="checkout__input">
                                            <p>Address<span>*</span></p>
                                            <input type="text" placeholder="Street Address" value={address}
                                                   onChange={(e) => setAddress(e.target.value)}
                                                   className="checkout__input__add"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="checkout__input">
                                            <p>Phone<span>*</span></p>
                                            <input type="text" value={phone}
                                                   onChange={(e) => setPhone(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout__input">
                                    <p>Order notes<span>*</span></p>
                                    <input type="text"
                                           placeholder="Notes about your order, e.g. special notes for delivery."/>
                                </div>
                                <div className="checkout__input__checkbox">
                                    <label>
                                        Ship to a different address?
                                        <input type="checkbox" id="diff-acc"/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="checkout__input">
                                    <p>Account Password<span>*</span></p>
                                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <p style={{color: "red"}}>{error}</p>
                                <div className="checkout__input__checkbox">
                                    <Link to="/signUp">Bạn Chưa Có Tài Khoản ?</Link>
                                </div>
                                <p>Create an account by entering the information below. If you are a returning customer
                                    please login at the top of the page</p>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="checkout__order">
                                    <h4>ĐƠN CỦA BẠN</h4>
                                    <div className="checkout__order__products">Products <span>Total</span></div>
                                    <ul>
                                        {Carts.map((product) => (
                                            <li key={product.id}> {product.name} <span>$ {product.price}</span></li>
                                        ))}
                                    <p>Sau Khi Thanh Toán Thành Công Bạn Sẽ Nhận Được Link Dành Cho Game Của Bạn</p>

                                    <button type="submit"  className="site-btn">ĐẶT HÀNG</button>
                                        <li>Vegetable’s Package <span>$75.99</span></li>
                                        <li>Fresh Vegetable <span>$151.99</span></li>
                                        <li>Organic Bananas <span>$53.99</span></li>
                                    </ul>
                                    <div className="checkout__order__subtotal">Subtotal <span>$750.99</span></div>
                                    <div className="checkout__order__total">Total <span>$750.99</span></div>
                                    <div className="checkout__input__checkbox">
                                        <label>
                                            Create an account?
                                            <input type="checkbox" id="acc-or"/>
                                                <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua.</p>
                                    <div className="checkout__input__checkbox">
                                        <label>
                                            Check Payment
                                            <input type="checkbox" id="payment"/>
                                                <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label>
                                            Paypal
                                            <input type="checkbox" id="paypal"/>
                                                <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <button type="submit" className="site-btn">ĐẶT HÀNG</button>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
