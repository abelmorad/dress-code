import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

// Define a type for the slice state
interface cartState {
  products: any[];
}

// Define the initial state using that type
const initialState: cartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const item = state.products.find((data) => data.id === action.payload.id);
      item
        ? (item.quantity += action.payload.quantity)
        : state.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (data) => data.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeItem, resetCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.value;

export default cartSlice.reducer;
