import { CurrentUserProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface loginState {
  currentUser: CurrentUserProps | null;
  isLoggedIn: boolean;
}

const initialState: loginState = {
  currentUser: null,
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<CurrentUserProps>) => {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
