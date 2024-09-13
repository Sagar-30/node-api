import orderRepository from"./orderRepository.js";

const order = new orderRepository();
export default class orderController{
  async getCartItems(req,res,next){
    const userId = req.params.userId;
    const result = order.getCartItems(userId);
    res.status(201).send(result);
  }
}