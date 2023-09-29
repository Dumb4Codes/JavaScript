/*
let grade = 95;

switch(true){
    case grade>=90: console.log("Outstanding!!!");
    break;
    case grade>=80: console.log("You did great!");
    break;
    case grade>=65: console.log("You did good");
    break;
    case grade>=33: console.log("You pass just barely");
    break;
    case grade<=33: console.log("bwhahahahaha you failed the exam bro wtf");
    break;
    
    default: console.log(grade+" is not a letter grade");
}
*/

//------------------------- while and logical operator------------------------

/*
let username ="";

while(username=="" || username == null){
    username = window.prompt("Enter your name");
}

console.log("Sup "+username);
*/

//------------------------- while and do loop -------------------------------

/*
let username = "";

do{
    username = window.prompt("Enter your name");
}while(username=="");

console.log("sup "+username);
*/

//----------------------------- for loop--------------------------------------

/*
for(i=0;i<=10;i++){
    console.log(i)
}
*/

//------------------------- break and continue ------------------------------

// break = breaks out of a loop entirely
// continue = skips an iteration of a loop

/*
for(i=0; i<=20; i++){
    if(i==13){
        continue;
    }
    if(i==17){
        break;
    }""

    console.log(i);
}
*/

//------------------------- nested loops -----------------------------------

let rows = window.prompt("Enter # of rows:");

let columns = window.prompt("Enter # of columns:");

let symbol = window.prompt("Enter a symbol");

for(i=1; i<=rows; i++){
    document.getElementById("myLabel").innerHTML += "<br>"
    for(j=1; j<=columns; j++){
        document.getElementById("myLabel").innerHTML += symbol;
    }
}