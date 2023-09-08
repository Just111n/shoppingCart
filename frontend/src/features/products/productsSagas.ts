import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchProductsFailure,
  fetchProductsStart,
  fetchProductsSuccess,
} from "./productsSlice";
import { TProduct } from "./productsSlice";
import axiosClient from "../../app/axiosClient";

function* fetchProducts() {
  try {
    const response: TProduct[] = yield call(axiosClient.get, "/api/products");
    yield put(fetchProductsSuccess(response));
  } catch (error: any) {
    yield put(fetchProductsFailure(error.message));
  }
}

export function* watchFetchProducts() {
  yield takeLatest(fetchProductsStart.type, fetchProducts);
}
