import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { plantType } from "../../model";

// نوع آیتم سبد خرید
export type CartItemType = {
  quantity: number;
} & Pick<plantType, "id">;

// نوع استیت سبد خرید
type CartState = {
  items: CartItemType[];
};

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem("cart") || "[]"), // خواندن اطلاعات از Local Storage
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemType>) => {
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
    updateQuantity: (state, action: PayloadAction<{ id: number; operation: 'increase' | 'decrease' }>) => {
      const { id, operation } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (operation === 'increase') {
          existingItem.quantity += 1;
        } else if (operation === 'decrease' && existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else if (operation === 'decrease' && existingItem.quantity === 1) {
          // حذف آیتم اگر مقدار quantity به صفر رسید
          state.items = state.items.filter((item) => item.id !== id);
        }
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },
  },
});

export const { addItem, removeItem, clearCart,updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
