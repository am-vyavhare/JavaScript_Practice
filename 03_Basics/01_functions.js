function funName(){
    console.log("Hello i am function")
}

funName()

//this are parameters
function add(n1, n2){
    // console.log(n1+n2)
    return n1+n2
}

//values passing while calling are arguments 
const result = add(23,12)

console.log("Result is ",result)


//when we dont know the fixed no of parameters then collect it inside array named nums
function calculateCartPrice(...nums){
    return nums
}

console.log(calculateCartPrice(100,200,300))

//first 2 value in var and remaining is in ...nums
function calculateCartPrice(num1, num2, ...nums){
    return nums
}

console.log(calculateCartPrice(100,200,300))

const user = {
    username: "Aniket",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "Aniket",
    price:199
})

const myArray = [200,32,45,234,45]

function returnSecondValue(getarr){
    return getarr[2];
}

console.log(returnSecondValue(myArray))

console.log(returnSecondValue([200,32,45,234,45]))