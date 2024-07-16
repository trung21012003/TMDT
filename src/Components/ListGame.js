import { Link } from "react-router-dom";
import styles from "./assets/css/Popular.module.css";
import React, {useRef} from "react";
import {addToCart} from "../Reducers/CartReducer";
import {useDispatch, useSelector} from "react-redux";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import {useTranslation} from "react-i18next";
import { Toast } from 'primereact/toast';
export default function ListGame({ items }) {
    const carts = useSelector(state => state.cart);
    const toast = useRef(null);
    console.log(carts);
    const dispatch = useDispatch();
    const {i18n} = useTranslation()
    const {t} =useTranslation();
    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success', detail:'Thêm Vào Giỏ Hàng Thành Công', life: 1000});
    }
    return (

        <div className="row">'
            <div >
                <Toast ref={toast} />
            </div>

            {items.map((product, index) => (

                    <div className="item col-lg-3 col-sm-6" id={styles.item}  key={product.id}>
                        <img style={{ width: "249px" ,height: "200px"}} src={require(`./assets/images/${product.image}`)} alt="" />
                        <h4>{product.name}<br/><span className={styles.name}>{product.type}</span></h4>
                        <ul>
                            <li><i className="fa fa-star"></i> {product.price}$</li>
                            <li><i className="fa fa-download"></i> {product.bought}</li>
                        </ul>
                        <div className="row">
                            <div className="col-sm-6  d-flex justify-content-start">
                                <Link className="btn btn-link" to={`/details/${product.id}`} >{t("details")}</Link>
                            </div>
                            <div className="col-sm-6  d-flex justify-content-end">
                                <button label="Success" severity="success" onClick={() => {
                                    dispatch(addToCart(product));
                                    showSuccess();
                                }}><i className="fa fa-cart-plus">
                                </i>
                                </button>
                            </div>

                        </div>
                    </div>

            ))}
        </div>
    );
}