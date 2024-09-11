import { getDB } from "../../config/mongodb.js";
import { ObjectId } from "mongodb";
import { postModel } from "./postModel.js";

export class PostRepository {
  //Upload a post
  async upload(data, url) {
    const { caption, postedBy, likes, comments } = data;
    const newPost = new postModel(url, caption, postedBy, likes, comments);

    const db = getDB();
    const postData = await db.collection("posts").insertOne(newPost);
    // post.imageUrl = url;
    if (postData.acknowledged == true) {
      return { success: true, posts: newPost };
    } else {
      return {
        success: false,
        message: "Somethig went wrong! Please try again",
      };
    }
  }

  //Get all posts
  async getAll() {
    const db = getDB();
    const postData = await db.collection("posts").find({}).toArray();
    return { success: true, Post: postData };
  }

  //Get post by Id
  async getById(id) {
    const db = getDB();
    const postData = await db
      .collection("posts")
      .findOne({ _id: new ObjectId(id) });
    if (postData) {
      return { success: true, Post: postData };
    } else {
      return { success: false, message: "Post dosen't exist" };
    }
  }

  //Get by user Id
  async getByUserId(id) {
    const db = getDB();
    const postData = await db
      .collection("posts")
      .findOne({ _id: new ObjectId(id) });
    console.log(postData, id);
    if (postData) {
      return { success: true, Post: posts };
    } else {
      return { success: false, message: "Nothing posted by your id yet" };
    }
  }

  //Delete Post by id
  async delete(id) {
    const db = getDB();
    const postData = await db
      .collection("posts")
      .deleteOne({ _id: new ObjectId(id) });
    if (postData) {
      return { success: true, posts: postData };
    } else {
      return { success: false, message: "Post dosen't exist" };
    }
  }

  //Modify Existing post
  async modify(data, url, postId) {
    const { caption, postedBy, likes, comments } = data;
    const db = getDB();
    const post = await db
      .collection("posts")
      .findOne({ _id: new ObjectId(postId) });
    if (post) {
      post.caption = caption;
      post.postedBy = postedBy;
      post.likes = likes;
      post.comments = comments;
      return { success: true, post: post };
    } else {
      return { success: false, message: "Post dosen't exist" };
    }
  }
}
