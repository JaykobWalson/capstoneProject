beginDialogue();
var villain = document.getElementById("villain");
villain.style.display = "none";
function beginDialogue(){
let dialogue = document.getElementById("text");
setTimeout(() => {  dialogue.innerHTML = "."; 
}, 100);
setTimeout(() => {  dialogue.innerHTML = ".."; 
}, 1000);
setTimeout(() => {  dialogue.innerHTML = "..."; 
}, 2000);
setTimeout(() => {  dialogue.innerHTML = "You made it"; 
}, 3000);
setTimeout(() => {  dialogue.innerHTML = ".."; 
}, 4000);
setTimeout(() => {  dialogue.innerHTML = "..."; 
}, 5000);
setTimeout(() => {  dialogue.innerHTML = "Good."; 
}, 7000);
setTimeout(() => {  dialogue.innerHTML = "But not good enough..." 
}, 8000);
setTimeout(() => {  dialogue.innerHTML = "This is just the beginning..."; 
}, 10000);
setTimeout(() => {  dialogue.innerHTML = "of the end..."; 
}, 17000);
setTimeout(() => {  dialogue.innerHTML = "......"; 
}, 18000);
setTimeout(() => {  villain.style.display = "block";
}, 18000);
setTimeout(() => {  villain.style.display = "none";
}, 18500);
setTimeout(() => {  villain.style.display = "block";
}, 20000);
setTimeout(() => {  window.location.href = "../HardwareLevels/Hardware Intro.html";
}, 20100);
}