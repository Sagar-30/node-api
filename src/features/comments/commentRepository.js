import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";
import { commentModel } from "./commentModel.js";

export class CommentRepository {
  //Add Comment by user Id
  async addInId(id, data) {
    const db = getDB();
    const findUser =await db.collection("users").findOne({_id:new ObjectId(id)});
    if (findUser) {
      console.log(id);
      const { user , Comment } = data;
      const newComment = new commentModel(id, Comment);
      await db.collection("comments").insertOne(newComment);
      return { success: true, comments: newComment };
    } else {
      return { success: false, Error: "User dosen't exist" };
    }
  }

  //All comments by user Id
  async allCommentById(id) {
    const db = getDB();
    const findUser =await db.collection("users").findOne({_id:new ObjectId(id)});
    if (findUser) {
      const findComment = await db.collection("comments").find({userId:new ObjectId(id)}).toArray();
      return { success: true, comments: findComment }
    } else {
      return { success: false, Error: "User dosen't exist" };
    }
  }

  //delete by id
 async deleteById(id) {
    const db = getDB();
      const cmntData = await db.collection("comments").deleteOne({ _id: new ObjectId(id) });
      if (cmntData) {
        return { success: true, posts: postData };
      } else {
        return { success: false, message: "Comment dosen't exist" };
      }
  }

  //Update by id
  async updaeById(id, data) {
      const db = getDB();
       const findComment = await db.collection("comments").findOnr({_id:new ObjectId(id)});
    if (findComment) {
      const {comment} = data;
      findComment.comment = comment;
      return { success: true, posts: findComment };
    } else {
      return { success: false, message: "Comment dosen't exist" };
    }
  }
  
}
