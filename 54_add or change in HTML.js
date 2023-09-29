//let a = ["bro", "whiskey", "code"];

//a.forEach(a => document.write(a +"<br>"));

//------------------------- add or change element in HTML---------------------------

// .innerHTML = vunnerable to xss 
// .textContent = more secure

//const nameTag = document.createElement("h1");
//nameTag.textContent = window.prompt("Enter your name");
//document.body.append(nameTag);


const myList = document.querySelector("#fruits");
const listItem = document.createElement("li");
listItem.textContent = "mango";
//myList.append(listItem); //adds elements at the end
myList.prepend(listItem);