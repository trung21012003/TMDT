import {createSlice} from "@reduxjs/toolkit";
import {userlist} from "./UserData";

const userSlice = createSlice({
    name: "users",
    initialState: userlist,
    reducers: {
        addUser: (state, action) => {
           state.push( action.payload)
            console.log( action.payload );
        }
    }
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer;