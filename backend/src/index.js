import express from 'express';
import dotenv from 'dotenv';
import Connection from './config/Connection.js';
import webRoute from './routes/web.js';
import mongoose from 'mongoose';

Connection.connect();

//mongodb connection//
mongoose.connect("mongodb://localhost:27017/mern-project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));



const app = express();
dotenv.config();
// app.use(express.json());
app.use(express.static('public'))
app.use('/api', express.json());

app.use('/',webRoute);

const URL=process.env.URL || 'http://localhost'
const PORT = process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log(`Server is running on the port  ${URL}:${PORT} `);
})