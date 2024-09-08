import express from 'express'
import { userController } from "./userController.js";

const users = new userController();
const userRoutes = express.Router();

userRoutes.post("/signin",users.login);
userRoutes.post("/signup",users.signup);


export default userRoutes;