//let x = window.prompt("Enter the value of x: ");
//x = Number(x);

//let y = window.prompt("Enter the value of y: ");
//y = Number(y);

//let z = Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)));
//let z = Math.sqrt((x*x)+(y*y));

//console.log("The hypotenuse of this right angle triangle is: "+z)

//document.getElementById("p1").innerHTML = "The hypotenuse of this right angle triangle is: "+z;

document.getElementById("myButton").onclick = function(){
    x = document.getElementById("xTextBox").value;
    x = Number(x);

    y = document.getElementById("yTextBox").value;
    y = Number(y);

    z = Math.sqrt((Math.pow(x,2)+(Math.pow(y,2))));
    document.getElementById("zSide").innerHTML = "The hypotenuse of this right angle triangle is: "+z;
};