timer();
function timer(){
    var time = 60;
    interval = setInterval(()=>{
        time--;
        document.getElementById("countdown").innerHTML = time;
        if(time <= 0){
            document.getElementById("countdown").innerHTML = "You lose!"
        }
    }, 1000);

    


    
    
}
function move(e){
    if(e.keyCode == 39 || e.keyCode == 68){
        let cart = document.getElementById("cart");
        let go = parseInt(target.style.left) - 20;
        target.style.top = go;
        if(parseInt(cart.style.left) >= parseInt(block1.style.left) && parseInt(cart.style.top) <= parseInt(block1.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        if(parseInt(cart.style.left) >= parseInt(block2.style.left) && parseInt(cart.style.top) <= parseInt(block2.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        if(parseInt(cart.style.left) >= parseInt(block3.style.left) && parseInt(cart.style.top) <= parseInt(block3.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        if(parseInt(cart.style.left) >= parseInt(block4.style.left) && parseInt(cart.style.top) <= parseInt(block4.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        if(parseInt(cart.style.left) >= parseInt(block5.style.left) && parseInt(cart.style.top) <= parseInt(block5.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        // if(parseInt(target.style.left) >= 1000){
        //     window.location.href = "../cutscene2/cutscene2.html";
        // }
        // check(redRing1Width, redRing1Left, redRing1Top, parseInt(target.style.left), parseInt(target.style.top));
        // check(redRing2Width, redRing2Left, redRing2Top, parseInt(target.style.left), parseInt(target.style.top));
    }
    if(e.keyCode == 37 || e.keyCode == 65){
        let cart = document.getElementById("cart");
        let go = parseInt(target.style.top) + 20;
        target.style.left = go;
        console.log((redRing1.style.left));
        console.log(parseInt(target.style.left));
        if(parseInt(cart.style.left) >= parseInt(block1.style.left) && parseInt(cart.style.top) <= parseInt(block1.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        if(parseInt(cart.style.left) >= parseInt(block2.style.left) && parseInt(cart.style.top) <= parseInt(block2.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        if(parseInt(cart.style.left) >= parseInt(block3.style.left) && parseInt(cart.style.top) <= parseInt(block3.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        if(parseInt(cart.style.left) >= parseInt(block4.style.left) && parseInt(cart.style.top) <= parseInt(block4.style.top)){
           // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        if(parseInt(cart.style.left) >= parseInt(block5.style.left) && parseInt(cart.style.top) <= parseInt(block5.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        // if(parseInt(target.style.left) >= 1000){
        //     window.location.href = "../cutscene2/cutscene2.html";
        // }
        // check(redRing1Width, redRing1Left, redRing1Top, parseInt(target.style.left), parseInt(target.style.top));
        // check(redRing2Width, redRing2Left, redRing2Top, parseInt(target.style.left), parseInt(target.style.top));
    }
    if(e.keyCode == 38 || e.keyCode == 87){
        let cart = document.getElementById("cart");
        let go = parseInt(cart.style.left) - 20;
        go.style.top = size;
        if(parseInt(cart.style.left) >= parseInt(block1.style.left) && parseInt(cart.style.top) <= parseInt(block1.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        if(parseInt(cart.style.left) >= parseInt(block2.style.left) && parseInt(cart.style.top) <= parseInt(block2.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        if(parseInt(cart.style.left) >= parseInt(block3.style.left) && parseInt(cart.style.top) <= parseInt(block3.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        if(parseInt(cart.style.left) >= parseInt(block4.style.left) && parseInt(cart.style.top) <= parseInt(block4.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        if(parseInt(cart.style.left) >= parseInt(block5.style.left) && parseInt(cart.style.top) <= parseInt(block5.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        // if(parseInt(target.style.left) >= 1000){
        //     window.location.href = "../cutscene2/cutscene2.html";
        // }
        // check(redRing1Width, redRing1Left, redRing1Top, parseInt(target.style.left), parseInt(target.style.top));
        // check(redRing2Width, redRing2Left, redRing2Top, parseInt(target.style.left), parseInt(target.style.top));
    }
    if(e.keyCode == 40 || e.keyCode == 83){
        let cart = document.getElementById("cart");
        let go = parseInt(target.style.left) + 20;
        go.style.top = go;
        console.log(parseInt(redRing1.style.left));
        console.log(parseInt(cart.style.left));
        if(parseInt(cart.style.left) >= parseInt(block1.style.left) && parseInt(cart.style.top) <= parseInt(block1.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        if(parseInt(cart.style.left) >= parseInt(block2.style.left) && parseInt(cart.style.top) <= parseInt(block2.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        if(parseInt(cart.style.left) >= parseInt(block3.style.left) && parseInt(cart.style.top) <= parseInt(block3.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        if(parseInt(cart.style.left) >= parseInt(block4.style.left) && parseInt(cart.style.top) <= parseInt(block4.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        if(parseInt(cart.style.left) >= parseInt(block5.style.left) && parseInt(cart.style.top) <= parseInt(block5.style.top)){
            // ow.play();
            console.log("...");
            document.getElementById("cart").style.left = "5px";
            document.getElementById("cart").style.top = "450px";
             
 
        }
        // if(parseInt(cart.style.left) >= 1000){
        //     window.location.href = "../cutscene2/cutscene2.html";
        // }
    }
}