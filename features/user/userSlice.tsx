import { UserType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface Users {
  allUser: UserType[] | null;
}

const initialState: Users = {
  allUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserState: (state, action: PayloadAction<UserType[]>) => {
      state.allUser = action.payload;
    },
  },
});

export const { getUserState } = userSlice.actions;

export default userSlice.reducer;
