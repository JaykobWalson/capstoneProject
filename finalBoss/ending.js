var adam = document.getElementById("adam");
var lines = document.getElementById("outroLines");
lines.innerHTML = "Oh. You're alive."
setTimeout(() => {  
    startScene();
    lines.innerHTML = " ";
}, 1000);
startScene();
function startScene(){
    adam.style.animation = "descend";
    adam.style.display = "block";
    adam.style.animationDuration = "5s";
    adam.style.animationFillMode = "forwards";
    adam.style.animationIterationCount = "1";

}

adam.addEventListener("animationend", function(){
    setTimeout(() => {  lines.innerHTML = "I know what you are thinking."; 
    }, 2000);
    setTimeout(() => {  lines.innerHTML = "You're scared."; 
    }, 4000);
    setTimeout(()=>{ lines.innerHTML = "Don't worry. He is no more.";
    }, 7000);
    setTimeout(()=>{ lines.innerHTML = "Crawford mall is back to normal once more.";
    }, 10000);
    setTimeout(()=>{ lines.innerHTML = "It's safe to shop now, but I think you should go home.";
    }, 12000);
    setTimeout(()=>{ lines.innerHTML = "You look tired.";
    }, 14000);
    setTimeout(()=>{ lines.innerHTML = "Here. I'll give you your products. Now you can go home and rest.";
    }, 15000);
    setTimeout(()=>{ window.location.href = "The End.html";
    }, 18000);
});