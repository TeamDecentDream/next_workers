import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACK_SERVER_URL = "http://localhost:8080";

export const ping = createAsyncThunk("memberSlice/ping", async () => {
    const resp = await axios.get(`${BACK_SERVER_URL}/ping`);
    const status = resp.status
    const data = resp.data
    return { data , status }
});

export const login = createAsyncThunk("memberSlice/login", async (body) => {
    const resp = await axios.post(`${BACK_SERVER_URL}/member/login`,body);
    const status = resp.status;
    const data = resp.headers.getAuthorization();
    console.log(status, data)
    return { data , status }
})