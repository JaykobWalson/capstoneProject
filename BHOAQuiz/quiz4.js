let answer1 = document.getElementById("q1");
let answer2 = document.getElementById("q2");
let answer3 = document.getElementById("q3");
let answer4 = document.getElementById("q4");
let answer = document.getElementById("answer");

answer1.addEventListener("mouseover", function(){
    answer1.style.color = "pink";
});
answer2.addEventListener("mouseover", function(){
    answer2.style.color = "pink";
});
answer3.addEventListener("mouseover", function(){
    answer3.style.color = "pink";
});
answer4.addEventListener("mouseover", function(){
    answer4.style.color = "pink";
});

answer1.addEventListener("mouseout", function(){
    answer1.style.color = "red";
});
answer2.addEventListener("mouseout", function(){
    answer2.style.color = "red";
});
answer3.addEventListener("mouseout", function(){
    answer3.style.color = "red";
});
answer4.addEventListener("mouseout", function(){
    answer4.style.color = "red";
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
        answer.innerHTML = "Incorrect";
    }, "500");
    setTimeout(() => {
        answer.innerHTML = "";
    }, "1000");
});

answer4.addEventListener("click", function(){
    setTimeout(() => {
        answer.innerHTML = "Correct!";
    }, "500");
    setTimeout(() => {
        answer.innerHTML = "";
    }, "1000");
    setTimeout(() => {
        window.location.href = "Quiz 5.html";
    }, "1000");
});