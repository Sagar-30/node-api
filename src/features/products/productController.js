import productRepository from "./productRepository.js";

const product = new productRepository();
export default class productController{
    async getById(req,res){
        const id = req.params.id;
        const data = await product.getById(id);
        res.status(200).send(data);
    }
    async getAll(req,res){
        const data = await product.getAll();
        res.status(200).send(data);
    }
    async add(req,res){
        const {name,price,category} = req.body;
        const data = await product.addInId(name,price,category);
        res.status(200).send(data);
    }
}