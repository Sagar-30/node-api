export class postModel {
    constructor(imageUrl, caption, postedBy, likes, comments,id) {
        this._id = id;
        this.imageUrl = imageUrl;
        this.caption = caption;
        this.postedBy = postedBy;
        this.postedAt = new Date().toString();
        this.likes = likes;
        this.comments = Array.isArray(comments) ? comments.map(comment => ({
            id: comment.id,
            user: comment.user,
            comment: comment.comment,
            commentedAt: new Date(comment.commentedAt)
        })) : [];
    }
    
    getAll() {
        return { success: true, Post: postData };
    }
    getById(id) {
        const postIndex = postData.findIndex(i => i.id == id);
        if (postIndex >= 0) {
            return { success: true, Post: postData[postIndex] };
        } else {
            return { success: false, message: "Post dosen't exist" };
        }
    }
    getByUserId(id) {
        const posts = postData.filter(i => i.id == id);
        if (postIndex >= 0) {
            return { success: true, Post: posts };
        } else {
            return { success: false, message: "Post dosen't exist" };
        }
    }
    delete(id) {
        const postIndex = postData.findIndex(i => i.id == id);
        if (postIndex >= 0) {
            postData.splice(postIndex, 1);
            return { success: true, posts: postData };
        } else {
            return { success: false, message: "Post dosen't exist" };
        }
    }
    upload(data, url) {
        const {
            id,
            caption = "Default Caption",
            postedBy = "user",
            likes = 0
        } = data;

        const newPost = {
            id: id,
            imageUrl: url,
            caption: caption,
            postedBy: postedBy,
            postedAt: new Date().toISOString(),
            likes: likes,
            comments: []
        };
        // post.imageUrl = url;
        postData.push(newPost);
        console.log(data);
        return { success: true, posts: postData };
    }
    
    modify(data,url,postId) {
        const postIndex = postData.findIndex(i => i.id == postId);
        console.log(postId,postIndex);
        if (postIndex >= 0) {
            const {
                id,
                caption = "Default Caption",
                postedBy = "user",
                likes = 0
            } = data;

            const newPost = {
                id: id,
                imageUrl: url,
                caption: caption,
                postedBy: postedBy,
                postedAt: new Date().toISOString(),
                likes: likes,
                comments: []
            };
            postData[postIndex] = newPost;
            return { success: true, post: postData };
        } else {
            return { success: false, message: "Post dosen't exist" };
        }
    }
}



let postData = [
    {
        "id": 1,
        "imageUrl": "https://example.com/images/post1.jpg",
        "caption": "A beautiful sunrise over the mountains!",
        "postedBy": "user1",
        "postedAt": "2024-09-01T08:30:00Z",
        "likes": 150,
        "comments": [
            {
                "id": 101,
                "user": "user2",
                "comment": "Amazing view! 🌄",
                "commentedAt": "2024-09-01T09:00:00Z"
            },
            {
                "id": 102,
                "user": "user3",
                "comment": "Love this!",
                "commentedAt": "2024-09-01T09:15:00Z"
            }
        ]
    },
    {
        "id": 2,
        "imageUrl": "https://example.com/images/post2.jpg",
        "caption": "Delicious homemade pasta 🍝",
        "postedBy": "user2",
        "postedAt": "2024-09-02T12:00:00Z",
        "likes": 230,
        "comments": [
            {
                "id": 201,
                "user": "user4",
                "comment": "That looks so tasty!",
                "commentedAt": "2024-09-02T12:30:00Z"
            },
            {
                "id": 202,
                "user": "user5",
                "comment": "Recipe, please!",
                "commentedAt": "2024-09-02T12:45:00Z"
            }
        ]
    },
    {
        "id": 3,
        "imageUrl": "https://example.com/images/post3.jpg",
        "caption": "Exploring the city streets at night.",
        "postedBy": "user3",
        "postedAt": "2024-09-03T20:00:00Z",
        "likes": 180,
        "comments": [
            {
                "id": 301,
                "user": "user1",
                "comment": "The city looks so alive!",
                "commentedAt": "2024-09-03T20:30:00Z"
            }
        ]
    }
]
