//nested functions = Functions inside other functions.
//                   Outer functions have access to inner functions
//                   Inner functions are "hidden" from outside
//                   used in closures

let username = "Whiskey";
let userInbox = 0;

login();

function login(){
    displayName();
    displayInbox();

    function displayName(){
        console.log(`Welcome ${username}`);
    }

    function displayInbox(){
        console.log(`You have ${userInbox} messages`)
    }
}

