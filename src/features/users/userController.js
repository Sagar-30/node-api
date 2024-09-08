import { userModel } from "./userModel.js";
import jwt from "jsonwebtoken";
import { userRepository } from "./userRepository.js";

const users = new userModel();
const userRepo = new userRepository();

export class userController {
   async login(req, res, next) {
        const { email, password } = req.body;
        console.log(email,password);
        // let output = users.login(email, password);
        // let user ={}
        let output = await userRepo.signIn(email, password);
        console.log(output.message);
        if (output.message == "Login successfull") {
            const id = output.userId;
            const token = jwt.sign({ id: id, email: email }, "abxrtunsfdtsh", { expiresIn: '7d' });
            res.cookie("token", token, { maxAge: 2 * 24 * 60 * 60 * 1000 });
            const nwOutput = { success: true, user: output.nwUser }
            res.status(200).send(nwOutput);
        } else {
            output = { success: false, message: output }
            res.status(200).send(output);
        }
    }
   async signup(req, res, next) {
        const { email, password } = req.body;
        let output ;
        const data = new userModel(email,password);
        try{
            output = await userRepo.signup(data);
        }catch(err){
            console.log(err);
        }
        res.status(200).send(output);
    }
}