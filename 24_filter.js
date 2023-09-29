// array.filter() = creates a new array with all elements
//                  that pass the test provided by a function

let age = [18, 17, 16, 22, 27, 90];
let adults = age.filter(checkAge);

console.log(adults);

function checkAge(val){
    return val >= 18;
}
