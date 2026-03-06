// Dates

let myDate = new Date()
//current date of system and default timezone time
console.log(myDate);

//different methods give date in different format 
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
//Date object will return 
console.log(typeof myDate)

//manual date object creation with specific date
let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString())

//with time
let myCreatedDate_1 = new Date(2023,0,23,11,1)
console.log(myCreatedDate_1.toLocaleString())

//with - String
let myCreatedDate_2 = new Date("01-14-2023")
console.log(myCreatedDate_2.toLocaleString())

//current time in the milliseconds
let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

//current time
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);

//month start from the 0
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

//__th day of week suppose wednesday then 3
console.log(newDate.getDay());

//customize date
newDate.toLocaleString('default',{
    weekday:"long"
})

console.log(newDate.toString())



