//array.reduce() = reduces an array to a single value
//Ex. best use for sum up the values of an array

let prices = [5, 10, 15, 20, 25, 30];
let total = prices.reduce(checkOut);

console.log(`Your total is: $${total}`);

function checkOut(total, element){
    return total + element;
}