import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartContants";
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const exsitItem = state.cartItems.find((x) => x.product === item.product);
      if (exsitItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === exsitItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    case CART_REMOVE_ITEM:
      const { productId: productId } = action.payload;
      const index = state.cartItems.findIndex((x) => x.product == productId);
      state.cartItems.splice(index, 1);
      let _arr = JSON.parse(localStorage.getItem("cartItems"));
      _arr.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(_arr));
      return { cartItems: [...state.cartItems] };

    default:
      return { ...state };
  }
};
