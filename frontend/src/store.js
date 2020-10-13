// packages & libraries
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
// reducers
import { cartReducer } from "./reducers/cartReducers";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducer";
import { userSigninReducer } from "./reducers/userReducers";

// cookie
const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

// init-state
const initialState = { cart: { cartItems } ,userSignin: {userInfo}};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer
});

// enhancer
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// store
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
