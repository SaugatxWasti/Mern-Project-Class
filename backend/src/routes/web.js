import express from 'express'
import userRouter from './user.js';

const webRoute = express.Router()

webRoute.get('/',(req,res)=>{
    return res.send('Welcome to the Web Route');
})

webRoute.use('/users',userRouter);




export default webRoute;