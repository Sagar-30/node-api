import cartModel from "./cartModel.js";
import { ObjectId } from "mongodb";
import {getDB} from "../../config/mongodb.js";

export default class cartRepository{
    constructor(){
        this.cartModel = cartModel;
    }
    async getAll(){
        const db = getDB();
        const productData = await db.collection("cart").find().toArray();
        return { success: true, products: productData };
    }
    async getById(id){
        const db = getDB();
        const productData = await db.collection("cart").findOne({_id:new ObjectId(id)});
        return { success: true, product: productData };
    }
    async addInId(userId, itemId, quantity){
        const db = getDB();
            const newCartItem = new cartModel(userId, itemId, quantity);
            await db.collection("cart").insertOne(newCartItem);
            return { success: true, products: newCartItem };
    }
}