import { takeEvery, put, call } from "redux-saga/effects";
import {
  checkoutCartStart,
  checkoutCartSuccess,
  checkoutCartFailure,
  CartItem,
} from "./cartSlice";
import { toast } from "react-toastify";
import axiosClient from "../../app/axiosClient";
import { PayloadAction } from "@reduxjs/toolkit";

interface CheckoutCartStartPayload {
  cart: CartItem[];
}

interface ResCheckout {
  message: string; // Adjust this to match the structure of your API's response
}

// Define a type for the action parameter in your saga
interface CheckoutCartStartAction
  extends PayloadAction<CheckoutCartStartPayload> {}

function* handleCheckout(action: CheckoutCartStartAction) {
  try {
    const body = JSON.stringify({
      paySuccess: true,
      productsInOrder: action.payload.cart.map((item: CartItem) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
    });

    const response: ResCheckout = yield call(
      axiosClient.post,
      "/api/checkout",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    yield put(checkoutCartSuccess());
    toast.success("Checkout successful");
  } catch (error: any) {
    yield put(checkoutCartFailure(error.message));
    toast.error("Checkout failed");
  }
}

export function* watchCheckoutCart() {
  yield takeEvery(checkoutCartStart.type, handleCheckout);
}
