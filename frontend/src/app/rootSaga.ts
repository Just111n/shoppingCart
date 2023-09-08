import { all, fork } from "redux-saga/effects";
import { watchFetchProducts } from "../features/products/productsSagas";
import { watchCheckoutCart } from "../features/cart/cartSage";

export function* rootSaga() {
  yield all([
    fork(watchFetchProducts),
    fork(watchCheckoutCart),
    // Add other watchers here when you have them
  ]);
}
