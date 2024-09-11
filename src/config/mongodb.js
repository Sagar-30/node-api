import {MongoClient} from "mongodb";

// const url = "mongodb://127.0.0.1:27017/ecomdb";
const url = "mongodb+srv://sagar302001:YwoRUHI5Ipbqn8Qk@cluster0.wql4r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let client;
const connectToMongodb = ()=>{
    MongoClient.connect(url)
    .then((data)=>{
        client = data;
        console.log("Mongo db is connected")
    })
    .catch((err)=>{
        console.log(err);
    })
};

export const getDB = ()=>{
    return client.db();
}
export default connectToMongodb;