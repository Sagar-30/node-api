import express from "express";
import { json } from "express";
import cookieParser from 'cookie-parser';
import { jwtAuth } from "./src/middlewares/jwtAuth.js";
import userRoutes from "./src/features/users/userRoutes.js";
import postRoutes from "./src/features/posts/postRoutes.js";
import commentRoutes from "./src/features/comments/commentRoutes.js";
import likeRoutes from "./src/features/likes/likeRoutes.js";
import { ApplicationError } from "./src/middlewares/errorHandeling.js";
import connectToMongodb from "./src/config/mongodb.js";
import productRoutes from "./src/features/products/productRoutes.js";
import cartRoutes from "./src/features/cart/cartRoutes.js";
import orderRoutes from "./src/features/order/orderRoutes.js";

const server = express();

server.use(express.json());
server.use(cookieParser());

server.get("/",(req,res)=>{
    res.status(200).send("Welcome to my server")
});


server.use("/api",userRoutes)
server.use("/api/comments",jwtAuth,commentRoutes);
server.use("/api/products",jwtAuth,productRoutes);
server.use("/api/order",jwtAuth,orderRoutes);
server.use("/api/cart",jwtAuth,cartRoutes)
server.use("/api/posts",jwtAuth,postRoutes);
server.use("/api/likes",jwtAuth,likeRoutes);

server.use((req,res)=>{
    res.status(404).send("Page dosen't Exist. Please try again")
})

server.use((err,req,res,next)=>{
    if(err instanceof ApplicationError){
        res.status(err.code).send(err.message);
    }else{
         res.status(500).send("Route not available! , Please try again");
    }
});

server.listen(3000,()=>{
    console.log("Server is running at 3000");
    connectToMongodb();
})