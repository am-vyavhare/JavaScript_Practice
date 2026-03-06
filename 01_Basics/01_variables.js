//variable valus is not changed - constant values 
const accountId = 1234
//IT IS SCOPED INSIDE THE {} BRACES INSIDE IT IS DECLARED AND REDECLATION WILL GIVE ERROR 
let accountEmail = "amvyavhare@gmail.com"
//Prefer not to use var - because of issue in block scope and functional scope
//IT IS LIKE A GLOBAL VARIABLE BUT DECALRED INSIDE THE FUNCTION THEN LIMITED TO THAT , HAVE DEFAULT VALUE undefined 
var accountPassword = "12345"
//possible but dont use
accountCity = "Jaipur"
//not assigned variable contains value undefined
let accountState;

// accountId = 1221 - not valid

accountEmail = "abc@gmail.com"
accountPassword = "123"
accountCity = "Bengalure"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword ,accountCity, accountState])