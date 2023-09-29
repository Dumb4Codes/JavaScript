// slice() = extracts a section of a string
//           and returns it as a new string,
//           without modifying the original string

let fullName = "Dumb Whiskey";
let firstName;
let lastName;

//firstName = fullName.slice(0,4); //dosen't include the last index tho
//lastName = fullName.slice(5); //if no second value = copies everything until the end of the string 

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ")+1);

console.log("First Name: "+firstName);
console.log("Last Name: "+lastName);