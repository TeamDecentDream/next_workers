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
    address: string;
  }
  
  interface Response {
    data: any;
    status: number;
  }

  interface WorkStateRequest{
    token:string;
  }
  
  export const snsLogin = createAsyncThunk<Response, SnsLoginRequest>(
    "authSlice/snsLogin",
    async ({ code , address }) => {
      const resp: AxiosResponse<any> = await axios.post(
        BACK_SERVER_URL + `/member/login`,
        {
          provider: "kakao",
          Code: code,
          address: address,
        }
      );
      const status: number = resp.status;
      const data: any = resp.data;
      return { data, status };
    }
  );

  export const getWorkState = createAsyncThunk<Response,WorkStateRequest>(
    "authSlice/getWorkState",
    async ({ token }) => {
      console.log(token)
    const resp: AxiosResponse<any> = await axios.get(
      BACK_SERVER_URL + '/attendance' ,
      {headers : {Authorization:token}}
    );
    const status:number = resp.status;
    const data:number = resp.data;
    return {data, status}
  })