// spread operator = allows an iterable such as an 
// ...               array or string to be expanded 
//                   in places where zero or more 
//                   arguements are expected
//                   (unpacks the elements)

let string = "Dumb whiskey";

let numbers = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximum = Math.max(...numbers);

console.log(maximum)
console.log(...string);

let class1 = ["spongebob", "patrick", "sandy"];
let class2 = ["squidward", "Mr.krabs", "plankton"];

class2.push(...class1);
console.log(...class2);

