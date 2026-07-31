/*
 * Task B-1 Sum of digit in an array
 */
function sumOfDigit(digit) {
  // Validation for if input is not an array.
  if (typeof digit !== "number") {
    return "Invalid";
  }

  //make digit to an array
  const digitArr = digit.toString().split("");

  //initial sum is o and it is re-assignable.
  let sum = 0;
  for (let number of digitArr) {
    sum += Number(number);
  }

  return sum;
}
console.log(sumOfDigit(1234));
console.log(sumOfDigit(54321));

/*
 * Task B-2  track every total in new array
 */
function runningTotal(amounts) {
  // Validation for if input is not an array
  if (!Array.isArray(amounts)) {
    return "Invalid";
  }

  //Declare a variable for keep track of sum
  const sumArr = [];

  //Set initial total as 0
  let total = 0;

  // Use for...of loop into array for calculating total
  for (let amount of amounts) {
    total += amount;

    // Every time when total re-assign . push the total in track array
    sumArr.push(total);
  }
  return sumArr;
}

// Input and Output
console.log(runningTotal([100, 50, 25]));

/*
 * Task B-3 reverse Each Word from a string
 */
function reverseEachWord(sentence) {
  //Validation for if input is not a string
  if (typeof sentence !== "string") {
    return "Invalid";
  }

  //Split the sentence by space and make it an array
  const splitBySpaceArray = sentence.split(" ");

  //Initialized a variable for keep reverse sentence
  let reversedSentence = "";

  //Using loop for separate every word from split Array
  for (let word of splitBySpaceArray) {
    const reversedWord = word.split("").reverse().join(""); //split every word,then reverse ,then join it and make it a string.

    //update reversedSentence with a space and reversedWord
    reversedSentence += " " + reversedWord;
  }
  return reversedSentence;
}

console.log(reverseEachWord("Hero is strong")); //→ 'oreH si gnorts'

/*
 * Task B-4 Find second largest number in an array.
 */
function secondLargest(arr) {
  //Validation for if input is not an array
  if (!Array.isArray(arr)) {
    return "Invalid";
  }
  let largest = arr[0];
  let secondLargest = arr[0];

  for (const number of arr) {
    //Validation if element of array in not a number
    if (typeof number !== "number") {
      return "Invalid";
    }

    if (number > largest) {
      secondLargest = largest;
      largest = number;
    } else if (number > secondLargest && secondLargest !== largest) {
      secondLargest = number;
    }
  }
  return secondLargest;
}
console.log(secondLargest([45, 12, 89, 3, 67]));

/*
 * Task B-5
 */
function countEvenOdd(arr) {
  //Validation for if input is not an array
  if (!Array.isArray(arr)) {
    return "Invalid";
  }
  const result = {
    even: 0,
    odd: 0,
  };

  for (let number of arr) {
    //Validation for if type of element is not number
    if (typeof number !== "number") {
      return "Invalid";
    }
    if (number % 2 === 0) {
      result.even++;
    } else {
      result.odd++;
    }
  }
  const newObj = { even: result.even, odd: result.odd };
  return newObj;
}
console.log(countEvenOdd([1, 2, 3, 4, 5]));

/*
 * Task B-6
 */
function generateSalarySlip(employee) {
  // Validation for if salary,bonus and tax is not a number
  if (
    typeof employee.basicSalary !== "number" ||
    typeof employee.bonus !== "number" ||
    typeof employee.tax !== "number"
  ) {
    return "Invalid";
  }

  const netSalary = employee.basicSalary + employee.bonus - employee.tax;

  const newObj = { name: employee.name, netSalary };
  return newObj;
}
const employee = { name: "Karim", basicSalary: 30000, bonus: 5000, tax: 2000 };
console.log(generateSalarySlip(employee));

/*
 * Task B-7
 */
function charFrequency(str) {
  //Validation for if input is not a string
  if (typeof str !== "string") {
    return "Invalid";
  }

  const charCount = {};

  const arrayOfStr = str.split("");

  for (let char of arrayOfStr) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}
console.log(charFrequency("hero"));
console.log(charFrequency("hello"));

/*
 * Task B-8
 */
function verifyCartTotal(itemPrices, displayedTotal) {
  //Validation if prices is not an array
  if (!Array.isArray(itemPrices || typeof displayedTotal !== "number")) {
    return "Invalid";
  }

  let totalPrice = 0;
  for (let price of itemPrices) {
    // Validation for if any price in itemPrices is not a number
    if (typeof price !== "number") {
      return "Invalid";
    }

    // Calculating
    totalPrice += price;
  }

  return totalPrice === displayedTotal;
}

// Inputs & Output
const prices = [250, 400, 150];
// const prices = [250,true,150]
//const prices = "hello"
const displayedTotal = 800;

const result = verifyCartTotal(prices, displayedTotal);
console.log(result);
