import {useSelector} from "react-redux";
import React from "react";
import styles from "./assets/css/Popular.module.css"
import {Link} from "react-router-dom";
export default function PopularGame() {
    const products = useSelector((state) => state.products);
    console.log(products);
    const users = useSelector((state) => state.users );
    console.log(users);
    return (
        <div className="row">
            {products.slice(0, 9).map((product, index) => (
                <Link to={`/details/${product.id}`} key={index} className="col-lg-3 col-sm-6">
                    <div className="item" id={styles.item}>
                        <img src={require(`./assets/images/${product.image}`)} alt=""/>
                        <h4>{product.name}<br/><span className={styles.name}>{product.type}</span></h4>
                        <ul>
                            <li><i className="fa fa-star"></i> {product.price}</li>
                            <li><i className="fa fa-download"></i> {product.bought}</li>
                        </ul>
                    </div>
                </Link>
            ))}
        </div>
    )
}