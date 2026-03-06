const name = "Aniket "
const repoCount = 50

// console.log(name + repoCount + " Value")

//String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Aniket")

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
//not make change in the original
console.log(gameName.toLocaleLowerCase());
//pass index 
console.log(gameName.charAt(0));

//start abd end index
const newString = gameName.substring(0,4)
console.log(newString)

//negative start from the last and the 2nd parameter means how many number of character to consider from
const anotherString = gameName.slice(-3, 6)
console.log(anotherString)

const a = "    trim demo   "
console.log(a)
console.log(a.trim())

const url = "https://hitesh.com/aniket%20abc"
//replace the first string with second
console.log(url.replace('%20', '-'))
//check if it present in the given string return boolean
console.log(url.includes('aniket'))
//separator and the limit
console.log(url.split('/',3))