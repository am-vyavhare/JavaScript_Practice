// Scope is - {} area inside curly braces

let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("Inner a : ",a)
    // var c = 30
}

// console.log(a) -- not defined
// console.log(b) -- not defined
// console.log(c) // print 30

console.log("Outer a",a)

function one(){
    const username = "aniket"

    function two(){
        const website = "yt"
        console.log(username);
    }
    // console.log(website); -- error website is not defined
    two()
}

one()

//+++++++++++++ intresting ++++++++++

//no error function will execute even if defination is below
console.log(addone(5))

function addone(num){
    return num+1
}

//error cannot access 'addTwo' before initialization
console.log(addTwo(5))
//function using variable 
const addTwo = function(num){
    return num + 2
}





