import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import { ping, snsLogin } from "./authTunk";


const authSlice = createSlice({
    name:"memberSlice",
    initialState:{
        isLoading:false,
        address:"",
        accessToken:"",
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
        builder.addCase(snsLogin.pending, (state)=>{
            state.isLoading=true;
        })
        builder.addCase(snsLogin.fulfilled, (state, action:any)=>{
            state.isLoading=false;
            const token:string = action.payload.data.substring(16, action.payload.data.length - 4)
            state.accessToken=token
        })
        builder.addCase(snsLogin.rejected, (state)=>{
            state.isLoading=false;
        })
    }
})

export default authSlice;