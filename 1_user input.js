
//user input 

//let username = window.prompt("Say something dammit");
//console.log(username);

let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    username = document.getElementById("label").innerHTML;
}

