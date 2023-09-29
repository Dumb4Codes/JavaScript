let username = "whiskey";
let items = 3;
let total = 75;

console.log(`いらっしゃいませ ${username}!`);
console.log(`You have ${items} items in total`);
console.log(`And your total amount is ${75}$`)

let text = 
`いらっしゃいませ ${username}! <br>
You have ${items} items in your cart <br>
And your total amount is ${total}$`

document.getElementById("myLabel").innerHTML = text;