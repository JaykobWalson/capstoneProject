var clickHere = document.getElementById("startover");
clickHere.addEventListener("mouseover", function(){
    clickHere.style.color = "cyan";
});
clickHere.addEventListener("mouseout", function(){
    clickHere.style.color = "white";
});
clickHere.addEventListener("click", function(){
    window.location.href = "Hardware Level 1.html";
});