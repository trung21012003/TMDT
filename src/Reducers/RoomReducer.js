import {createSlice} from "@reduxjs/toolkit";
const roomSlice = createSlice({
    name: "room",
    initialState: {
        rooms: [],
    },
    reducers: {
        addRooming: (state, action) => {
            const { id, date } = action.payload;
            const newRoom = { id, date };
            state.rooms.push(newRoom);
        }
    }
});
export const { addRooming, removeMeeting, clearMeetings } = roomSlice.actions;
export default roomSlice.reducer;
