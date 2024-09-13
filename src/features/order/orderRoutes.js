import express from "express";
import orderController from "./orderController.js"

const order = new orderController();

  const orderRoutes = express.Router();


  orderRoutes.get("/:userId", order.getCartItems);

export default orderRoutes;