import { Link } from "react-router-dom";
import styles from "./assets/css/Popular.module.css";
import React from "react";
import { useSelector } from "react-redux";

export default function ListGame({ items }) {
    return (
        <div className="row">
            {items.map((product, index) => (
                <Link to={`/details/${product.id}`} key={product.id} className="col-lg-3 col-sm-6">
                    <div className="item" id={styles.item}>
                        <img src={require(`./assets/images/${product.image}`)} alt="" />
                        <h4>{product.name}<br/><span className={styles.name}>{product.type}</span></h4>
                        <ul>
                            <li><i className="fa fa-star"></i> {product.price}$</li>
                            <li><i className="fa fa-download"></i> {product.bought}</li>
                        </ul>
                    </div>
                </Link>
            ))}
        </div>
    );
}