
var darkbeing = document.getElementById("being");

scene();
function scene(){
    // adam.style.animation = "descend";
    // adam.style.animationDuration = "8s";
    // adam.style.animationFillMode = "forwards";
    // adam.style.animationIterationCount = "1";
    let p = document.getElementById("dialogue");
    setTimeout(() => {  document.querySelector("body").style.backgroundColor = "red"; 
    }, 200);
    setTimeout(() => {  document.querySelector("body").style.backgroundColor = "white"; 
    }, 300);
    setTimeout(() => {  document.querySelector("body").style.backgroundColor = "red"; 
    }, 1000);
    setTimeout(() => {  document.querySelector("body").style.backgroundColor = "white"; 
    }, 1200);
    setTimeout(() => {  document.querySelector("body").style.backgroundColor = "red"; 
    }, 1900);
    setTimeout(() => {  document.querySelector("body").style.backgroundColor = "black"; 
    }, 2500);
    setTimeout(() => {  p.innerHTML = "."; 
    }, 3200);
    setTimeout(() => {  p.innerHTML = ".."; 
    }, 3800);
    setTimeout(() => {  p.innerHTML = "..."; 
    }, 4200);
    setTimeout(() => {  p.innerHTML = "."; 
    }, 4800);
    setTimeout(() => {  p.innerHTML = ".."; 
    }, 5500);
    setTimeout(() => {  p.innerHTML = "..."; 
    }, 6100);
    setTimeout(() => {  
        document.querySelector("body").style.backgroundColor = "white";
        darkbeing.style.display = "block";
        p.innerHTML = "RAAAAAAAAAAAHHH!";
    }, 7000);
    setTimeout(() => {  
        window.location.href = "Pre-Fight.html"
    }, 9000);
}