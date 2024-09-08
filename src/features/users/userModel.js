import jwt from "jsonwebtoken"
import { getDB } from "../../config/mongodb.js";
import { userRepository } from "./userRepository.js";


export class userModel{
 constructor(email,password,id){
   this._id= id,
   this.email = email,
   this.password= password
 }

 signup(email,password){

    // Using in memory data
    // const exist = userData.findIndex(i => i.email == email);
    // if(exist<0){
    //     let id=userData.length+1;
    //     const newUser = {id,email,password};
    //     userData.push(newUser);
    //     console.log(userData);
    //     return "user Added"
    // }
    // else{
    //     return "User already exist";
    // }

    // Using MongoDB

    // const newUser = new userModel(email,password);
    // userRepo.signup(newUser);
 }

 login(email,password){
    const exist = userData.findIndex(i => i.email == email && i.password == password);
    if(exist>=0){
        return { message: "Login successfull", userId: userData[exist].id };
    }
    else{
        return "User does not exist";
    }
 }
};

const userData =[
    {"id":1,"email":"abc123@gmail.com","password":"abc123"}
]