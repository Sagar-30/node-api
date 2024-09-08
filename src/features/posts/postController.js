import { postModel } from "./postModel.js";

const posts = new postModel();
export class postController{
    getAll(req,res){
      const data = posts.getAll();
      res.status(200).send(data);
    }
    getById(req,res){
        const id = req.params.id;
        const data = posts.getById(id);
        res.status(200).send(data);
    }
    getByuserId(req,res){
        const id = req.id;
        const data = posts.getByUserId(id);
        res.status(200).send(data);
    }
    delete(req,res){
        const id = req.params.id;
        const data = posts.delete(id);
        res.status(200).send(data);
    }
    upload(req,res){
        const file = req.file;
        const url =`http://localhost:3000/uploads/${file.filename}`;
        const data = posts.upload(req.body,url);
        res.status(200).send(data);
    }
    modify(req,res){
        const postId = req.params.id;
        console.log("postId",postId);
        const file = req.file;
        const url =`http://localhost:3000/uploads/${file.filename}`;
        const data = posts.modify(req.body,url,postId);
        res.status(200).send(data);
    }
    delete(req,res){
        const id = req.params.id;
        const data = posts.delete(id);
        console.log(data);
        res.status(200).send(data);
    }
}