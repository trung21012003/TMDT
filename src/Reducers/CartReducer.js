import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "carts",
    initialState: {
        carts: [],
    },
    totalPrice: 0,
    reducers: {
        addToCart: (state, action) => {
            const productIndex =  state.carts.findIndex((p) => p.id === action.payload.id)
            if(productIndex === -1) {
                state.carts.push({ ...action.payload , quantity: 1 });
            }else {
                state.carts[productIndex].quantity += 1 ;
            }
            state.totalPrice = calculateTotalPrice(state.carts);
        },
        deleteToCart: (state, action) => {
            const productIndexRemove =  action.payload.id
            const newCart = state.carts.filter((item) => item.id !== productIndexRemove);
            return {
                ...state,
                carts: newCart,
                totalPrice: calculateTotalPrice(newCart) // Sử dụng newCart để tính toán totalPrice
            };

        },
        increaseToProduct: (state, action) => {
            const productIndex =  state.carts.findIndex((p) => p.id === action.payload.id)
            state.carts[productIndex].quantity += 1;
            state.totalPrice = calculateTotalPrice(state.carts);
        },
        decreaseToProduct: (state, action) => {
            const productIndex =  state.carts.findIndex((p) => p.id === action.payload.id)
            if(state.carts[productIndex].quantity === 1) {
                const newCart = state.carts.filter((item) => item.id !==   action.payload.id);
                return {...state, carts: newCart};
            }else {
                state.carts[productIndex].quantity -= 1;
            }
            state.totalPrice = calculateTotalPrice(state.carts);
        },
        totalPriceAllProduct: (state, action) => {
            state.totalPrice = state.carts.reduce((total, product) => {
                return  total + product.price;
            }, 0);
        },
        deleteAllCart: (state) => {
            state.carts = []; // Xóa mảng carts
            state.totalPrice = 0; // Đặt totalPrice về 0
        },
    }

});
const calculateTotalPrice = (carts) => {
    return carts.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);
};

export const {addToCart, deleteToCart,decreaseToProduct,increaseToProduct,totalPriceAllProduct,deleteAllCart} = cartSlice.actions;
export default cartSlice.reducer;