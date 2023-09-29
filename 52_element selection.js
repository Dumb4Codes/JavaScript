
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";

let fruits = document.getElementsByName("fruits");
//console.log(fruits[1]);
fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
});

let vegetables = document.getElementsByTagName("li");
vegetables[1].style.backgroundColor = "salmon";

let desserts = document.getElementsByClassName("desserts");
desserts[2].style.backgroundColor = "red";

// query selector by defaut it selects the first element of any group
// query selector uses same tech as css if you want to change background of:
// ID = "#id"
// Class = "".class"
// li = "li"
// for attribute in HTML = "[for]"

let query = document.querySelectorAll("[for]");
query.forEach((element) => {
    element.style.backgroundColor = "lightgreen"
})