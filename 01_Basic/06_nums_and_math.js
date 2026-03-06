/*
const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
//number of decimal points to be shown after integer
console.log(balance.toFixed(2));

const otherNumber = 235.752
//make the value of given number till precision digits by doing round of 
console.log(otherNumber.toPrecision(3))


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
*/

//+++++++++++++++ Maths ++++++++++++++++//
console.log(Math)
//Object [Math] {}

console.log(Math.abs(-4))
console.log(Math.round(4.4))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.3))

console.log(Math.min(4,3,6,8))
console.log(Math.max(4,3,6,8))

console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.random()*100)

console.log((Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min)