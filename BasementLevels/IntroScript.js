beginDialogue();
function beginDialogue(){
let dialogue = document.getElementById("text");
setTimeout(() => {  dialogue.innerHTML = "."; 
}, 100);
setTimeout(() => {  dialogue.innerHTML = ".."; 
}, 1000);
setTimeout(() => {  dialogue.innerHTML = "..."; 
}, 2000);
setTimeout(() => {  dialogue.innerHTML = "."; 
}, 3000);
setTimeout(() => {  dialogue.innerHTML = ".."; 
}, 4000);
setTimeout(() => {  dialogue.innerHTML = "..."; 
}, 5000);
setTimeout(() => {  dialogue.innerHTML = "Hello."; 
}, 6000);
setTimeout(() => {  dialogue.innerHTML = "So, you've come here." 
}, 8000);
setTimeout(() => {  dialogue.innerHTML = "You fell through the hole above...forgive me...it was an accident..."; 
}, 11000);
setTimeout(() => {  dialogue.innerHTML = "Just find the exit for now...there may be some stuff you can get at the end....or not...."; 
}, 17000);
setTimeout(() => {  window.location.href = "Basement Level 1.html"; 
}, 22000);
}
