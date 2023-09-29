//toLocaleString() = returns a string with a language 
//                   sensitive represetation of this number

// number.toLocaleString(Locale, {options});

//'locale' = specify that language (undefined = defualt set in browser)
//'options' = object with formatting options

let temp = 100;
let myNum = 123456.789;

//myNum = myNum.toLocaleString("en-US"); ;//US english
//myNum = myNum.toLocaleString("hi-IN"); //IND hindi


//myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
myNum = myNum.toLocaleString("hi-IN",{style: "currency", currency:"INR"});
temp = temp.toLocaleString(undefined,{style: "unit", unit: "celsius"});

console.log(myNum);
console.log(temp);