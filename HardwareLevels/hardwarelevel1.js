document.addEventListener("keydown", move);
var shelf1 = document.getElementById("shelf1");
var shelf2 = document.getElementById("shelf2");
var wrench1 = document.getElementById("wrench1");
var wrench2 = document.getElementById("wrench2");
var wrench3 = document.getElementById("wrench3");



var lives = 3;
var items = 0;
var hit = new Audio("../ow.mp3");

function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();
    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
}

console.log("...");


timer();
function timer(){
    var time = 30;
    interval = setInterval(()=>{
        time--;
        document.getElementById("countdown").innerHTML = time;
        if(time <= 0){
            document.getElementById("countdown").innerHTML = "You lose!"
            window.location.href = "Lose Screen 4.html";
        }
    }, 1000);

    
}

function move(e){
    if(e.keyCode == 39 || e.keyCode == 68){
        let cart = document.getElementById("cart");
        let go = parseInt(cart.style.left) + 20;
        cart.style.left = go;
        console.log("...");

        if(elementsOverlap(cart, shelf1)){
            // ow.play();
            console.log("...");
            hit.play();
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";   
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                setTimeout(() => {  
                    hit.play();
                    }, 100);
                setTimeout(() => {  
                    document.getElementById("You lose!"); 
                    }, 200);
                setTimeout(() => {  
                        window.location.href = "Lose Screen 4.html";
                    }, 300);

            }
 
        }
        if(elementsOverlap(cart, shelf2)){
            // ow.play();
            console.log("...");
            hit.play();
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                setTimeout(() => {  
                    hit.play();
                    }, 100);
                setTimeout(() => {  
                    document.getElementById("You lose!"); 
                    }, 200);
                setTimeout(() => {  
                        window.location.href = "Lose Screen 4.html";
                    }, 300);

            }
             
 
        }
        

        if(elementsOverlap(cart, wrench1)){
            console.log("retrieved");
            wrench1.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, wrench2)){
            console.log("retrieved");
            wrench2.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, wrench3)){
            console.log("retrieved");
            wrench3.style.display = "none";
            items++;
        }
        if(items == 3){
            finish.style.display = "block";
        }
        if(elementsOverlap(cart, finish) && items == 5){
            window.location.href = "Hardware Level 2.html";
        }

        
        // if(parseInt(target.style.left) >= 1000){
        //     window.location.href = "../cutscene2/cutscene2.html";
        // }
        // check(redRing1Width, redRing1Left, redRing1Top, parseInt(target.style.left), parseInt(target.style.top));
        // check(redRing2Width, redRing2Left, redRing2Top, parseInt(target.style.left), parseInt(target.style.top));
    }
    if(e.keyCode == 37 || e.keyCode == 65){
        let cart = document.getElementById("cart");
        let go = parseInt(cart.style.left) - 20;
        cart.style.left = go;
        console.log("...");
        console.log(parseInt(cart.style.left));
        if(elementsOverlap(cart, shelf1)){
            // ow.play();
            console.log("...");
            hit.play();
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";   
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                setTimeout(() => {  
                    hit.play();
                    }, 100);
                setTimeout(() => {  
                    document.getElementById("You lose!"); 
                    }, 200);
                setTimeout(() => {  
                        window.location.href = "Lose Screen 4.html";
                    }, 300);

            }
 
        }
        if(elementsOverlap(cart, shelf2)){
            // ow.play();
            console.log("...");
            hit.play();
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                setTimeout(() => {  
                    hit.play();
                    }, 100);
                setTimeout(() => {  
                    document.getElementById("You lose!"); 
                    }, 200);
                setTimeout(() => {  
                        window.location.href = "Lose Screen 4.html";
                    }, 300);

            }
             
 
        }
        

        if(elementsOverlap(cart, wrench1)){
            console.log("retrieved");
            wrench1.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, wrench2)){
            console.log("retrieved");
            wrench2.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, wrench3)){
            console.log("retrieved");
            wrench3.style.display = "none";
            items++;
        }
        if(items == 3){
            finish.style.display = "block";
        }
        if(elementsOverlap(cart, finish) && items == 3){
            window.location.href = "Hardware Level 2.html";
        }
        // if(parseInt(target.style.left) >= 1000){
        //     window.location.href = "../cutscene2/cutscene2.html";
        // }
        // check(redRing1Width, redRing1Left, redRing1Top, parseInt(target.style.left), parseInt(target.style.top));
        // check(redRing2Width, redRing2Left, redRing2Top, parseInt(target.style.left), parseInt(target.style.top));
    }
    if(e.keyCode == 38 || e.keyCode == 87){
        let cart = document.getElementById("cart");
        let go = parseInt(cart.style.top) - 20;
        cart.style.top = go;
        console.log("...");
        console.log(parseInt(cart.style.left));
        if(elementsOverlap(cart, shelf1)){
            // ow.play();
            console.log("...");
            hit.play();
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";   
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                setTimeout(() => {  
                    hit.play();
                    }, 100);
                setTimeout(() => {  
                    document.getElementById("You lose!"); 
                    }, 200);
                setTimeout(() => {  
                        window.location.href = "Lose Screen 4.html";
                    }, 300);

            }
 
        }
        if(elementsOverlap(cart, shelf2)){
            // ow.play();
            console.log("...");
            hit.play();
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                setTimeout(() => {  
                    hit.play();
                    }, 100);
                setTimeout(() => {  
                    document.getElementById("You lose!"); 
                    }, 200);
                setTimeout(() => {  
                        window.location.href = "Lose Screen 4.html";
                    }, 300);

            }
             
 
        }
        

        if(elementsOverlap(cart, wrench1)){
            console.log("retrieved");
            wrench1.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, wrench2)){
            console.log("retrieved");
            wrench2.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, wrench3)){
            console.log("retrieved");
            wrench3.style.display = "none";
            items++;
        }
        if(items == 3){
            finish.style.display = "block";
        }
        if(elementsOverlap(cart, finish) && items == 3){
            window.location.href = "Hardware Level 2.html";
        }
        // if(parseInt(target.style.left) >= 1000){
        //     window.location.href = "../cutscene2/cutscene2.html";
        // }
        // check(redRing1Width, redRing1Left, redRing1Top, parseInt(target.style.left), parseInt(target.style.top));
        // check(redRing2Width, redRing2Left, redRing2Top, parseInt(target.style.left), parseInt(target.style.top));
    }

    if(e.keyCode == 40 || e.keyCode == 83){
        let cart = document.getElementById("cart");
        let go = parseInt(cart.style.top) + 20;
        cart.style.top = go;
        console.log("...");
        if(elementsOverlap(cart, shelf1)){
            // ow.play();
            console.log("...");
            hit.play();
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";   
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                setTimeout(() => {  
                    hit.play();
                    }, 100);
                setTimeout(() => {  
                    document.getElementById("You lose!"); 
                    }, 200);
                setTimeout(() => {  
                        window.location.href = "Lose Screen 4.html";
                    }, 300);

            }
 
        }
        if(elementsOverlap(cart, shelf2)){
            // ow.play();
            console.log("...");
            hit.play();
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                setTimeout(() => {  
                    hit.play();
                    }, 100);
                setTimeout(() => {  
                    document.getElementById("You lose!"); 
                    }, 200);
                setTimeout(() => {  
                        window.location.href = "Lose Screen 4.html";
                    }, 300);

            }
             
 
        }
        

        if(elementsOverlap(cart, wrench1)){
            console.log("retrieved");
            wrench1.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, wrench2)){
            console.log("retrieved");
            wrench2.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, wrench3)){
            console.log("retrieved");
            wrench3.style.display = "none";
            items++;
        }
        if(items == 3){
            finish.style.display = "block";
        }
        if(elementsOverlap(cart, finish) && items == 3){
            window.location.href = "Hardware Level 2.html";
        }
        // if(parseInt(cart.style.left) >= 1000){
        //     window.location.href = "../cutscene2/cutscene2.html";
        // }
    }
}




function isTouching(x0, y0, x1, y1){
  let a = Math.pow((x1 - x0),  2);
  let b = Math.pow((y1 - y0),  2);
  return Math.sqrt(a + b);

}