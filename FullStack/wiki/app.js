import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from './routes/api.js'
import ejs from "ejs";
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// db connection
mongoose.connect(process.env.DB_URL, () => {
    console.log('connected to database');

})
app.use(router);


app.listen(process.env.PORT, () => {
    console.log('listening on port http://localhost:' + process.env.PORT);
})