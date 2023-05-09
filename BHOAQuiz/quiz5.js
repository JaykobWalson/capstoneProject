let answer1 = document.getElementById("Java");
let answer2 = document.getElementById("Lisp");
let answer3 = document.getElementById("C");
let answer4 = document.getElementById("Python");
let answer = document.getElementById("answer");

answer1.addEventListener("mouseover", function(){
    answer1.style.color = "white";
});
answer2.addEventListener("mouseover", function(){
    answer2.style.color = "white";
});
answer3.addEventListener("mouseover", function(){
    answer3.style.color = "white";
});
answer4.addEventListener("mouseover", function(){
    answer4.style.color = "white";
});

answer1.addEventListener("mouseout", function(){
    answer1.style.color = "black";
});
answer2.addEventListener("mouseout", function(){
    answer2.style.color = "black";
});
answer3.addEventListener("mouseout", function(){
    answer3.style.color = "black";
});
answer4.addEventListener("mouseout", function(){
    answer4.style.color = "black";
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
        answer.innerHTML = "Correct!";
    }, "500");
    setTimeout(() => {
        answer.innerHTML = "";
    }, "1000");
    setTimeout(() => {
        window.location.href = "../libraryLevels/Library Level 1.html";
    }, "1200");
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