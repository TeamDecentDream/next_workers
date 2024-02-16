import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getWorkState, ping, snsLogin } from "./authThunk";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    workState: "",
    isLogin: false,
    isLoading: false,
    accessToken: "",
    pong: false,
    address: "",
    isConnected: false
  },
  reducers: {
    // 어플안에서
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setWorkState: (state, action: PayloadAction<string>) => {
      state.workState = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setIsConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    }
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
      const token: string = action.payload.data.substring(
        16,
        action.payload.data.length - 4
      );
      state.accessToken = token;
      state.isLogin = true;
      state.isLoading = false;
    });
    builder.addCase(snsLogin.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(getWorkState.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getWorkState.fulfilled, (state, action) => {
      if (action.payload.data.state) {
        console.log(action.payload.data.state);
        state.workState = action.payload.data.state;
      }
      console.log(action.payload.data.state);
      state.isLoading = false;
    });
    builder.addCase(getWorkState.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export const {
  setIsLogin,
  setAccessToken,
  setWorkState,
  setIsConnected,
  setAddress
} = authSlice.actions;
export default authSlice;
