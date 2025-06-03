import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types/Types";

interface CartState {
  products: Product[];
  productsNumber: number;
}

const initialState: CartState = {
  products: [],
  productsNumber: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
      state.productsNumber += 1;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(p => p.id !== action.payload);
      state.productsNumber = state.products.length;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;