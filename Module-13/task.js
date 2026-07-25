/*
 * Task 2A
 */
// Input: a number
// Output: "Hot", "Cold", or "Normal"
// Returns: a string

function checkTemperature(temp) {
  if (temp >= 30) {
    return "Hot";
  } else if (temp <= 15) {
    return "Cold";
  } else {
    return "Normal";
  }
}

// console.log(checkTemperature(35)); // Expected: "Hot"
// console.log(checkTemperature(10)); // Expected: "Cold"
// console.log(checkTemperature(20)); // Expected: "Normal"

/*
 * Task 2B
 */
// Input: a number
// Output: the number with digits reversed
// Returns: a number

function reverseNumber(num) {
  let str = num.toString();
  let reversedNum = str.split("").reverse().join("");
  return reversedNum;
}

// console.log(reverseNumber(1234)); // Expected: 4321
// console.log(reverseNumber(7)); // Expected: 7

/*
 * Task 3A
 */
// Input: a number
// Output: product of its digits
// Returns: a number

function productOfDigits(num) {
  let str = num.toString();
  let total = 1;
  for (let num of str) {
    total = total * num;
  }
  return total;
}

// console.log(productOfDigits(123)); // Expected: 6
// console.log(productOfDigits(4040)); // Expected: 0

/*
 * Task 3B
 */
// Input: a number
// Output: array of odd numbers from 1 to n
// Returns: an array

function getOddNumbers(n) {
  let odds = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      odds.push(i);
    }
  }
  return odds;
}

// console.log(getOddNumbers(10));
// Expected: [1, 3, 5, 7, 9]

/*
 * Task 4A
 */
// Input: a string (lowercase letters only)
// Output: count of vowels
// Returns: a number

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels("javascript")); // Expected: 3

/*
 * Task 4B
 */
// Input: a string
// Output: the string without its first and last character
// Returns: a string

function removeFirstAndLast(str) {
  let result = str.slice(1, str.length - 1);
  return result;
}

// console.log(removeFirstAndLast("hello")); // Expected: "ell"
// console.log(removeFirstAndLast("javascript")); // Expected: "avascrip"

/*
 * Task 5A
 */
// Input: a string
// Output: true or false
// Returns: a boolean

function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");

  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
}
// console.log(isPalindrome("level")); // Expected: true
// console.log(isPalindrome("hello")); // Expected: false

/*
 * Task 5B
 */
// Input: a sentence (string)
// Output: the shortest word
// Returns: a string

function findShortestWord(sentence) {
  let words = sentence.split(" ");
  let shortest = words[0];

  for (let word of words) {
    if (word.length < shortest.length) {
      shortest = word;
    }
  }
  return shortest;
}

// console.log(findShortestWord("JavaScript is a fun language")); // Expected: "a"

/*
 * Task 6A
 */
// Input: an array of numbers
// Output: the second smallest number
// Returns: a number

function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let number of numbers) {
    if (number < smallest) {
      secondSmallest = smallest
      smallest = number;
    }
    else if(number < secondSmallest && number !== smallest ){
    secondSmallest = number
    }
  }
  return secondSmallest;
}

// console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8


/* 
* Task 6B
 */
// Input: an array of numbers
// Output: how many numbers are divisible by 3
// Returns: a number
 
function countMultiplesOfThree(numbers) {
  let count = 0;
  for(let number of numbers){
    if( number % 3 === 0){
      count ++
    }
  }
  return count;
}
 
// console.log(countMultiplesOfThree([3, 4, 6, 7, 9, 10])); // Expected: 3


/* 
* Task 7A
 */
// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number
 
function averageOfArray(numbers) {
  let total = 0;
  let count = 0
  for (let number of numbers){
    total += number;
    count++
  }
 total  = total / count
  return total;
}
// console.log(averageOfArray([2, 4, 6])); // Expected: 4


/* 
* Task 7B
 */
// Input: an array of numbers
// Output: array with only even numbers
// Returns: an array
 
function keepEvenNumbers(numbers) {
  let result = [];
  for(let number of numbers){
    if(number % 2 === 0){
      result.push(number)
    }
  }
  return result;
}
 
// console.log(keepEvenNumbers([3, -5, 8, -1, 0])); // Expected: [8, 0]


/* 
* Task 8A
 */
// Input: an object
// Output: array of the object's keys
// Returns: an array
 
function listKeys(obj) {
  let keys = [];
  for(let key in obj){
    keys.push(key)
  }
  return keys;
}
 
// console.log(listKeys({ name: "Sam", age: 25, city: "Dhaka" }));
// Expected: ["name", "age", "city"]

