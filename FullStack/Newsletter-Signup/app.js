const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res){
    res.sendFile(__dirname + "/signup.html");
    
});

app.post('/', function(req, res){
    var email = req.body.email;
    var password  = req.body.password;
    var name = req.body.Name;

    console.log(email,password, name);
})


app.listen(3000, function(){
    console.log('server up and running in port 3000');
})
//9c98bfe25b32e400408420266aacc961-us9   e244cd973c