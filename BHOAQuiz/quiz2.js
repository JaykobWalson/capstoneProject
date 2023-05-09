let answer1 = document.getElementById("slate");
let answer2 = document.getElementById("coal");
let answer3 = document.getElementById("salt");
let answer4 = document.getElementById("chalk");
let answer = document.getElementById("answer");

answer1.addEventListener("mouseover", function(){
    answer1.style.color = "lime";
});
answer2.addEventListener("mouseover", function(){
    answer2.style.color = "lime";
});
answer3.addEventListener("mouseover", function(){
    answer3.style.color = "lime";
});
answer4.addEventListener("mouseover", function(){
    answer4.style.color = "lime";
});

answer1.addEventListener("mouseout", function(){
    answer1.style.color = "green";
});
answer2.addEventListener("mouseout", function(){
    answer2.style.color = "green";
});
answer3.addEventListener("mouseout", function(){
    answer3.style.color = "green";
});
answer4.addEventListener("mouseout", function(){
    answer4.style.color = "green";
});

answer1.addEventListener("click", function(){
    setTimeout(() => {
        answer.innerHTML = "Correct!";
    }, "500");
    setTimeout(() => {
        answer.innerHTML = "";
    }, "1000");
    setTimeout(() => {
        window.location.href = "Quiz 3.html";
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
        answer.innerHTML = "Incorrect";
    }, "500");
    setTimeout(() => {
        answer.innerHTML = "";
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