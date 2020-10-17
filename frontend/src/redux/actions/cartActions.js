// packages & libraries
import Axios from "axios";
import Cookie from "js-cookie";
// constants
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT,
  CART_SAVE_SHIPPING,
} from "../constants/cartConstants";

// add to cart
const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const {
      data: { _id, name, image, price, countInStock },
    } = await Axios.get("/api/products/" + productId);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: _id,
        name,
        image,
        price,
        countInStock,
        qty,
      },
    });
    const {
      cart: { cartItems },
    } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    console.log(error.message);
  }
};

// remove from cart
const removeFromCart = (productId) => async (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  const {
    cart: { cartItems },
  } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
};

// shipping
const saveShipping = (data) => async (dispatch) =>
  dispatch({ type: CART_SAVE_SHIPPING, payload: data });

// payment
const savePayment = (data) => async (dispatch) =>
  dispatch({ type: CART_SAVE_PAYMENT, payload: data });

export { addToCart, removeFromCart, saveShipping, savePayment };
