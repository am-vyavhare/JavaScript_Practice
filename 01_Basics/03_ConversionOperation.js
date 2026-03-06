/*
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


*/

// ***********************Operations ***************//

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/3)
// console.log(2**2)
// console.log(2%3)

let str1 = "hello "
let str2 = "aniket"

let str3 = str1 + str2
console.log(str3);

//if string first then all string
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
//if number first then addition then string concate
console.log(1 + 2 + "2")

//output 1
console.log(+true)
//output 0 empty string
console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);