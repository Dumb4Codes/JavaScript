

/*
const greeting =(username) => console.log(`Whats up ${username}`);

greeting("whiskey");
*/

/* 
//const percent = (x, y) => console.log(x/y * 100);
const percent = (x, y) => x/y * 100;

console.log(`${percent(75,150)}%`)
*/

let grades = [100, 50, 90, 60, 80, 70];

//grades.sort((x,y) => y - x); // descending
grades.sort((x,y) => x - y); // ascending
grades.forEach((val) => console.log(val));
