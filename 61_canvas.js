//canvas API = a means for drawing graphics
//             used for animations, games, data visualizatons

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

//---------------------------------- Draw Lines ---------------------------------
/*
context.strokeStyle = "purple";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0,0);
context.lineTo(250,250);
context.lineTo(250,500);
context.moveTo(500,0);
context.lineTo(250,250)
context.stroke();
*/

//--------------------------------- Draw Triangle ------------------------------
/*
//const fade = context.createLinearGradient(0, 0, 0, 170);
//fade.addColorStop(0, "black");
//fade.addColorStop(1, "white");
context.strokeStyle = "purple";
context.fillStyle = "yellow";
context.lineWidth = 5;
context.beginPath();
context.moveTo(250,0);
context.lineTo(0,250);
context.moveTo(0,250);
context.lineTo(250,500);
context.moveTo(500,250);
context.lineTo(250,500);
context.moveTo(500,250);
context.lineTo(250,0)
context.stroke();
context.fill();
*/

//--------------------------------- Draw Rect ----------------------------------
/*
const fade = context.createLinearGradient(0, 0, 0, 170);
fade.addColorStop(0, "black");
fade.addColorStop(1, "white");
context.fillStyle = fade;
context.fillRect(0, 0, 250, 250);
*/
/*
context.fillStyle = "black";
context.fillRect(0, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 0, 250, 250);

context.fillStyle = "red";
context.fillRect(0, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 0, 250, 250);

context.fillStyle = "green";
context.fillRect(250, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 250, 250, 250);

context.fillStyle = "blue";
context.fillRect(250, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 0, 250, 250);
*/

//----------------------------------- Draw Circle -------------------------------
/*
// (x, y, r, sAngle, endingAngle, counterclockwise)
context.fillStyle = "lightblue";
context.lineWidth = 5;
context.strokeStyle = "darkblue";
context.beginPath();
context.arc(250, 250, 200, 0, 2*Math.PI); // last argument is for pie chart (true or false)
context.stroke();
context.fill();
*/

//----------------------------------- Draw Text ---------------------------------

context.font = "50px MV Boli";
context.fillStyle = "grey";
context.textAlign = "center";
context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);