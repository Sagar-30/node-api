import { likeModel } from "./likeModel.js";
import {LikeReopsitory} from "./likeRepository.js"

const likes = new LikeReopsitory();

export class likeController{
    async likeByPost(req,res){
        const id = req.params.postId;
        const data = await likes.likeByPost(id);
        res.status(200).send(data);
    }
    async toggleStatus(req,res){
        const id = req.params.postId;
        const data =await likes.toggleStatus(id);
        res.status(200).send(data);
        }
}