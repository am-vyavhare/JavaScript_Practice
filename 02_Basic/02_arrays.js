const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//add the array as an single element at the end of array
// marvel_heros.push(dc_heros)

console.log(marvel_heros)

//access via index
console.log(marvel_heros[3])
//access inside array of array 
// console.log(marvel_heros[3][1])

//add all elements of 2nd array as an individual elemetns
allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros)

//...array_name - do the same by spreading the all elements of both array
const all_new_heros = [...marvel_heros,...dc_heros]

console.log(all_new_heros);

const another_array = [1,2,[3,2],7,[345,[32,5,25]],23]

const usable_another_array = another_array.flat(Infinity)

console.log(usable_another_array);

//to check if it is array or not
console.log(Array.isArray("Aniket"))
//make array from the string using - from
console.log(Array.from("Aniket"))
//we need to mension that which parameter to use to make array key or value
console.log(Array.from({name:"Aniket"}))

let score1 = 100;
let score2 = 200;
let score3 = 300;
//creating array from the multiple single variable using "of" method 
console.log(Array.of(score1,score2, score3))


