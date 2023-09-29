// ternary operator = Shortcut for an 'if/else statement'
//                    Takes 3 operands

//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False 

let adult = checkAge(17);

console.log(adult);

function checkAge(age){
    return age >= 18 ? true : false;
}

checkWinner(false);

function checkWinner(win){
    win ? console.log("YOU WIN") : console.log("YOU LOSE");
}

let name = "Bro";