import { createSlice } from "@reduxjs/toolkit";
import {productList} from "./Data";
const productSlice = createSlice({
    name: "products",
    initialState: productList,
    reducers: {

    }
 })

export default productSlice.reducer;