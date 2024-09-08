import { likeModel } from "./likeModel.js";

const likes = new likeModel();

export class likeController{
    likeByPost(req,res){
        const id = req.params.postId;
        const data = likes.likeByPost(id);
        res.status(200).send(data);
    }
    toggleStatus(req,res){
        const id = req.params.postId;
        const data = likes.toggleStatus(id);
        res.status(200).send(data);
        }
}