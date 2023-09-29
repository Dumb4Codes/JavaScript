/*
startProgram();

function startProgram(){
    let username = "whiksey";
    let age = 21;

    greeting(username, age);
}

function greeting(username, age){
    console.log("yo " +username);
    console.log("your age is "+age);
    console.log("whats up");
}
*/

//------------------------------- return statement -----------------------------

let width;
let height;
let area;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea();

console.log("The area of rectangle is:"+area);

function getArea(){
    return width*height;
}