import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { plantType } from "../../model";

// نوع آیتم سبد خرید
type CartItem = {
  quantity: number;
} & Pick<plantType, "id" | "title">;

// نوع استیت سبد خرید
type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem("cart") || "[]"), // خواندن اطلاعات از Local Storage
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.items)); // ذخیره در Local Storage
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items)); // ذخیره در Local Storage
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify(state.items)); // ذخیره در Local Storage
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
