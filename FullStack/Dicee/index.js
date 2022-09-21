
var randomNumber1 = Math.floor(Math.random()*6)+1;

var imageSource = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src",imageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var imageSource2 = "images/dice" + randomNumber2 + ".png";
 document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

 if(imageSource > imageSource2){
    document.querySelector("h1").innerHTML = "Player 1  win";
 }
 else if (imageSource2>imageSource){
    document.querySelector("h1").innerHTML = "Player 2  win";
 }else{
    document.querySelector("h1").innerHTML = "draw";
 }

