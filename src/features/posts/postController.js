import {PostRepository} from "./postRepository.js";
const Repo = new PostRepository();

export class postController{
   async getAll(req,res){
      // const data = posts.getAll();
      const data =await Repo.getAll();
      res.status(200).send(data);
    }
    async getById(req,res){
        const id = req.params.id;
        // const data = posts.getById(id);
        const data =await Repo.getById(id);
        res.status(200).send(data);
    }
    async getByuserId(req,res){
        const id = req.id;
        const data =await Repo.getByUserId(id);
        res.status(200).send(data);
    }
    
    async upload(req,res){
        const file = req.file;
        const url =`http://localhost:3000/uploads/${file.filename}`;
        // const data = Repo.upload(req.body,url);
        const data = await Repo.upload(req.body,url);
        console.log(data);
        res.status(200).send(data);
    }
   async modify(req,res){
        const postId = req.params.id;
        console.log("postId",postId);
        const file = req.file;
        const url =`http://localhost:3000/uploads/${file.filename}`;
        const data = await Repo.modify(req.body,url,postId);
        res.status(200).send(data);
    }
    async delete(req,res){
        const id = req.params.id;
        const data =await Repo.delete(id);
        res.status(200).send(data);
    }
}