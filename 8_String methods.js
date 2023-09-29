let username = "Dumb Whiskey";
let phoneNumber = "123-456-7890";

//console.log(username.length);
//console.log(username.charAt(0));
//console.log(username.indexOf("e"));
//console.log(username.lastIndexOf("i"));
//console.log(username.trim()); //get rid of any space before and after the string
//console.log(username.toUpperCase());
//console.log(username.toLowerCase());

phoneNumber = phoneNumber.replaceAll("-","/");

console.log(phoneNumber);