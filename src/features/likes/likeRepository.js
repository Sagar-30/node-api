import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";

export class LikeReopsitory{
  async likeByPost(id){
      const db = getDB();
      const data =await db.collection("posts").findOne({_id:new ObjectId(id)});
    console.log(data.likes);
      return {success:true , count:data.likes};
  }

  //toggle Likes
  async toggleStatus(id){
    const db = getDB();
    const data =await db.collection("posts").findOne({_id:new ObjectId(id)});
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