import express from "express";
import  cartController  from "./cartController.js";

const cart = new cartController();
const cartRoutes = express.Router();


cartRoutes.get("/:id", cart.getById);
cartRoutes.get("/", cart.getAll);
cartRoutes.post("/", cart.add);

export default cartRoutes;