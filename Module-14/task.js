/* 
* Task 1 
*/

// 1
// Bug type : syntax error
function sayHi(name) {
   // console.log("Hi, " + name  // it is a syntax error and there is no bracket end
   console.log("Hi, " + name ) // solution
}
 
sayHi("Mira");

// 2
// Bug type : type error
let word = "hello";
// console.log(word.toUppercase()); // c is small letter but it should be capital letter
console.log(word.toUpperCase()); // solution


// 3
// Bug type : logical error
function square(num) {
//   return num + num; // wrong with operator . it should be *
  return num * num; // solution
}
 
console.log(square(4)); // should be 16


/* 
* Task 2 
 */
// Bug: find why score = 50 doesn't return "Pass"
// Bug : logical error because of it should be score >= 50 
 
function checkScore(score) {
  if (score >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}
 
console.log(checkScore(50)); // Expected: "Pass" (currently wrong)
console.log(checkScore(40)); // Expected: "Fail"


/*
* Task 3
 */
// Bug: this loop never ends — find the missing piece
// Bug: logical error  — missing piece is there is no increment 
 
function countUpTo(n) {
  let count = 0;
 
  for (let i = 1; i <= n; i++) { // i++ is missing here
    count = count + 1;
  }
 
  return count;
}
 
console.log(countUpTo(5)); // Expected: 5 (currently freezes/never finishes)



/* 
* Task 4
 */
// Bug: find why this doesn't return the first element
// Bug:  Because of we return 1 index element from array so this doesn't return the first element
 
function getFirstElement(arr) {
  return arr[0]; // arr[1] is not correct , arr[0] is correct
}
 
console.log(getFirstElement([10, 20, 30])); // Expected: 10 (currently returns 20)


/* 
* Task 5
 */
// Bug: find why the result comes out negative
 
function subtract(a, b) {
  return a - b; // we should took a - b
}
 
console.log(subtract(10, 3)); // Expected: 7 (currently returns -7)


/* 
* Task 6
 */
// Bug: explain this line out loud — what does str.length actually equal for ""?
 
function isEmpty(str) {
  if (str.length === 0) { // = is a assign operator , but we need to use comperision operator
    return true;
  } else {
    return false;
  }
}
 
console.log(isEmpty(""));  // Expected: true
console.log(isEmpty("hi")); // Expected: false


/* 
* Task 7
 */
// This code has TWO bugs. Fix one, re-run, then find the next.
 
function getOddNumbers(numbers) {
  let odds = [];
 
  for (let i = 0; i <= numbers.length - 1; i++) { // it should be numbers.lenght-1
    if (numbers[i] % 2 === 1) {                  // it should be comperision that why ===
      odds.push(numbers[i]);
    }
  }
 
  return odds;
}
 
console.log(getOddNumbers([1, 2, 3, 4, 5, 6])); // Expected: [1, 3, 5]



/* 
* Task 8
 */
// Apply the full debugging process to find this bug
 
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
 
  for (let i = 0; i <= str.length-1; i++) { // it should be str.length-1 not str.length
    if (vowels.includes(str[i])) {
      count = count + 1;
    }
  }
 
  return count;
}
 
console.log(countVowels("orange")); // Expected: 3


/* 
* Task 9
 */

// A
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32; // there is only +3 not +32 , that the error
}
 
console.log(celsiusToFahrenheit(0)); // Expected: 32


// B
function sumArray(numbers) {
  let total = 0;
 
  for (let i = 0; i < numbers.length; i++) { // i = 0 for 0 index. it not should be i = 1
    total = total + numbers[i];
  }
 
  return total;
}
 
console.log(sumArray([1, 2, 3, 4])); // Expected: 10


// C
function repeatString(str, times) {
  let result = "";
 
  for (let i = 0; i < times; i++) {
    result += str; // = means reassign or assign and += means increment . that why I use += .
  }
 
  return result;
}
 
console.log(repeatString("ab", 3)); // Expected: "ababab"


// D
function updateAge(person, newAge) {
  person.age = newAge; // person.age = newAge , not person
  return person;
}
 
console.log(updateAge({ name: "Lee", age: 20 }, 21));
// Expected: { name: "Lee", age: 21 }



