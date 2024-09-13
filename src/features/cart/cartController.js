import cartRepository from "./cartRepository.js"

const cart = new cartRepository();
export default class cartController{
    async getById(req,res){
        const id = req.params.id;
        const data = await cart.getById(id);
        res.status(200).send(data);
    }
    async getAll(req,res){
        const data = await cart.getAll();
        res.status(200).send(data);
    }
    async add(req,res){
        const {userId, itemId, quantity} = req.body;
        const data = await cart.addInId(userId, itemId, quantity);
        res.status(200).send(data);
    }
}