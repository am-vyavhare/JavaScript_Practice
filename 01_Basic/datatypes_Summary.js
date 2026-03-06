//JavaScript is dynamically typed language we dont define datatype while declaring
//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// add n at last to make it and Bigint
const BigNumber = 342345346345345n;

//symbol - to make any value unique then symbol used - example if we have same button component used multiple places so place it in the symbol to make it unique

//return symbol datatype
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

//Reference (Non Primitive)

//Array , Objects, Functions

const heros = ["Shatiman", "Shivaji Maharaj", "Bahubali"]
let myObj = {
    name: "Aniket",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof BigNumber) //bigint
console.log(typeof heros)   //object
console.log(typeof myFunction)  //function