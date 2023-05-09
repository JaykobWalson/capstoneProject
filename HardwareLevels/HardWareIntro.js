var adam = document.getElementById("adam");
scene();
function scene(){
    adam.style.animation = "descend";
    adam.style.animationDuration = "8s";
    adam.style.animationFillMode = "forwards";
    adam.style.animationIterationCount = "1";
    let p = document.getElementById("dialogue");
    setTimeout(() => {  p.innerHTML = "Huh?"; 
    }, 200);
    setTimeout(() => {  p.innerHTML = "You made it?"; 
    }, 1000);
    setTimeout(()=>{ p.innerHTML = "I thought you were dead!";
    }, 3000);
    setTimeout(()=>{ p.innerHTML = "Don't worry. It's just me";
    }, 5000);
    setTimeout(()=>{ adam.style.display = "block";
    }, 6000);
    setTimeout(()=>{
    adam.style.animation = "descend";
    adam.style.animationDuration = "8s";
    adam.style.animationFillMode = "forwards";
    adam.style.animationIterationCount = "1";;
    }, 7000);
    setTimeout(()=>{
        p.innerHTML = "You ran into him, I assume.";
    }, 9000);
    setTimeout(()=>{
        p.innerHTML = "He is known as 'the hungry one'.";
    }, 11000);
    setTimeout(()=>{
        p.innerHTML = "We have an uneasy history.";
    }, 14000);
    setTimeout(()=>{
        p.innerHTML = "Let's talk about it later.";
    }, 16000);
    setTimeout(()=>{
        window.location.href = "Hardware Level 1.html"
    }, 19000);



}