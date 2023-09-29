// callback = a function passed as an argument
//            to another function.

//  Ensures that a function is not going 
//  to run before a task is completed.
//  Helps us develop asynchronous code.
//  (When one function has to wait for another function)
//  that helps us avoid errors and potential problems.
//  Ex. Wait for a file to load

sum(2, 3, displayDOM);

function sum(x, y, what){
    let result = x + y;
    what(result);
}

function displayDOM(add){
    console.log(add);
}