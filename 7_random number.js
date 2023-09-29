//let x = Math.floor(Math.random()*6)+1;

//let x = Math.floor(Math.random()*(25-15+1) + 15);

//function getRandom(min, max){
//    let x = Math.floor(Math.random()*(max-min+1) + min);
//    return x;
//}

//console.log(getRandom(10,20));

let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){
    x = Math.floor(Math.random()*6)+1;
    y = Math.floor(Math.random()*6)+1;
    z = Math.floor(Math.random()*6)+1;

    document.getElementById("xLabel").innerHTML = x;
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;
}