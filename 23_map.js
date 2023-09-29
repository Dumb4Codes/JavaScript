//array.map() = executes a provided callback function
//              once for each array element
//              AND creates a new array

/*
let numbers = [1, 2, 3, 4, 5, 6];
let squares = numbers.map(cube);

console.log(squares)

function square(val){
    return Math.pow(val, 2);
}

function cube(val){
    return Math.pow(val, 3);
}
*/

let students = ["spongebob", "squidward", "patrick"];

let capital = students.map(capitalize);
capital.forEach(print);

function capitalize(val){
    return val.toUpperCase();
}

function print(what){
    console.log(what);
}