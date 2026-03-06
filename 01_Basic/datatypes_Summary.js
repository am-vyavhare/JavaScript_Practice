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


//*****************************Memory Allocation ************

// Stack (Primitive), Heap(Non-Primitive)

let myName = "Aniket"
//stored in stack
let anotherName = myName
anotherName = "Don"

console.log(myName)
console.log(anotherName)

//stored in heap
let user1 = {
    email : "abc@gmail.com",
    upi : "amv@ybl"
}

//now point to the same memory now
let user2 = user1

user2.email = "xyz@gmail.com"

console.log(user1.email)
console.log(user2.email)
//both outputs xyz@gmail.com


 