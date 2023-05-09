var clickHere = document.getElementById("startover");
clickHere.addEventListener("mouseover", function(){
    clickHere.style.color = "cyan";
});
clickHere.addEventListener("mouseout", function(){
    clickHere.style.color = "blue";
});
clickHere.addEventListener("click", function(){
    window.location.href = "Library Level 1.html";
});