//setInterval() = invokes a function repeatedly after a number of milli seconds
//                asynchronous function (dosen't pause execution)

let count = 0;
max = window.prompt("Enter a # to start count")
max = Number(max);

let myTimer = setInterval(countUp, 1000);

function countUp(){
    count++;
    console.log(count);

    if(count >= max) clearInterval(myTimer);
}