import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACK_SERVER_URL = "http://localhost:8080";

export const ping = createAsyncThunk("memberSlice/ping", async () => {
    const resp = await axios.get(`${BACK_SERVER_URL}/ping`);
    const status = resp.status
    const data = resp.data
    return { data , status }
});

