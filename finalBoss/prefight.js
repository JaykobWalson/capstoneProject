var adam = document.getElementById("adam");

scene();
function scene(){
    // adam.style.animation = "descend";
    // adam.style.animationDuration = "8s";
    // adam.style.animationFillMode = "forwards";
    // adam.style.animationIterationCount = "1";
    let p = document.getElementById("dialogue");
    setTimeout(() => {  p.innerHTML = "Are you OK?"; 
    }, 200);
    setTimeout(() => {  adam.style.display = "block"; 
    }, 2000);
    setTimeout(() => {  p.innerHTML = "It appears he is on the loose."; 
    }, 4000);
    setTimeout(() => {  p.innerHTML = "He took some of your stuff you shopped for"; 
    }, 5800);
    setTimeout(() => {  p.innerHTML = "Looks like it's no choice now"; 
    }, 6600);
    setTimeout(() => {  p.innerHTML = "It's fight or flight."; 
    }, 8000);
    setTimeout(() => {  p.innerHTML = "I'm gonna modify your cart with some tools I got from the hardware section of the store."; 
    }, 10000);
    setTimeout(() => {  p.innerHTML = "Hopefully we can end this psychopath."; 
    }, 13000);
    setTimeout(() => {  
       window.location.href = "Part 1.html"
    }, 15000);
}