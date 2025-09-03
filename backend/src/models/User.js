import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    email:{
        type: String,
        required : true,
        unique : true,
    },
    password:{
        type:String,
        required : true,
    },
    gender:{
        type: String,
        enum :['male','female','others'],
        required : true,
    },
    role:{
        type: String,
        enum:['user','admin'],
        default: 'user',

    },
    image:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    updatedAt:{
        type:Date,
        default: Date.now,
    }

},{
    versionKey : false,
})
userSchema.pre('save', async function(next){
    if (!this.isModified("Password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);

    // let password = this.password;
    // let salt = await bcrypt.genSalt(10);
    // this.password = await bcrypt.hash(password, salt)
    // next();
});

userSchema.methods.toJSON = function(){
    const obj = this.toObject();
    delete obj.password;
    return obj;
}

export default mongoose.model("User",userSchema)