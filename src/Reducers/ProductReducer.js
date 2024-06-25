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
    }
 })

export const {filterByType, showAllProducts} = productSlice.actions;

export default productSlice.reducer;