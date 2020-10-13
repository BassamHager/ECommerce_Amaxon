// constants
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
// packages & libraries
import Axios from "axios";
import Cookie from "js-cookie";

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });
    // cookie
    const {
      cart: { cartItems },
    } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {}
};

const removeFromCart = (productId) => async (dispatch, getState) => {
  try {
    // const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    // cookie
    const {
      cart: { cartItems },
    } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {}
};

export { addToCart, removeFromCart };
