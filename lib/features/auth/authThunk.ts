import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

const BACK_SERVER_URL = "http://localhost:8080";

export const ping = createAsyncThunk("authSlice/ping", async () => {
    const resp = await axios.get(`${BACK_SERVER_URL}/ping`);
    const status = resp.status
    const data = resp.data
    return { data , status }
});

interface SnsLoginRequest {
    code: string;
  }
  
  interface SnsLoginResponse {
    data: any;
    status: number;
  }
  
  export const snsLogin = createAsyncThunk<SnsLoginResponse, SnsLoginRequest>(
    "authSlice/snsLogin",
    async ({ code }) => {
      const resp: AxiosResponse<any> = await axios.post(
        BACK_SERVER_URL + `/member/login`,
        {
          provider: "kakao",
          Code: code,
        }
      );
      const status: number = resp.status;
      const data: any = resp.data;
      return { data, status };
    }
  );