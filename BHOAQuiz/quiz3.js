let answer1 = document.getElementById("goat");
let answer2 = document.getElementById("cow");
let answer3 = document.getElementById("cat");
let answer4 = document.getElementById("horse");
let answer = document.getElementById("answer");

answer1.addEventListener("mouseover", function(){
    answer1.style.color = "magenta";
});
answer2.addEventListener("mouseover", function(){
    answer2.style.color = "magenta";
});
answer3.addEventListener("mouseover", function(){
    answer3.style.color = "magenta";
});
answer4.addEventListener("mouseover", function(){
    answer4.style.color = "magenta";
});

answer1.addEventListener("mouseout", function(){
    answer1.style.color = "purple";
});
answer2.addEventListener("mouseout", function(){
    answer2.style.color = "purple";
});
answer3.addEventListener("mouseout", function(){
    answer3.style.color = "purple";
});
answer4.addEventListener("mouseout", function(){
    answer4.style.color = "purple";
});

answer1.addEventListener("click", function(){
    setTimeout(() => {
        answer.innerHTML = "Incorrect";
    }, "500");
    setTimeout(() => {
        answer.innerHTML = "";
    }, "1000");
});

answer2.addEventListener("click", function(){
    setTimeout(() => {
        answer.innerHTML = "Incorrect";
    }, "500");
    setTimeout(() => {
        answer.innerHTML = "";
    }, "1000");
});

answer3.addEventListener("click", function(){
    setTimeout(() => {
        answer.innerHTML = "Correct!";
    }, "500");
    setTimeout(() => {
        answer.innerHTML = "";
    }, "1000");
    setTimeout(() => {
        window.location.href = "Quiz 4.html";
    }, "1000");
});

answer4.addEventListener("click", function(){
    setTimeout(() => {
        answer.innerHTML = "Incorrect";
    }, "500");
    setTimeout(() => {
        answer.innerHTML = "";
    }, "1000");
});