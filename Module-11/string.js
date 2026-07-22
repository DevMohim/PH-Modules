/*
 * Task 1.1
 */
let str = "hello";
let arr = ["h", "e", "l", "l", "o"];

console.log(str.length , arr.length) // 5 5 because string have 5 character and array have 5 element 
console.log(str[0], arr[0]) // both answer are same because str first character is h and array first element is h.
// console.log(str.push("!")) // show a error because of we cannot use array push method in a string.String is a immutable.


/* 
* Task 1.2
*/
const language = "JavaScript";
const pet = ['c','a','t'];

console.log(language.split(""));
console.log(pet.join(''));


/* 
* Task 2.1
*/
let name = "JavaScript";
let greet = " Hi there ";

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(greet.trim());


/* 
* Task 3.1
*/
let sentence = "Learning JavaScript is fun!";

console.log(sentence.slice(0,8));
console.log(sentence.slice(-4));


/* 
* Task 3.2
*/
let firstWord = "Hello";
let lastWord = "World";

console.log(firstWord.concat(" ",lastWord));
console.log(firstWord + " " + lastWord);
console.log(`${firstWord} ${lastWord}`);


/* 
* Task 4.1
*/
let Str = 'JavaScript';
console.log(Str.split("").reverse().join(""));


let reversedStr = '';
for ( let i = Str.length - 1 ; i >= 0 ; i--){
   reversedStr += Str[i];
}
console.log(reversedStr);



