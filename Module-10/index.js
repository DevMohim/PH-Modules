// Conceptual Session for Javascript variables, conditionals(if-else, if-else if - else), loop(for, while, do-while) and array

/*
 * Task 1
 */
const numbers = [18, 5, 27, 3, 14, 9];
let min = numbers[0];

for (const number of numbers) {
  if (number < min) {
    min = number;
  }
}
// console.log('Minimum number is ', min); // 3

/*
 * Task 2
 */
const numbers2 = [12, 7, 12, 5, 7, 20, 12];
let count = 0;

for (let num of numbers2) {
  if (num === 12) {
    count++;
  }
}
// console.log(count) // 3

/*
 * Task 3
 */
const numbers3 = [5, 8, 12, 3, 18, 7, 20];
const even = [];
const odd = [];

for (const num of numbers3) {
  if (num % 2 === 0) {
    even.push(num);
  } else {
    odd.push(num);
  }
}
// console.log(even , odd); //[ 8, 12, 18, 20 ] [ 5, 3, 7 ]

/*
 * Task 4
 */
const numbers4 = [10, 20, 30, 40, 50];
const reverseArray = [];

for (const num of numbers4) {
  reverseArray.unshift(num);
}
// console.log(reverseArray); //[ 50, 40, 30, 20, 10 ]

/*
 * Task 5
 */
const numbers5 = [5, 12, 7, 18, 20, 3, 11];
let sumOfEven = 0;

for (const num of numbers5) {
  if (num % 2 === 0) {
    sumOfEven += num;
  }
}
// console.log(sumOfEven); //50

/*
 * Task 6 || very hard
 */
const numbers6 = [5, 8, 5, 12, 8, 20, 3];
const arrayOfDuplicates = [];
const seen = [];

for (const num of numbers6) {
  if (seen.includes(num)) {
    if (!arrayOfDuplicates.includes(num)) {
      arrayOfDuplicates.push(num);
    }
  } else {
    seen.push(num);
  }
}
// console.log(arrayOfDuplicates); // [5,8]

/*
 * Task 7
 */
const numbers7 = [12, 45, 8, 67, 34, 67, 25];
let max = numbers7[0];
let secondMax = numbers7[0];

for (const number of numbers7) {
  if (number > max) {
    secondMax = max;
    max = number;
  } else if (number > secondMax && number !== max) {
    secondMax = number;
  }
}
// console.log(max); //67
// console.log(secondMax);//45

/*
 * Task 8
 */
const numbers8 = [12, 45, 8, 67, 34, 8, 25];
let smallest = Infinity
let secondSmallest = Infinity;

for (const number of numbers8) {
  if (number < smallest) {
    secondSmallest = smallest;
    smallest = number;
  } else if (number < secondSmallest && number !== smallest) {
    secondSmallest = number;
  }
}
console.log(secondSmallest);
