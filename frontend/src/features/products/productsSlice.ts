import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TProduct = {
  productId: string;
  productName: string;
  description: string;
  imageUrl: string;
  price: number;
};

interface ProductsState {
  products: TProduct[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action: PayloadAction<TProduct[]>) => {
      state.products = action.payload;
      state.loading = false;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productsSlice.actions;
const productsReducer = productsSlice.reducer;
export default productsReducer;
