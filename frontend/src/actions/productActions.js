import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  REQUEST_LIST_FALL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  REQUEST_DETAILS_FALL,
} from "../constants/productContants";
//获取所有产品的action
export const listProducts = () => async (dispath) => {
  try {
    dispath({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products");
    dispath({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispath({
      type: REQUEST_LIST_FALL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

//获取单个商品的action
export const listProductDetails = (id) => async (dispath) => {
  try {
    dispath({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    dispath({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispath({
      type: REQUEST_DETAILS_FALL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
