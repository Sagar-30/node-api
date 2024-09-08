import { getDB } from "../../config/mongodb.js";

export class userRepository{
    async signup(user){
        try{
            const db = getDB();
            const collection = db.collection("users");
            collection.insertOne(user);
            console.log(user);
            return user;
        }catch(err){
            console.log(err);
            return "Something went wrong1"
        }
    }

    async signIn(email, password){
        try{
            const db = getDB();
            const collection = db.collection("users");
            const nwUser = await collection.findOne({email,password});
            console.log(nwUser);
            if(nwUser){
                return { message: "Login successfull", nwUser };
    }
    else{
        return "User does not exist";
    }
        }catch(err){
            console.log(err);
            return "Something went wrong1"
        }
    }
}