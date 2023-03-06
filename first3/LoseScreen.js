var clickHere = document.getElementById("startover");
clickHere.addEventListener("mouseover", function(){
    clickHere.style.color = "pink";
});
clickHere.addEventListener("mouseout", function(){
    clickHere.style.color = "red";
});
clickHere.addEventListener("click", function(){
    window.location.href = "Store 1.html";
});

