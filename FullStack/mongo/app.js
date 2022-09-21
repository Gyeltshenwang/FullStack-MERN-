const mongoose = require('mongoose')
const express  = require('express')
const app = express();


mongoose.connect('mongodb://localhost:127.0.0.1/myapp');

// const fruitSchema = new mongoose.Schema({
//     name: String,
//     rating: Number,
//     review: String,
// });

// const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     name: "Apple",
//     rating: 4,
//     review:" pretty bad"
// })

