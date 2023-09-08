import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../products/productsSlice";

export interface CartItem extends TProduct {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  loading: Boolean;
  error: string | null;
}

const initialState: CartState = {
  cart: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.cart.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (index !== -1) {
        // Item found in cart, increase the quantity
        state.cart[index].quantity += action.payload.quantity;
      } else {
        // Item not found, add to the cart
        state.cart.push(action.payload);
      }
    },

    removeFromCart: (state, action: PayloadAction<{ productId: String }>) => {
      state.cart = state.cart.filter(
        (item) => item.productId !== action.payload.productId
      );
    },

    checkoutCartStart: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    checkoutCartSuccess: (state) => {
      state.loading = false;
      state.cart = []; // Clear the cart on successful checkout
    },
    checkoutCartFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  checkoutCartStart,
  checkoutCartSuccess,
  checkoutCartFailure,
} = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
