import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "carts",
    initialState: {
        carts: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const productIndex =  state.carts.findIndex((p) => p.id === action.payload.id)

            if(productIndex === -1) {
                state.carts.push({ ...action.payload , quantity: 1 });
            }else {
                state.carts[productIndex].quantity += 1 ;
            }
        },
        deletetoCart: (state, action) => {
            const productIndexRemove =  action.payload.id
            const newCart = state.carts.filter((item) => item.id !== productIndexRemove);
            return {...state, CartArr: newCart};
        }
    }
})
export const {addToCart, deletetoCart} = cartSlice.actions;
export default cartSlice.reducer;
