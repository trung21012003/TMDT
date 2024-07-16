import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            console.log(action.payload)
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;