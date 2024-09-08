import express from "express";
import { commentController } from "./commentController.js";

const comments = new commentController();

const commentRoutes = express.Router();

commentRoutes.get("/:id",comments.commentById);
commentRoutes.post("/:id",comments.addInId);
commentRoutes.delete("/:id",comments.deleteById);
commentRoutes.put("/:id",comments.updaeById);

export default commentRoutes;