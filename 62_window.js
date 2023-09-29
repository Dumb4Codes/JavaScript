// window = interface used to talk to the web browser
//          the DOM is a property of the window.

//console.dir(window);
//console.log(window.innerWidth);
//console.log(window.innerHeight);
//console.log(window.outerWidth);
//console.log(window.outerHeight);

//console.log(window.scrollX); //used on div element with width and height of 1000px
//console.log(window.scrollY);

//console.log(window.location.href);
//window.location.href = "https://google.com";
//console.log(window.location.hostname);
//console.log(window.location.pathname);

const myButton = document.querySelector("#myButton");

//myButton.addEventListener("click", () => window.open("https://google.com"));
myButton.addEventListener("click", () => window.close());

//window.alert("hello!");
//window.confirm("Press OK to OK");
let age = window.prompt("enter age");
console.log(age);
if(age<18){
    document.write("what's up kid... ")
}
else{
    document.write("You want to see some good stuff huh");
}
