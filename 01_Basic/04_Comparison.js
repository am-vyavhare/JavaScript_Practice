console.log(2 > 1)
console.log(2 < 1)
console.log(2 >= 1)
console.log(2 <= 1)
console.log(2 != 1)
console.log(2 == 1)
console.log(2 == "2")
console.log(2 === "2")

// String converted to Number then compared so true 
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);  // false because we cannot determine null is converted to - Nan, undefined , or number
console.log(null == 0)  //false null is not converted to 0
console.log(null >= 0)  //true null converts to 0

console.log(undefined > 0);  // false
console.log(undefined == 0)  //false 
console.log(undefined >= 0) // false