//window.addEventListener("keydown", event => console.log(event.key));

const myDiv = document.getElementById("myDiv");
let x = 0;
let y = 0;

window.addEventListener("keydown", move);

function move(event){  //This argument is provided for us
    switch(event.key){
        case "ArrowDown":
            y+=5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowUp":
            y-=5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowRight":
            x+=5;
            myDiv.style.left = x + "px";
            break;
        case "ArrowLeft":
            x-=5;
            myDiv.style.left = x + "px";
            break;
        default:
            break;
    }
}