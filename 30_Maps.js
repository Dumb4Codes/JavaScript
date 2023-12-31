const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);
/*
shoppingCart = 0;

shoppingCart += store.get("t-shirt");
shoppingCart += store.get("jeans");

console.log("$"+ shoppingCart);
*/

store.set("hat", 40);
store.delete("hat");

console.log(store.has("hat"));
console.log(store.size);

store.forEach((value, key) => console.log(`${key} $${value}`));