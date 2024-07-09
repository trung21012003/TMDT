import { Link } from "react-router-dom";
import styles from "./assets/css/Popular.module.css";
import React from "react";
import {addToCart} from "../Reducers/CartReducer";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

export default function ListGame({ items }) {
    const carts = useSelector(state => state.cart);
    console.log(carts);
    const dispatch = useDispatch();
    const {i18n} = useTranslation()
    const {t} =useTranslation();
    return (

        <div className="row">
            {items.map((product, index) => (

                    <div className="item col-lg-3 col-sm-6" id={styles.item}  key={product.id}>
                        <img style={{ width: "249px" ,height: "200px"}} src={require(`./assets/images/${product.image}`)} alt="" />
                        <h4>{product.name}<br/><span className={styles.name}>{product.type}</span></h4>
                        <ul>
                            <li><i className="fa fa-star"></i> {product.price}$</li>
                            <li><i className="fa fa-download"></i> {product.bought}</li>
                        </ul>
                        <div className="row">
                            <div className="col-sm-6">
                                <Link className="btn btn-link" to={`/details/${product.id}`} >{t("details")}</Link>
                            </div>
                            <div className="col-sm-6">
                                <button onClick={() =>  dispatch(addToCart(product))} >{t("addToCart")}</button>
                            </div>

                        </div>
                    </div>

            ))}
        </div>
    );
}