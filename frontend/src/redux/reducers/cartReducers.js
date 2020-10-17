// constants
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT,
  CART_SAVE_SHIPPING,
} from "../constants/cartConstants";

const cartReducer = (
  state = { cartItems: [], shipping: {}, placeOrder: {} },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ADD_ITEM:
      const item = payload;
      const product = state.cartItems.find((i) => i.product === item.product);
      if (product) {
        return {
          // replace old
          cartItems: state.cartItems.map((i) =>
            i.product === product.product ? item : i
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter((x) => x.product !== payload),
      };
    case CART_SAVE_SHIPPING:
      return { ...state, shipping: payload };
    case CART_SAVE_PAYMENT:
      return { ...state, payment: payload };
    default:
      return state;
  }
};

export { cartReducer };
