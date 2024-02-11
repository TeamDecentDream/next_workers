import {createSlice} from "@reduxjs/toolkit";
import { ping } from "./authTunk";


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
        builder.addCase(ping.fulfilled, (state,action:any)=>{
            state.isLoading=false;
            state.pong = action.payload === "pong";
        })
        builder.addCase(ping.rejected, (state)=>{
            state.isLoading=false;
        })
    }
})

export default memberSlice;