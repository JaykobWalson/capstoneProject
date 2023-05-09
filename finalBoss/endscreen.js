var yes = document.getElementById("yes");
var no = document.getElementById("no");

yes.addEventListener("mouseover", function(){
    yes.style.color = "lime";
});
no.addEventListener("mouseover", function(){
    no.style.color = "pink";
});
yes.addEventListener("mouseout", function(){
    yes.style.color = "green";
});
no.addEventListener("mouseout", function(){
    no.style.color = "red";
});
yes.addEventListener("click", function(){
    window.location.href = "../first3/Store 1.html"
});
no.addEventListener("click", function(){
    window.location.href = "https://www.youtube.com/watch?v=BkC65GLnImA&t=25s&ab_channel=DalerMehndiMusic"
});
