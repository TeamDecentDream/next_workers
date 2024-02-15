import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ping, snsLogin } from "./authThunk";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isLogin: false,
    isLoading: false,
    address: "",
    accessToken: "",
    pong: false
  },
  reducers: {
    // 어플안에서
  },
  extraReducers: (builder) => {
    //외부랑 통신할 함수를 어떻게 처리할 것인지
    builder.addCase(ping.pending, (state) => {
      //pending시 로딩 중
      state.isLoading = true;
    });
    builder.addCase(ping.fulfilled, (state, action: any) => {
      state.isLoading = false;
      state.pong = action.payload === "pong"; //(pong을 true로)
    });
    builder.addCase(ping.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(snsLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(snsLogin.fulfilled, (state, action: any) => {
      state.isLoading = false;
      const token: string = action.payload.data.substring(
        16,
        action.payload.data.length - 4
      );
      state.accessToken = token;
      state.isLogin = true;
    }); //(const token: string : 전역변수)
    builder.addCase(snsLogin.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export default authSlice;
