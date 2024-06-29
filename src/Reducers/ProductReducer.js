import { createSlice } from "@reduxjs/toolkit";
import {productList} from "./Data";
const productSlice = createSlice({
    name: "products",
    initialState: productList,
    reducers: {
        filterByType: (state, action) => {
            const selectedType = action.payload;
            return state.filter(product => product.type === selectedType);
        },
        showAllProducts: (state) => {
            return productList; // Trả về danh sách sản phẩm ban đầu
        },
        filterByName: (state, action) => {
            const type = action.payload;
            return state.filter(product => {
                const productname = product.name.toLowerCase();
                return productname.includes(type.toLowerCase());
            })
        },
        filterByPrice: (state, action) => {
            const maxPrice = action.payload;
            return state.filter(product =>
                product.price < maxPrice
            );
        }
    }
 })

export const {filterByType, showAllProducts, filterByName, filterByPrice} = productSlice.actions;

export default productSlice.reducer;