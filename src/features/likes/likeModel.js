import { postModel } from "../posts/postModel.js";
const users = new postModel();

export class likeModel{
    likeByPost(id){
        // console.log(id,users.getById(id));
        const data = users.getById(id).Post.likes;
        return {success:true , count:data};
    }
    toggleStatus(id){
        const data = users.getById(id).Post;
        console.log(data);
        if(!data.likeStatus){
            data.likeStatus = false;
        }
        if(data.likeStatus == true){
            data.likeStatus = false;
            return {success:true , count:data};
        }else{
            data.likeStatus = true;
            return {success:true , count:data};
        }
    }
}