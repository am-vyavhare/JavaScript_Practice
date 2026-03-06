let score = null

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
//if it not a pure number then return is Nan
console.log(typeof valueInNumber);

//"33" - 33
//"33abc" - Nan
//true - 1; false - 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1 - true; 0 = false
//" " - false
// "Aniket" - true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber)
console.log(typeof stringNumber)