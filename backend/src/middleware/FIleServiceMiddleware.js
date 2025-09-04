import multer from 'multer'
import path from 'path' //nodes js kai file ho
import fs from 'fs';

class FileServiceMiddleware{

    folderExist(folderName){
        if(!fs.existsSync(folderName)){
            fs.mkdirSync(folderName);
            return true;

        }else{
            return true;
        }
    }
    
    fileUpload(uploadPath){
        this.folderExist(uploadPath);
        const storage = multer.diskStorage({
            destination: function(req, file, cb){
                cb(null,uploadPath);
            },
            filename: function(req, file, cb){
                cb(null,Date.now()+path.extname(file.originalname));
            }
        });
        return multer({storage : storage});
    }




}

export default FileServiceMiddleware;

// let obj = new FileServiceMiddleware();
// obj.folderExist('users');