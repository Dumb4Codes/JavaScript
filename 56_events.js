//const element = document.getElementById("myButton");
//const element = document.body;
//const element = document.getElementById("myText");
const element = document.getElementById("myDiv");



//element.onclick = doSomething;
//element.onload = doSomething; //body
//element.onchange = doSomething; //leave the textbox and it will work 
//element.onmouseover = doSomething;
//element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

function doSomething(){
    //document.write("You did something");
    element.style.backgroundColor = "rgb(20, 200, 250)";
}

function doSomethingElse(){
    element.style.backgroundColor = "red";
}