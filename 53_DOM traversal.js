//let element = document.body;
//let child = element.firstElementChild;  (last element is the script link in the body in HTML)
//child.style.backgroundColor = "lightgreen";

//let element = document.querySelector("#vegetables");
//let parent = element.parentElement;
//parent.style.backgroundColor = "lightgreen"

//let element = document.querySelector("#vegetables");
//let sibling = element.nextElementSibling;
//sibling.style.backgroundColor = "lightgreen"

//let element = document.querySelector("#vegetables");
//let child = element.children[1];
//child.style.backgroundColor = "lightgreen";

let element = document.querySelector("#fruits");
let bro = Array.from(element.children);
bro.forEach((child) => {
    child.style.backgroundColor = "lightgreen";
})


// .firstELementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)