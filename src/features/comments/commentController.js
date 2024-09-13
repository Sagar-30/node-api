import { commentModel } from "./commentModel.js";
import {CommentRepository} from "./commentRepository.js"

const comments = new CommentRepository();

export class commentController{
   async commentById(req,res){
        const id = req.params.id;
        const data =await comments.allCommentById(id);
        res.status(200).send(data);
    }
   async addInId(req,res){
        const id = req.params.id;
        const {comment} = req.body;
        // console.log(id,req.body);
       
        const data =await comments.addInId(id,req.body);
        res.status(200).send(data);
    }
   async deleteById(req,res){
        const id = req.params.id;
        const data =await comments.deleteById(id);
        res.status(200).send(data);
    }
   async updaeById(req,res){
        const id = req.params.id;
        const data =await comments.updaeById(id,req.body);
        res.status(200).send(data);
    }
}