var adam = document.getElementById("adam");
var darkbeing = document.getElementById("darkbeing");
scene();
function scene(){
    adam.style.animation = "descend";
    adam.style.animationDuration = "8s";
    adam.style.animationFillMode = "forwards";
    adam.style.animationIterationCount = "1";
    let p = document.getElementById("dialogue");
    setTimeout(() => {  p.innerHTML = "Oh, you must be tired."; 
    }, 200);
    setTimeout(() => {  p.innerHTML = "Seriously, why is he rushing you?"; 
    }, 1000);
    setTimeout(()=>{ p.innerHTML = "I am just as confused as...";
    }, 3000);
    setTimeout(()=>{
    adam.style.display = "none";
    document.querySelector("body").style.backgroundColor="black"; 
    }, 4000);
    setTimeout(()=>{
        document.querySelector("body").style.backgroundColor="red"; 
    }, 4050);
    setTimeout(()=>{
        document.querySelector("body").style.backgroundColor="black"; 
    }, 4100);
    setTimeout(()=>{
        p.style.color = "red";
        p.innerHTML = "You got out alive, did you?"; 
    }, 4100);
    setTimeout(()=>{
        p.innerHTML = "You found the secret...and the body and ghost of who I killed?"; 
    }, 5000);
    setTimeout(()=>{
        p.innerHTML = "Well...done...I have something to tell you..."; 
    }, 6000);
    setTimeout(()=>{
        p.innerHTML = "I MADE YOU DO ALL THE SHOPPING!!"; 
        darkbeing.style.display = "block";
        document.querySelector("body").style.backgroundColor="maroon"; 
    }, 8000);
    setTimeout(()=>{
        p.innerHTML = "THESE WERE ADAM'S BODY PARTS YOU SAW LONG AGO!!"; 
    }, 10000);
    setTimeout(()=>{
        p.innerHTML = "I ROAMED THE STORES, WATCHING PEOPLE SHOP, WHILE I COULDN'T DO ANYTHING...NOTHING..."; 
    }, 13000);
    setTimeout(()=>{
        p.innerHTML = "THEREFORE, YOU WERE TO HELP ME BRING THINGS TO GIVE ME MY PHYSICAL FORM!"; 
    }, 16000);

    setTimeout(()=>{
        p.innerHTML = "And you have some...."; 
    }, 18000);

    setTimeout(()=>{
        p.innerHTML = "I'll be taking these!!!"; 
    }, 21000);

    setTimeout(()=>{
        window.location.href = "../finalBoss/Emergance.html"; 
    }, 23000);




}