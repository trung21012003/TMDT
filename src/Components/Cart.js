import "./assets/css/cart.css"
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import { deleteToCart} from "../Reducers/CartReducer";

export default function Cart(){
    const Carts = useSelector(state => state.cart.carts);
    console.log(Carts);
    const dispatch = useDispatch();
    const totalPrice =useSelector(state => state.cart.totalPrice);
    console.log(totalPrice);
    return (
        <div className="container">

            <Header/>
            <section className="h-100 container">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0" style={{color: "black"}}>Có {Carts.length} Sản Phẩm  </h5>
                                </div>
                                <div className="card-body">
                                        {Carts.map( (product) => (
                                        <div key={product.id}>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">

                                                <div className="bg-image hover-overlay hover-zoom ripple rounded"
                                                     data-mdb-ripple-color="light">
                                                    <img
                                                        src={require(`./assets/images/${product.image}`)}
                                                        className="w-100" alt="Blue Jeans Jacket"/>
                                                    <Link href="#">
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
                                                    title="Remove item" onClick={ () => dispatch(deleteToCart(product)) }>
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </div>
                                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                <div className="d-flex mb-4" style={{maxWidth: "300px"}}>
                                                    <div className="form-outline">
                                                        <input id={product.id} min="0" name="quantity" defaultValue={parseInt(product.quantity)}
                                                               disabled={true}
                                                               type="number"
                                                               className="form-control"/>
                                                        <label className="form-label" htmlFor={product.id}>Quantity</label>
                                                    </div>
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
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 style={{color :"black"}} className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Trò Chơi
                                            <span>${totalPrice}</span>
                                        </li>
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Tổng Tiền</strong>
                                                <strong>
                                                    <p className="mb-0">(Thuế VAT)</p>
                                                </strong>
                                            </div>
                                            <span><strong>${totalPrice}</strong></span>
                                        </li>
                                    </ul>
                                        <button  className={Carts.length === 0 ? 'btn btn-primary btn-lg btn-block disabled ' : 'btn btn-primary btn-lg btn-block'
                                            }>
                                            <Link
                                                type="button"
                                                to="/checkout"
                                            >
                                                Go to checkout
                                            </Link>
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
