import express from "express";
import  productController  from "./productController.js";

const product = new productController();
const productRoutes = express.Router();


productRoutes.get("/:id", product.getById);
productRoutes.get("/", product.getAll);
productRoutes.post("/", product.add);

export default productRoutes;