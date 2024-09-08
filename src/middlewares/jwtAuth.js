import jwt from "jsonwebtoken";

export const jwtAuth = (req,res,next)=>{
    const token = req.cookies.token;

    if(!token){
        res.status(400).send("You are not authorized person.Please login first");
        }
     try{
        const data = jwt.verify(token,"abxrtunsfdtsh");
        req.id = data.id;
        next();
     }catch(err){
        res.status(400).send("You are not authorized person.Please login first");
     }
    
}

