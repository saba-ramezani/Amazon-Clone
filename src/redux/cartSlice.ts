import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartProduct } from "../types/Types";

interface CartState {
  products: CartProduct[];
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
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const addProductExists = state.products.find((product) => product.id === action.payload.id)
      if (addProductExists) {
        addProductExists.quantity += action.payload.quantity
        state.productsNumber += action.payload.quantity;
      } else {
        state.products.push(action.payload);
        state.productsNumber += action.payload.quantity;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(p => p.id !== action.payload);
      state.productsNumber = state.products.length;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;