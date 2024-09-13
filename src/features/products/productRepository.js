import { ObjectId } from "mongodb";
import productModel from "./productModel.js";
import {getDB} from "../../config/mongodb.js";

export default class productRepository{
    constructor(){
        this.productModel = productModel;
    }
    async getAll(){
        const db = getDB();
        const productData = await db.collection("products").find().toArray();
        return { success: true, products: productData };
    }
    async getById(id){
        const db = getDB();
        const productData = await db.collection("products").findOne({_id:new ObjectId(id)});
        return { success: true, product: productData };
    }
    async addInId(name,price,category){
        const db = getDB();
            const newProduct = new productModel(name, price, category);
            await db.collection("products").insertOne(newProduct);
            return { success: true, products: newProduct };
    }
}