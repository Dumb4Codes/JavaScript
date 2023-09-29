const myButton = document.getElementById("myButton");
const animation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

//------------------------------------------ Side to Side -----------------------------------
/*
function begin(){
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 1);

    function frame(){
        if(x >= 200 || y >= 200){
            timerId = clearInterval(timerId);
        }
        else{
            x+=1;
            y+=1;
            animation.style.left = x + "px";
            animation.style.top = y + "px";
        }
    }
}
*/
//------------------------------------------ Rotation -----------------------------------------
/*
function begin(){
    let timerId = null;
    let degrees = 0;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(x >= 200 || y >= 200){
            timerId = clearInterval(timerId);
        }
        else{
            x+=1;
            y+=1;
            degrees+=500;
            animation.style.left = x + "px";
            animation.style.top = y + "px";
            animation.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}
*/
//------------------------------------------ Zoom --------------------------------------------
function begin(){
    let timerId = null;
    let x = 1;
    let y = 1;

    timerId = setInterval(frame, 5);

    function frame(){
        if(x>=2 || y>=2){
            timerId = clearInterval(timerId);
        }
        else{
            x+=0.01;
            y+=0.01;

            animation.style.transform = "scale("+x+","+y+")";
        }
    }
}