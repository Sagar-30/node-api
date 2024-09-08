import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join("src", "../uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, uploadDir);
    },
    filename:(req,file,cb)=>{
        const name = Date.now() + "-"+ file.originalname;
        cb(null,name);
    }
})

export const upload = multer({storage:storage});
