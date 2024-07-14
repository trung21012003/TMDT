import "./assets/css/checkout.css"
import {useSelector} from "react-redux";
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./Header";
import Footer from "./Footer";
export default function Checkout() {
    const Carts = useSelector(state => state.cart.carts);
    const totalPrice =useSelector(state => state.cart.totalPrice);
    return (
        <section className="checkout spad">
            <Header />
            <div className="container">
                <div className="checkout__form" >
                    <h4 style={{textAlign:"center"}}>THANH TOÁN</h4>
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-8 col-md-6">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>Fist Name<span>*</span></p>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>Last Name<span>*</span></p>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout__input">
                                    <p>Country<span>*</span></p>
                                    <input type="text"/>
                                </div>
                                <div className="checkout__input">
                                    <p>Address<span>*</span></p>
                                    <input type="text" placeholder="Street Address" className="checkout__input__add"/>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>Phone<span>*</span></p>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>Email<span>*</span></p>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout__input__checkbox">
                                    <label for="acc">
                                        Create an account?
                                        <input type="checkbox" id="acc"/>
                                            <span className="checkmark"></span>
                                    </label>
                                </div>
                                <p>Create an account by entering the information below. If you are a returning customer
                                    please login at the top of the page</p>
                                <div className="checkout__input">
                                    <p>Account Password<span>*</span></p>
                                    <input type="text"/>
                                </div>
                                <div className="checkout__input__checkbox">
                                    <label for="diff-acc">
                                        Ship to a different address?
                                        <input type="checkbox" id="diff-acc"/>
                                            <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="checkout__input">
                                    <p>Order notes<span>*</span></p>
                                    <input type="text"
                                           placeholder="Notes about your order, e.g. special notes for delivery."/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="checkout__order">
                                    <h4>ĐƠN CỦA BẠN</h4>
                                    <div className="checkout__order__products">Products <span>Total</span></div>
                                    <ul>
                                        <li>Vegetable’s Package <span>$75.99</span></li>
                                        <li>Fresh Vegetable <span>$151.99</span></li>
                                        <li>Organic Bananas <span>$53.99</span></li>
                                    </ul>
                                    <div className="checkout__order__subtotal">Subtotal <span>$750.99</span></div>
                                    <div className="checkout__order__total">Total <span>$750.99</span></div>
                                    <div className="checkout__input__checkbox">
                                        <label for="acc-or">
                                            Create an account?
                                            <input type="checkbox" id="acc-or"/>
                                                <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua.</p>
                                    <div className="checkout__input__checkbox">
                                        <label for="payment">
                                            Check Payment
                                            <input type="checkbox" id="payment"/>
                                                <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label for="paypal">
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
