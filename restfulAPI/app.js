import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import userRouter from './routes/user.js';
import 'dotenv/config';

const app = express();

//// middle ware 
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to db')
})
 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use(userRouter)



app.listen(3000, function () {
    console.log('server is running up and down')
})

// Route



