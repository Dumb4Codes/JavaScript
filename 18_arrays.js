/*
let fruits = ["apple", "mango", "Banana"];

fruits.push("coconut"); //adds a element
fruits.pop(); //removes last element
fruits.unshift("coconut"); //adds element at the begining
fruits.shift(); //removes first element

let length = fruits.length;

let index = fruits.indexOf("banana");


console.log(fruits);
*/

//---------------------------------- types of for() loops -------------------


let prices = [5,10,15,20,25];
let sum = 0;
for(i=0; i<prices.length; i++){
    
    sum += prices[i];
}
console.log(sum);

/*
for(i=prices.length-1; i>=0; i--){
    console.log(prices[i])
}

for(let i of prices){
    console.log(i)
}
*/
//-------------------------------- sorting method ---------------------------

/*
let fruits = ["Banana", "Apple", "Mango"];

//fruits.sort();
fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}
*/

//-------------------------------- 2D array ----------------------------------
/*
let fruits = ["mango", "banana", "apple"];
let vegetables = ["carrots", "onions", "potatoes"];
let shakes = ["badam", "milk", "banana"];

let groceryList = [fruits, vegetables, shakes];


for(let list of groceryList){
    for(let items of list){
        console.log(items);
    }
}
*/
