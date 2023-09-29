// .addEventListener(event, function, useCapture)
// You can add many event handlers to one element.
// Even the same event that invokes different functions

// useCapture = if two elements are taking same space and
// they're listening for the same event you can specify which
// one has preference over the other


const outerDiv = document.getElementById("outerDiv");
const innerDiv = document.getElementById("innerDiv");


outerDiv.addEventListener("click", changeBlue, true); //true for preference if a div inside div
innerDiv.addEventListener("click", changeBlue);

/*
function changeRed(){
    innerDiv.style.backgroundColor = "red";
}

function changeGreen(){
    innerDiv.style.backgroundColor = "green";
}
*/

function changeBlue(){
    this.style.backgroundColor = "rgb(20, 200, 250)"
    alert(`You click the ${this.id}`);
}