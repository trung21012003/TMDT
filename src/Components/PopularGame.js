import {useSelector} from "react-redux";
import React from "react";

export default function PopularGame() {
    const products = useSelector((state) => state.products);
    console.log(products);
    const users = useSelector((state) => state.users );
    console.log(users);
    return (
        <div className="most-popular">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading-section">
                        <h4><em>Most Popular</em> Right Now</h4>
                    </div>
                    <div className="row">
                        {products.map((product, index) => (
                            <div key={index} className="col-lg-3 col-sm-6">
                                <div className="item">
                                    <img src={require(`./assets/images/${product.image}`)} alt=""/>
                                    <h4>{product.name}<br/><span>{product.type}</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star"></i> {product.price}</li>
                                        <li><i className="fa fa-download"></i> {product.bought}</li>
                                    </ul>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}