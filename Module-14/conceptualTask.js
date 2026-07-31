/*
 * Task A-1  find Largest And Smallest
 */
// function for find largest and smallest number
function findLargestAndSmallest(arr) {
  //Validation if input is not an array
  if (!Array.isArray(arr)) {
    return "Invalid";
  }

  //find with only one loop
  let largest = arr[0];
  let smallest = arr[0];
  for (let number of arr) {
    //Validation if there is a other type of input instead number
    if (typeof number !== "number") {
      return "Invalid";
    }

    // Condition for find largest number

    if (number > largest) {
      largest = number;
    }

    // Condition for find smallest number
    if (number < smallest) {
      smallest = number;
    }
  }

  // return final output
  return `Largest : ${largest}
Smallest : ${smallest}`;
}

// Input array
const numbers = [45, 12, 89, 3, 67];
// const numbers = [45, 12, 'money', 3, 67];
// const numbers = 'hello'

// Output
const result = findLargestAndSmallest(numbers);
console.log(result);

/*
 * Task A-2  filter Even Position Words
 */
function filterEvenPositionWords(sentence) {
  //split sentence to make an array
  const partsOfWord = sentence.split(" ");

  // Initialize a empty string to gather even placed word
  let finalSentence = "";

  //loop for get index no
  for (let i = 0; i < partsOfWord.length; i++) {
    //use conditionals for searching even placed word
    if (i % 2 === 0) {
      finalSentence = finalSentence + " " + partsOfWord[i];
    }
  }

  // return the final output
  return finalSentence;
}

// Input a string
const str = "The quick brown fox jumps";

// Output result and keep it into a variable
const results2 = filterEvenPositionWords(str);
console.log(results2);

/*
 * Task A-3   weekly Steps Summary
 */
function weeklyStepsSummary(stepArr) {
  //Validation if input is not an array
  if (!Array.isArray(stepArr)) {
    return "Invalid";
  }

  //for an array for count total steps
  let totalSteps = 0;

  for (let count of stepArr) {
    //Validation for if any value of array is not number
    if (typeof count !== "number") {
      return "Invalid";
    }
    totalSteps += count;
  }

  // condition for reach goal
  let reachedGoal = false;

  if (totalSteps > 50000) {
    reachedGoal = true;
  }

  // make an object and return the object
  const resultObj = { totalSteps, goalReached: reachedGoal };
  return resultObj;
}

const steps = [8000, 7500, 9200, 6000, 10000, 5500, 4000];
// const steps = "hello";
// const steps = [8000, "five hundred", 9200, 6000, 10000, 5500, 4000];
const result3 = weeklyStepsSummary(steps);
console.log(result3);

/*
 * Task  A-4  is Palindrome check
 */
function isPalindrome(str) {
  //Validation for if input string is not string
  if (typeof str !== "string") {
    return "Invalid";
  }

  // Reverse string
  const reversedStr = str.split("").reverse().join("");

  // Condition check for reverse string is equal input str
  if (reversedStr === str) {
    return true;
  }

  return false;
}

console.log(isPalindrome("madam"));
// console.log(isPalindrome(32));
console.log(isPalindrome("hero"));

/*
 * Task A-5   count Vowels in a string
 */
function countVowels(str) {
  //Validation for if input is not string
  if (typeof str !== "string") {
    return "Invalid";
  }

  //Declare vowel in a variable
  const vowels = "aeiou";

  //Set initial vowel count 0, if condition is true we increment vowelCount.
  let vowelCount = 0;

  //Make the input str lowerCase first then split it for make an array
  const splitStr = str.toLowerCase().split("");

  //Use loop in new letter array so we can search letter in vowels using includes method
  for (let letter of splitStr) {
    //Check condition if letter is includes vowel string
    if (vowels.includes(letter)) {
      //We increment vowel 1 by 1 when condition is  true
      vowelCount++;
    }
  }
  return vowelCount;
}

// Input and Output
console.log(countVowels("Hello World"));
// console.log(countVowels(35));

/*
 * Task A-6   remove Duplicates from array
 */
function removeDuplicates(arr) {
  //Validation for if input is not an array
  if (!Array.isArray(arr)) {
    return "Invalid";
  }

  //Set initial a empty array so we can put without duplicates number
  const noDuplicate = [];

  //Use loop for iterate a single number from array and set in a condition
  for (let number of arr) {
    if (!noDuplicate.includes(number)) {
      noDuplicate.push(number);
    }
  }
  return noDuplicate;
}

// Input
const DuplicatesNumbers = [1, 2, 2, 3, 4, 4, 5];

// Output
const withoutDuplicate = removeDuplicates(DuplicatesNumbers);
console.log(withoutDuplicate);

/*
 * Task A-7    generate Student Report Card
 */
function generateReportCard(student) {
  //Validation for if input is not an object
  if (typeof student !== "object" || Array.isArray(student)) {
    return "Invalid";
  }

  // Validation for if subject number is not a number
  if (
    typeof student.bangla !== "number" ||
    typeof student.english !== "number" ||
    typeof student.math !== "number"
  ) {
    return "Invalid";
  }

  // Calculate student total marks
  const totalMarks = student.bangla + student.english + student.math;

  // Calculate average marks
  const avg = totalMarks / 3;

  // Calculate grade point average
  let grade;
  if (avg <= 100 && avg >= 90) {
    grade = "A+";
  } else if (avg >= 80) {
    grade = "A";
  } else if (avg >= 70) {
    grade = "B";
  } else {
    grade = "F";
  }

  const newObj = {
    name: student.name,
    total: totalMarks,
    average: avg,
    grade,
  };
  return newObj;
}
const studentObj = { name: "Ayan", bangla: 78, english: 85, math: 92 };
// const studentObj = [{ name: "Ayan", bangla: 78, english: 85, math: 92 }];
// const studentObj = { name: "Ayan", bangla: 'seventy eight', english: 85, math: 92 };
const studentCard = generateReportCard(studentObj);
console.log(studentCard);

/*
 * Task 8 -> Leap Year Check
 */
function isLeapYear(year) {
  // Validation for if input is not a number
  if (typeof year !== "number") {
    return "Invalid";
  }
  //Condition for check leap year
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  }

  return false;
}

// Input and Output
console.log(isLeapYear(2024));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
console.log(isLeapYear("two thousand"));

/*
 * Task 9  -> Email Domain Analyzer
 */
function analyzeEmailDomains(text) {

   // Validation for if input is not a string
   if(typeof text !== 'string'){
      return 'Invalid'
   }

   //Split the input for seperate the sentences into word
  const splitText = text.split(" ");

  //count email
  let count = 0;

  // Initial longest domain is empty
  let longestDomain = '';

  //Using loop for count email and find longest domain
  for (let word of splitText) {
    if (word.includes("@")) {
      count++;

      const splitDomain = word.split("@")[1]
      if(splitDomain.length > longestDomain.length){
         longestDomain = splitDomain
      }
    }
  }
  const newObj = {emailCount : count , longestDomain }

  return newObj

}

const result4 = analyzeEmailDomains("Contact support@gmail.com admin@yahoo.com info@programminghero.com");
const result5 = analyzeEmailDomains("Hello world");
console.log(result4,result5);
