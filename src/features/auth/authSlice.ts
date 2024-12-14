import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserStateType = {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    img: string;
    role: "user" | "admin";
  } | null;
  token: string | null;
};

const initialState: UserStateType = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  token: localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ user: UserStateType["user"]; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    updateUser: (
      state,
      action: PayloadAction<Partial<UserStateType["user"]>>
    ) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },
  },
});

export const { loginSuccess, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
