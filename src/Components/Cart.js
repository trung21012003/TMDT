import "./assets/css/cart.css"
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export default function Cart(){
    const Carts = useSelector(state => state.cart.carts);
    console.log(Carts);
    return (
        <div className="container">

            <Header/>
            <section className="h-100 container">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Có {Carts.length} Sản Phẩm  </h5>
                                </div>
                                <div className="card-body">
                                        {Carts.map( (product) => (
                                        <div >
                                        <div className="row">
                                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">

                                                <div className="bg-image hover-overlay hover-zoom ripple rounded"
                                                     data-mdb-ripple-color="light">
                                                    <img
                                                        src={require(`./assets/images/${product.image}`)}
                                                        className="w-100" alt="Blue Jeans Jacket"/>
                                                    <Link href="#!">
                                                        <div className="mask"
                                                             style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                                                    </Link>
                                                </div>

                                            </div>

                                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">

                                                <p><strong>{product.name}</strong></p>
                                                <p>Loại:  {product.type}</p>
                                                <button
                                                    className="btn btn-primary btn-sm me-1 mb-2"
                                                    title="Remove item">
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                                <button type="button"
                                                        className="btn btn-danger btn-sm mb-2"
                                                        title="Move to the wish list">
                                                    <i className="fa fa-heart"></i>
                                                </button>

                                            </div>

                                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">

                                                <div className="d-flex mb-4" style={{maxWidth: "300px"}}>
                                                    <button
                                                        className="btn btn-primary px-3 me-2"
                                                        >
                                                        <i className="fa fa-minus"></i>
                                                    </button>

                                                    <div className="form-outline">
                                                        <input id={product.id} min="0" name="quantity" value={product.quantity}
                                                               type="number"
                                                               className="form-control"/>
                                                        <label className="form-label" htmlFor={product.id}>Quantity</label>
                                                    </div>

                                                    <button
                                                        className="btn btn-primary px-3 ms-2"
                                                        >
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>


                                                <p className="text-start text-md-center">
                                                    <strong>${product.price * product.quantity}</strong>
                                                </p>

                                            </div>
                                        </div>

                                        <hr className="my-4"/>
                                        </div>
                                            )) }

                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <p><strong>Expected shipping delivery</strong></p>
                                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body">
                                    <p><strong>We accept</strong></p>
                                    <img className="me-2" width="45px" height="45px"
                                         src={require("./assets/images/featured-02.jpg")}
                                         alt="Visa"/>
                                    <img className="me-2" width="45px" height="45px"
                                         src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                         alt="American Express"/>
                                    <img className="me-2" width="45px" height="45px"
                                         src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                         alt="Mastercard"/>
                                    <img className="me-2" width="45px" height="45px"
                                         src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocom…includes/gateways/paypal/assets/images/paypal.png"
                                         alt="PayPal acceptance mark"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Products
                                            <span>$53.98</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                            <span>Gratis</span>
                                        </li>
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                                <strong>
                                                    <p className="mb-0">(including VAT)</p>
                                                </strong>
                                            </div>
                                            <span><strong>$53.98</strong></span>
                                        </li>
                                    </ul>

                                    <button type="button" data-mdb-button-init data-mdb-ripple-init
                                            className="btn btn-primary btn-lg btn-block">
                                        Go to checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>

        )
}
