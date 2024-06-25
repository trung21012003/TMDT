import Header from "./Header";
import Footer from "./Footer";
import ListGame from "./ListGame";
import ReactPaginate from 'react-paginate';
import './assets/css/game.css'
import React, {useEffect, useState} from "react";
import {productList} from "../Reducers/Data";
import {useSelector} from "react-redux";


export default function Game() {
    const itemsPerPage = 12;
    const [currentPage,setCurrentPage] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
     useEffect(() => {
        const startOffset = currentPage * itemsPerPage;
        const endOffset = startOffset + itemsPerPage;
        setCurrentItems(productList.slice(startOffset,endOffset));
    },[currentPage,productList]);

    const handlePageClick = (selectedPage)=>{
        setCurrentPage(selectedPage.selected);
    }
    return(
        <div className="container">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-content">
                            <div className="picture">
                                <img src={require("./assets/images/listgame.png")}
                                     style={{minWidth: "380px", height: "450px"}} alt=""/>
                            </div>
                            <div className="most-popular">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="heading-section">
                                            <h4><em>Most Popular</em> Right Now</h4>
                                        </div>
                                        <ListGame items={currentItems}/>
                                    </div>
                                </div>
                                <div>
                                    <ReactPaginate
                                        breakLabel="..."
                                        nextLabel="next >"
                                        onPageChange={handlePageClick}
                                        pageCount={Math.ceil(productList.length / itemsPerPage)}
                                        previousLabel="< previous"

                                        pageClassName="page-item"
                                        pageLinkClassName="page-link"
                                        previousClassName="page-item"
                                        previousLinkClassName="page-link"
                                        nextClassName="page-item"
                                        nextLinkClassName="page-link"
                                        breakClassName="page-item"
                                        breakLinkClassName="page-link"
                                        containerClassName="pagination"
                                        activeClassName="active"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}