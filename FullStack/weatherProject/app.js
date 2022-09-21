
//2b6cc9e4474aaab4d9186df5388dc4eb

const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req,res)=>{
   

    //        // res.send(weatherData);

    //     //console.log(weatherData.id);



        
    //     });

    res.sendFile(__dirname+"/index.html");

        
    

    //});
   

    

});

app.post('/', function (req , res){
    console.log(req.body.cityName);
     const query = req.body.cityName;
    const apiKey = "2b6cc9e4474aaab4d9186df5388dc4eb";
    const unit = 'metric';
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query +"&appid=" + apiKey + "&units=" + unit + "";


    
    https.get(url , function(response){
        console.log(response.statusCode);
        response.on('data', function(data){ /// shows data in the form of hexa decimal
            console.log(data);

            /// convert java object notation in to a object
            const weatherData = JSON.parse(data);
            const weatherDescription  = weatherData.weather[0].description;
            const temp = weatherData.main.temp
            const icon = weatherData.weather[0].icon;
           // const image = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            ///console.log(weatherData);
            res.write('The current weather is '+ weatherDescription );
            res.write("The current temperature is "+ temp);
            //res.write("<img src =" + image +">");
            
            res.send();
        });
   
});
console.log('post recieved ');
});

app.listen(3000, function(){
  
    console.log('server is up and running ');
    
})