import {createSlice} from "@reduxjs/toolkit";


const significantSlice = createSlice({
    name:"significantSlice",
    initialState:{
        isLoading:false,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(ping.pending, (state)=>{
            state.isLoading=true;
        })
        builder.addCase(ping.fulfilled, (state,action)=>{
            console.log(action);
        })
        builder.addCase(ping.rejected, (state)=>{
            state.isLoading=false;
        })

        builder.addCase(ping.pending, (state) => {})
        builder.addCase(ping.fulfilled, (state,action) => {
            console.log(action)
        })
        builder.addCase(ping.rejected, (state) => {})
    }
})

export const { setPage, setCategory } = memberSlice.actions;
export default memberSlice;