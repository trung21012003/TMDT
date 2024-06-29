import Header from "./Header";
import Footer from "./Footer";
import ListGame from "./ListGame";
import ReactPaginate from 'react-paginate';
import './assets/css/game.css'
import React, {useEffect, useState} from "react";
import "react-range-slider-input/dist/style.css";
// import {productList} from "../Reducers/Data";
import {useDispatch, useSelector} from "react-redux";
import {filterByName, filterByPrice, filterByType, showAllProducts} from "../Reducers/ProductReducer";
import RangeSlider from "react-range-slider-input";
import {addUser} from "../Reducers/UserReducer";

export default function Game() {
    const [data,setData] = useState(100)
    const [selectedType, setSelectedType] = useState('');
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const [type, setType] = useState('');


    const handleInputChange = (event) => {
         setType(event.target.value);
        if(event.target.value === '') {
            dispatch(showAllProducts());
        }else {
            dispatch(showAllProducts());
            dispatch(filterByName(event.target.value));
        }
    }

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
        if(event.target.value == "showAll") {
            dispatch(showAllProducts());
        }else {
            dispatch(showAllProducts());
            dispatch(filterByType(event.target.value));
        }

      console.log(products);
    };
    const handleMaxPriceChange = (event) => {
        setData(event.target.value);
        dispatch(showAllProducts());
        dispatch(filterByPrice(event.target.value));
    }
    const itemsPerPage = 12;
    const [currentPage,setCurrentPage] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
     useEffect(() => {
         window.scrollTo({top: 600});
        const startOffset = currentPage * itemsPerPage;
        const endOffset = startOffset + itemsPerPage;
        setCurrentItems(products.slice(startOffset,endOffset));
    },[currentPage,products]);

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
                                    <div className="heading-section">
                                        <h4><em>Chọn Trò Chơi Trong Muốn Của Bạn</em>!</h4>
                                    </div>
                                    <div className="col-4">
                                        <div className="search-input2">
                                            <form id='search2' action="#">
                                                <input type="text" placeholder="Type Something" id='searchText2'
                                                       onChange={handleInputChange}
                                                       name="searchKeyword"
                                                />
                                                <i className="fa fa-search"></i>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="selectType">
                                            <select className="select-type2" value={selectedType}
                                                    onChange={handleTypeChange}>
                                                <option value="showAll">Tất cả loại</option>
                                                <option value="Sandbox">Sandbox</option>
                                                <option value="Steam-X">Steam-X</option>
                                                <option value="3">Type 3</option>
                                            </select>
                                            <i className="fa fa-caret-down"></i>
                                        </div>

                                    </div>
                                    <div className="col-3">
                                        <div>
                                            <div className="range-label">
                                                <span className="min">0$</span>
                                                <span className="val">{data}$ </span>
                                                <span className="max">100$</span>
                                            </div>

                                            <input className={data > 50 ? 'heigh' : 'less'} type="range" min="0"
                                                   max="100" step="5" value={data}
                                                   onChange={handleMaxPriceChange}/>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="most-popular">
                                <div className="row">
                                    <div className="col-lg-12">

                                        <ListGame items={currentItems}/>
                                    </div>
                                </div>
                                <div>
                                    <ReactPaginate
                                        breakLabel="..."
                                        nextLabel="next >"
                                        onPageChange={handlePageClick}
                                        pageCount={Math.ceil(products.length / itemsPerPage)}
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