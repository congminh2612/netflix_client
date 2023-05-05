import { CurrentUserProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface loginState {
  currentUser: CurrentUserProps | null;
}

const initialState: loginState = {
  currentUser: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<CurrentUserProps>) => {
      state.currentUser = action.payload;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
