import { commentModel } from "./commentModel.js";

const comments = new commentModel();

export class commentController{
    commentById(req,res){
        const id = req.params.id;
        const data = comments.allCommentById(id);
        res.status(200).send(data);
    }
    addInId(req,res){
        const id = req.params.id;
        const {comment} = req.body;
        console.log(id,req.body);
        const data = comments.addInId(id,comment);
        res.status(200).send(data);
    }
    deleteById(req,res){
        const id = req.params.id;
        const data = comments.deleteById(id);
        res.status(200).send(data);
    }
    updaeById(req,res){
        const id = req.params.id;
        const {comment} = req.body;
        const data = comments.updaeById(id,req.body);
        res.status(200).send(data);
    }
}