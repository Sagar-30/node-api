import OrderModel from "./orderModel.js";
import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";

export default class orderRepository {
  async getCartItems(userId) {
    try {
      const db = getDB();
      console.log(userId);
      //step-1 Get cart Item and calculate total
      const itemId = new ObjectId("66e421c84c1faf953b5a26b6");
      const item = await db
        .collection("cart")
        .aggregate([
          { $match: { userId: userId } },
          {
            $lookup: {
              from: "products",
              localField: "itemId",
              foreignField: "_id",
              as: "productInfo",
            },
          },
          // { $unwind: "$productInfo" },
          // {
          //   $addFields: {
          //     total: {
          //       $multiply: ["quantity", "$productInfo.price"],
          //     },
          //   },
          // },
        ])
        .toArray();
      console.log("item",item);
      const GrandTotal = item.reduce((acc, item) => acc + item.total, 0);
      console.log("GrandTotal",GrandTotal);

      //step-2 create new order record
      const newOrder = new OrderModel(userId, GrandTotal);
      db.collection("orders").insertOne(newOrder);

      //step-3 reduce the stock
      for (let i in item) {
        await db
          .collection("products")
          .updateOne(
            { _id: i.productId },
            { $inc: { stock: -i.quantity } },
          );
      }
      //step-4 clear cart
      await db.collection("cart").deleteMany({ userId: new ObjectId(userId) });

      return { success: true, order: newOrder };
    } catch (error) {
      console.error("Error processing order:", error);
      return { success: false, error: error.message }; // Return error details
    }
  }
}
