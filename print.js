// Extract the last four characters from the string below "Extravaganza"

let text="extravaganza"
let result = text.substring(8,12);
console.log({result})

// Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"
let food="The quick fox jumped over the lazy dog";
food= food.slice(0,4)+"eat"+food.slice(4);
console.log(food)






// Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
const story1="the quick brown fox jumps over the lazy dog"
    console.log(story1.split("the").length-1);
    console.log(story1.split("brown").length-1);









// Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
let index=" The pipils are reading in the libray "
let results=text.indexOf(are);
console.log({results});







// Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"
let String="wonderful";
let reading =String.toUpperCase();
console.log({reading})
 
let story="amazing";
let outcome=story.toLowerCase();
console.log({outcome})

let string2="UndERNeath";
let result2=string2.toLowerCase();
console.log({result2})

 


