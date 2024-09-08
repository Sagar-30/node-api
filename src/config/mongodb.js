import {MongoClient} from "mongodb";

const url = "mongodb://127.0.0.1:27017/ecomdb";
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