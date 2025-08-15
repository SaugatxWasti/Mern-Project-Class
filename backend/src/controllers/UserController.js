import User from "../models/User.js"

class UserController{
    
    async index(req,res){
        res.send("Find all the users");

    }
    async store(req,res){
        res.send('Create a User');
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