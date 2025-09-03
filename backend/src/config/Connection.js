import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();
class Connection{
    static connect(){
        const dbURL = process.env.DB_URL || 'mongodb://127.0.0.1:27017/mern-project';
        try{
            mongoose.connect(dbURL).then((res)=>{
                console.log('Database connected succesfully');
            }).catch((err)=>{
                console.log('Database connection failed',err);
            })

        }
        catch(err){
            console.error('Database connection error:',err);
        }

    }

}

export default Connection;