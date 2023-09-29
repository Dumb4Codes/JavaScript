//console.time() = Starts a timer you can use to 
//                 track how long an operation takes
//                 Give each timer a unique name.

//start
console.time("Response time");

//alert("CLICK THE OK BUTTON"); //time for me to actually click ok
setTimeout(()=>console.log("whats up dude"),1000);

//end
console.timeEnd("Response time");