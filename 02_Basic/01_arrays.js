//Array 
 
const arr = [1,2,3,4,5,6]
console.log(arr)

//access element via index
console.log(arr[0])

const arr2 = new Array(1,2,3,4,5,6,7)
console.log(arr2)

//Object type
console.log(typeof arr2)

//Array Methods

//add the element at the end of the array
arr.push(9)
//remove the last value
arr.pop()
console.log(arr)

//add the element at the first position and shift the all elements to right
arr.unshift(45)
console.log(arr)
//shift() - similarly remove the element from the start
arr.shift()
console.log(arr)

//check if element exist
console.log(arr.includes(2))
//return index of the number
console.log(arr.indexOf(2))

//join - Return the array elements as a comma seprated string
const newarr = arr.join()
console.log(arr)
console.log(newarr)
console.log(typeof newarr)

//slice , splice
console.log("A", arr);
//original not change just the slice is returned end index exclusive
const mynewarr1 = arr.slice(1,3)
console.log(mynewarr1);
console.log("B", arr);

//update the original array by removing the mensioned splice part , end index inclusive
const mynewarr2 = arr.splice(1,3)
console.log(mynewarr2);
console.log("C", arr);
