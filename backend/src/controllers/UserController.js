import User from "../models/User.js";
import bcrypt from 'bcrypt';

class UserController{
    
    async index(req,res){
        const usersData = await User.find({});
        // const newData =usersData.map(user=>{
        //     let uobj= user.toObject();
        //     delete uobj.password;
        //     return uobj;
        // })
        return res.status(200).json(usersData);

    }

    async store(req,res){
        // let password = req.body.password;
        // let salt = await bcrypt.genSalt(10);
        // let newPassword = await bcrypt.hash(password, salt);
        // console.log(newPassword);
        const user = await User.create({...req.body});
        return res.status(201).json(user);
    }

    async show(req,res){
        res.send('Show user their ID');

    }

    async update(req,res){
        res.send('Update user with their ID');
    }

    async destroy(req,res){
        res.send('Delete user with ID');
    }

}



export default UserController;