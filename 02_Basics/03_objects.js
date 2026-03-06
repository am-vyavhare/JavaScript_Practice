//Singleton
//object.create()  - this create the singleton object using the constructor method



//Object literals
const mysymbol = Symbol('key1')

const JsUser = {
    name : "Aniket",
    "full name":"Aniket Mahesh Vyavhare",
    [mysymbol]:"mykey1",    //symbols are declared inside the object like that 
    age : 21,
    location : "bhusawal",
    email: "aniket@google.com",
    isLoggedIn : false,
    lastLoginDays:["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])

// we cannot access full name using the . dot operator like that 
// console.log(JsUser.full name);

console.log(JsUser["full name"]);
//new way to use symbol
console.log(JsUser[mysymbol])

console.log(JsUser);

//after freeze you cannot update the object data 
// Object.freeze(JsUser)
//dont throw error but value wont update
JsUser.age = 23;
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())



