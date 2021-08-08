import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  REQUEST_LIST_FALL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  REQUEST_DETAILS_FALL,
} from "../constants/productContants";

//全部商品的reducer
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case REQUEST_LIST_FALL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//单个商品的reducer
export const productListDetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case REQUEST_DETAILS_FALL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
