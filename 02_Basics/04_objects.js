//const tinderUser = new Object() - singleton object

const tinderUser = {} //not singleton object

tinderUser.id = "12f"
tinderUser.name = "Aniket"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

//nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname:{
            firstname:"aniket",
            lastname : "vyavhare"
        }
    }
}
//accessed using the . operator 
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = {obj1, obj2}
//create new object with all properties of given object {} specifies the resultant datatype target
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)

const obj5 = {...obj1, ...obj2}
console.log(obj5)

//array of object generally returned by the db to process
const user = [
    {
    id: 1,
    email:"afd@gmail.com"
    },
    {
    id: 1,
    email:"afd@gmail.com"
    },
    {
    id: 1,
    email:"afd@gmail.com"
    }
]
//complete print
console.log(user)
//accessing the specific elements
console.log(user[1].email)

console.log(tinderUser)

//return the keys from the object
console.log(Object.keys(tinderUser))

//return the values from the object
console.log(Object.values(tinderUser))

//get each property key value pair as an array within object as an array
console.log(Object.entries(tinderUser))

//check if object contais this property
console.log(tinderUser.hasOwnProperty('id'))

const course = {
    coursename: "JS",
    price: "123",
    courseInstructor: "Aniket"
}

console.log(course.courseInstructor);

const {courseInstructor} = course
//giving new name while collecting from the object
const {courseInstructor:insturctor} = course


console.log(courseInstructor)
console.log(insturctor)

//destructuring the objects using {}
//generally used in frameworks to work with the object properties
const navbar = ({company}) =>{
    console.log(`Inside the navbar company name is - ${company}`)
}

navbar({company:"Google"})

//data in the JSON format
// {
//     coursename: "JS",
//     price: "123",
//     courseInstructor: "Aniket"
// }

//data in the array -> object
[
    {},
    {}
]