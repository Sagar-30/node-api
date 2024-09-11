import express from "express";
import { postController } from "./postController.js";
import { upload } from "../../middlewares/fileUpload.js";

const posts = new postController();

const postRoutes = express.Router();
console.log("inside routes");
postRoutes.get("/all",posts.getAll);
postRoutes.get("/:id",posts.getById);
postRoutes.get("/",posts.getByuserId);
postRoutes.post("/",upload.single('imageUrl'),posts.upload);
postRoutes.put("/:id",upload.single('imageUrl'),posts.modify);
postRoutes.delete("/:id",posts.delete);
export default postRoutes;