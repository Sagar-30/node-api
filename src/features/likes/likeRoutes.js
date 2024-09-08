import express from "express";
import { likeController } from "./likeController.js";

const likes = new likeController();

const likeRoutes = express.Router();

likeRoutes.get("/:postId",likes.likeByPost);
likeRoutes.get("/toggle/:postId",likes.toggleStatus);

export default likeRoutes;