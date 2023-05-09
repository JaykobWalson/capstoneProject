var adam = document.getElementById("adam");
startScene();
function startScene(){
    adam.style.animation = "descend";
    adam.style.animationDuration = "5s";
    adam.style.animationFillMode = "forwards";
    adam.style.animationIterationCount = "1";

}

adam.addEventListener("animationend", function(){
    let p = document.getElementById("dialogue");
    setTimeout(() => {  p.innerHTML = "What do you think you are doing here?!"; 
    }, 2000);
    setTimeout(() => {  p.innerHTML = "This is a library only the gifted and knowledgeable can enter."; 
    }, 4000);
    setTimeout(()=>{ p.innerHTML = "You'll have to answer some questions if you want to continue.";
    }, 7000);
    setTimeout(()=>{ window.location.href = "Quiz 1.html";
    }, 10000);
});

