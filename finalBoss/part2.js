var circle1Down = false;


var circle1clicks = 3;
var circle2clicks = 3;
var circle3clicks = 3;

var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3");

var sound1 = new Audio("hurt1.mp3");
var sound2 = new Audio("hurt2.mp3");
var sound3 = new Audio("hurt3.mp3");

circle1.addEventListener("mouseover", function(){
    circle1.style.backgroundColor = "pink";
});
circle2.addEventListener("mouseover", function(){
    circle2.style.backgroundColor = "pink";
});
circle3.addEventListener("mouseover", function(){
    circle3.style.backgroundColor = "pink";
});


circle1.addEventListener("mouseout", function(){
    circle1.style.backgroundColor = "red";
});
circle2.addEventListener("mouseout", function(){
    circle2.style.backgroundColor = "red";
});
circle3.addEventListener("mouseout", function(){
    circle3.style.backgroundColor = "red";
});

circle1.addEventListener("click", function(){
    soundPlay();
    circle1clicks--;
    if(circle1clicks <= 0){
        circle1.style.display = "none";
    }
    if(circle1clicks == 0 && circle2clicks == 0 && circle3clicks == 0){
        window.location.href = "Final Part.html"
    }
});
circle2.addEventListener("click", function(){
    soundPlay();
    circle2clicks--;
    if(circle2clicks <= 0){
        circle2.style.display = "none";
    }
    if(circle1clicks == 0 && circle2clicks == 0 && circle3clicks == 0){
        window.location.href = "Final Part.html"
    }
});
circle3.addEventListener("click", function(){
    soundPlay();
    circle3clicks--;
    if(circle3clicks <= 0){
        circle3.style.display = "none";
    }
    if(circle1clicks == 0 && circle2clicks == 0 && circle3clicks == 0){
        window.location.href = "Final Part.html"
    }
});
function soundPlay(){
    randomNumber = Math.floor(Math.random()*3) + 1;
    if(randomNumber == 1){
        sound1.play();
    }
    if(randomNumber == 2){
        sound2.play();
    }
    if(randomNumber == 3){
        sound3.play();
    }
}