import Order from "../models/orderModel";
import { sendHttpErr } from "../util";

const getUserOrder = async (_, res) => {
  try {
    const orders = await Order.find({}).populate("user");
    res.send(orders);
  } catch (error) {
    sendHttpErr("user is not found!", 404);
  }
};

// create order
const createOrder = async (req, res) => {
  const {
    orderItems,
    shipping,
    payment,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  try {
    const newOrder = new Order({
      user: req.user._id,
      orderItems,
      shipping,
      payment,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const newOrderCreated = await newOrder.save();
    res
      .status(201)
      .send({ message: "New Order Created", data: newOrderCreated });
  } catch (error) {
    sendHttpErr("something went wrong, order not created!", 500);
  }
};

export { getUserOrder, createOrder };
