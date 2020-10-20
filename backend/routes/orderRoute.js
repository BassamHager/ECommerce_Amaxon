import express from "express";
import Order from "../models/orderModel";
import { isAuth, isAdmin, sendHttpErr } from "../util";
// controller functions
import { createOrder, getUserOrder } from "../controllers/orderControllers";

const router = express.Router(); // add validation for inputs

router.get("/", isAuth, getUserOrder);

router.post("/", isAuth, createOrder);

router.get("/mine", isAuth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    console.log(orders);
    res.send(orders);
  } catch (error) {
    sendHttpErr("could not get your ");
  }
});

router.get("/:id", isAuth, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id }); // necessary ?
  if (order) {
    res.send(order);
  } else {
    res.status(404).send("Order Not Found.");
  }
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id });
  if (order) {
    const deletedOrder = await order.remove();
    res.send(deletedOrder);
  } else {
    res.status(404).send("Order Not Found.");
  }
});

router.put("/:id/pay", isAuth, async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.payment = {
      paymentMethod: "paypal",
      paymentResult: {
        payerID: req.body.payerID,
        orderID: req.body.orderID,
        paymentID: req.body.paymentID,
      },
    };
    const updatedOrder = await order.save();
    res.send({ message: "Order Paid.", order: updatedOrder });
  } else {
    res.status(404).send({ message: "Order not found." });
  }
});

export default router;
