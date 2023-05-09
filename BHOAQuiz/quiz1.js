let answer1 = document.getElementById("lhasa");
let answer2 = document.getElementById("thimpu");
let answer3 = document.getElementById("kathmandu");
let answer4 = document.getElementById("pokhara");
let answer = document.getElementById("answer");

answer1.addEventListener("mouseover", function(){
    answer1.style.color = "cyan";
});
answer2.addEventListener("mouseover", function(){
    answer2.style.color = "cyan";
});
answer3.addEventListener("mouseover", function(){
    answer3.style.color = "cyan";
});
answer4.addEventListener("mouseover", function(){
    answer4.style.color = "cyan";
});

answer1.addEventListener("mouseout", function(){
    answer1.style.color = "blue";
});
answer2.addEventListener("mouseout", function(){
    answer2.style.color = "blue";
});
answer3.addEventListener("mouseout", function(){
    answer3.style.color = "blue";
});
answer4.addEventListener("mouseout", function(){
    answer4.style.color = "blue";
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
        window.location.href = "Quiz 2.html";
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