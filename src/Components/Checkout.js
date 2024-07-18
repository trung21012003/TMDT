import "./assets/css/checkout.css"
import {useSelector} from "react-redux";
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./Header";
import Footer from "./Footer";

import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import BtnCheckOut from "./BtnCheckOut";
import {useTranslation} from "react-i18next";
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
    const {i18n} = useTranslation()
    const {t} =useTranslation();
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
                    <h4 style={{textAlign: "center"}}>{t("CHECKOUT")}</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-8 col-md-6">
                                <div className="row">
                                    <div className="col-lg-12">

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
                                    <p>Account Password<span>*</span></p>
                                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <p style={{color: "red"}}>{error}</p>
                                <div className="checkout__input__checkbox">
                                    <Link to="/signUp">{t("registernow")}</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="checkout__order">
                                    <h4>{t("yourOrder")}</h4>
                                    <div className="checkout__order__products">{t("product")} <span>{t("totalPrice")}</span></div>
                                    <ul>
                                        {Carts.map((product) => (
                                            <li key={product.id}> {product.name} <span>$ {product.price}</span></li> 
                                        ))}
                                    </ul>
                                    <p>{t("checkoutsuccess")}</p>
                                    <BtnCheckOut />

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
