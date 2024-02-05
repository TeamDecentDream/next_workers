import {createSlice} from "@reduxjs/toolkit";
import { ping } from "../thunk/memberThunk";

const memberSlice = createSlice({
    name:"memberSlice",
    initialState:{
        isLoading:false,
        pong:false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(ping.pending, (state)=>{
            state.isLoading=true;
        })
        builder.addCase(ping.fulfilled, (state,action)=>{
            console.log(action);
            state.isLoading=false;
            console.log(action.payload === "pong");
            state.pong = action.payload === "pong";
        })
        builder.addCase(ping.rejected, (state)=>{
            state.isLoading=false;
        })
    }
})

export const { setPage, setCategory } = memberSlice.actions;
export default memberSlice;