
document.addEventListener("keydown", move);
var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var block3 = document.getElementById("block3");
var block4 = document.getElementById("block4");
var orange1 = document.getElementById("orange1");
var orange2 = document.getElementById("orange2");
var orange3 = document.getElementById("orange3");
var orange4 = document.getElementById("orange4");

var lives = 3;
var items = 0;

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
    var time = 60;
    interval = setInterval(()=>{
        time--;
        document.getElementById("countdown").innerHTML = time;
        if(time <= 0){
            document.getElementById("countdown").innerHTML = "You lose!"
            window.location.href = "Lose Screen.html";
        }
    }, 1000);

    
}

function move(e){
    if(e.keyCode == 39 || e.keyCode == 68){
        let cart = document.getElementById("cart");
        let go = parseInt(cart.style.left) + 20;
        cart.style.left = go;
        console.log("...");

        if(elementsOverlap(cart, block1)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
 
        }
        if(elementsOverlap(cart, block2)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }
        if(elementsOverlap(cart, block3)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }
        if(elementsOverlap(cart, block4)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }
        if(elementsOverlap(cart, block5)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }

        if(elementsOverlap(cart, orange1)){
            console.log("retrieved");
            orange1.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, orange2)){
            console.log("retrieved");
            orange2.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, orange3)){
            console.log("retrieved");
            orange3.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, orange4)){
            console.log("retrieved");
            orange4.style.display = "none";
            items++;
        }
        if(items == 4){
            finish.style.display = "block";
        }
        if(elementsOverlap(cart, finish) && items == 4){
            window.location.href = "Store 3.html";
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
        if(elementsOverlap(cart, block1)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }
        if(elementsOverlap(cart, block2)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }
        if(elementsOverlap(cart, block3)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }
        if(elementsOverlap(cart, block4)){
           // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }
        if(elementsOverlap(cart, block5)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }
        if(elementsOverlap(cart, orange1)){
            console.log("retrieved");
            orange1.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, orange2)){
            console.log("retrieved");
            orange2.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, orange3)){
            console.log("retrieved");
            orange3.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, orange4)){
            console.log("retrieved");
            orange4.style.display = "none";
            items++;
        }
        if(items == 4){
            finish.style.display = "block";
        }
        if(elementsOverlap(cart, finish) && items == 4){
            window.location.href = "Store 3.html";
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
        if(elementsOverlap(cart, block1)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }
        if(elementsOverlap(cart, block2)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }
        if(elementsOverlap(cart, block3)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }
        if(elementsOverlap(cart, block4)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }
        if(elementsOverlap(cart, block5)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }

        if(elementsOverlap(cart, orange1)){
            console.log("retrieved");
            orange1.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, orange2)){
            console.log("retrieved");
            orange2.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, orange3)){
            console.log("retrieved");
            orange3.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, orange4)){
            console.log("retrieved");
            orange4.style.display = "none";
            items++;
        }
        if(items == 4){
            finish.style.display = "block";
        }
        if(elementsOverlap(cart, finish) && items == 4){
            window.location.href = "Store 3.html";
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
        if(elementsOverlap(cart, block1)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }
        if(elementsOverlap(cart, block2)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }
        if(elementsOverlap(cart, block3)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }
        if(elementsOverlap(cart, block4)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }
        if(elementsOverlap(cart, block5)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "620px";
            document.getElementById("cart").style.top = "450px";
            lives--;
            document.getElementById("lives").innerHTML = lives;
            if(lives <= 0){
                document.getElementById("countdown").innerHTML = "You lose!";
                window.location.href = "Lose Screen.html";

            }
             
 
        }

        if(elementsOverlap(cart, orange1)){
            console.log("retrieved");
            orange1.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, orange2)){
            console.log("retrieved");
            orange2.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, orange3)){
            console.log("retrieved");
            orange3.style.display = "none";
            items++;
        }
        if(elementsOverlap(cart, orange4)){
            console.log("retrieved");
            orange4.style.display = "none";
            items++;
        }
        if(items == 4){
            finish.style.display = "block";
        }
        if(elementsOverlap(cart, finish) && items == 4){
            window.location.href = "Store 3.html";
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
