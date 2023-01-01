//jshint esversion:6
require('dotenv').config();
const md5 = require('md5');
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
//const encrypt = require('mongoose-encryption');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
// import to use here take note

app.use(session({
    secret: 'Our littel secret',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// connection to mongodb
const url = 'mongodb+srv://gyeltshen:gyeltshen11@credintial.n2k0ms9.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url, function () {
    console.log('connected ');
})

// user Schema 

const userSchema = new mongoose.Schema({
    name:String,
    email: String,
    password: String,
    role:String,
   
});
// used to hash and salt the password
userSchema.plugin(passportLocalMongoose);

// userSchema.plugin(encrypt, { secret:process.env.SECRET, encryptedFields:['password'] });
// using hashfunction

const User = mongoose.model('User', userSchema);
// for session
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.get('/', function (req, res) {
    res.render("home");
});

app.get('/login', function (req, res) {
    res.render("login");
});
app.get('/register', function (req, res) {
    res.render("register");
    
});
app.get('/secrets', function (req, res) {
    if (req.isAuthenticated()) {
        res.render('secrets');
    } else {
        res.render("/login");
    }
    
});

app.get("/logout", function (req, res) {
    
    res.redirect('/');
})
// post
app.post('/register', (req, res) => {
   
    User.register({ username: req.body.username,role:req.body.role }, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
           // res.redirect('/register')
            res.status(200).json({message:'registered',data:User})
        }
        else {
            passport.authenticate('local')(req, res, function () {
                res.redirect('/secrets'); 
            })
        }
    })
});

// validationg the user in the login

app.post('/login', function (req, res) {

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function (err) {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate('local')(req, res, function () {
                res.redirect('/secrets')
            })
        }
    })
})


app.listen(3000, function () {
    console.log('Server started on port 30000')
});



