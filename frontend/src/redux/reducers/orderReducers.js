import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  MY_ORDER_LIST_REQUEST,
  MY_ORDER_LIST_SUCCESS,
  MY_ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_DELETE_REQUEST,
  ORDER_DELETE_SUCCESS,
  ORDER_DELETE_FAIL,
} from "../constants/orderConstants";

const orderCreateReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };
    case ORDER_CREATE_SUCCESS:
      return { loading: false, order: payload, success: true };
    case ORDER_CREATE_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

const myOrderListReducer = (
  state = {
    orders: [],
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case MY_ORDER_LIST_REQUEST:
      return { loading: true };
    case MY_ORDER_LIST_SUCCESS:
      return { loading: false, orders: payload };
    case MY_ORDER_LIST_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

const orderDetailsReducer = (
  state = {
    order: {
      orderItems: [],
      shipping: {},
      payment: {},
    },
  },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };
    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const orderListReducer = (
  state = {
    orders: [],
  },
  action
) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { loading: true };
    case ORDER_LIST_SUCCESS:
      return { loading: false, orders: action.payload };
    case ORDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const orderPayReducer = (
  state = {
    order: {
      orderItems: [],
      shipping: {},
      payment: {},
    },
  },
  action
) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return { loading: true };
    case ORDER_PAY_SUCCESS:
      return { loading: false, success: true };
    case ORDER_PAY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const orderDeleteReducer = (
  state = {
    order: {
      orderItems: [],
      shipping: {},
      payment: {},
    },
  },
  action
) => {
  switch (action.type) {
    case ORDER_DELETE_REQUEST:
      return { loading: true };
    case ORDER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ORDER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  myOrderListReducer,
  orderListReducer,
  orderDeleteReducer,
};
