import { postModel } from "../posts/postModel.js"

const posts = new postModel;
export class commentModel {

    constructor(userId,comment,id){
        this._id = id;
        this.userId = userId;
        this.comment = comment;
        this.commentAt = new Date();
    }
    
    // allCommentById(id) {
    //     console.log(posts.getById(id).comments);
    //     const comments = posts.getById(id).Post.comments;
    //     return { success: true, comments: comments }
    // }
    // addInId(id, data) {
    //     const comments = posts.getById(id).Post.comments;
    //     const {
    //         user = "user2",
    //         comment = "default Comment",
    //         commentedAt
    //     } = data;
    //     const newComment = {
    //         id: comments.length + 1,
    //         user: user,
    //         comment: comment,
    //         commentedAt: new Date().toISOString(),
    //     };
    //     comments.push(newComment);
    //     return { success: true, comments: comments }
    // }
    // deleteById(id) {
    //     const postData  = posts.getAll().Post;
    //     const allComments = postData.flatMap(post => post.comments);
        
    //     const commentIndex = allComments.findIndex(i => i.id == id);
    //     if (commentIndex >= 0) {
    //         allComments.splice(commentIndex, 1);
    //         return { success: true, comments: allComments };
    //     } else {
    //         return { success: false, message: "comment dosen't exist" };
    //     }
    // }
    // updaeById(id, data) {
    //     const postData  = posts.getAll().Post;
    //     const allComments = postData.flatMap(post => post.comments);
    //     const {
    //         user = "user2",
    //         comment = "default Comment",
    //         commentedAt
    //     } = data;
    //     const newComment = {
    //         id: allComments.length + 1,
    //         user: user,
    //         comment: comment,
    //         commentedAt: new Date().toISOString(),
    //     };

    //     const commentIndex = allComments.findIndex(i => i.id == id);
    //     if (commentIndex >= 0) {
    //         allComments[commentIndex] = newComment;
    //         return { success: true, comments: allComments };
    //     } else {
    //         return { success: false, message: "comment dosen't exist" };
    //     }
    // }
}