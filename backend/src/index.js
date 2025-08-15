import express from 'express';
import dotenv from 'dotenv';
import Connection from './config/Connection.js';
import webRoute from './routes/web.js';

Connection.connect();

const app = express();
dotenv.config();
app.use(express.json());

app.use('/',webRoute);

const URL=process.env.URL || 'http://localhost'
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on the port  ${URL}:${PORT} `);
})