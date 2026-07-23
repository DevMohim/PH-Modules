/*
 * Task 1
 */
const arr = [10, 20, 30, 40];
function sumArr(arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  return sum;
}
console.log(sumArr(arr));

/*
 * Task 2
 */
const numbers = [28, 25, 4, 5, 84, 548, 784];
function findMax(arr) {
  let max = arr[0];
  for (const number of arr) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}
console.log(findMax(numbers));

/*
 * Task 3
 */
const numbers2 = [71, 55, 48, 52, 46, 48, 452];

function findMin(arr) {
  let min = arr[0];
  for (const number of arr) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}
console.log(findMin(numbers2));

/*
 * Task 4
 */
const number3 = [55, 456, 446, 4, 54, 455, 454, 45];

function calculateAvg(arr) {
  let sum = 0;

  for (const number of arr) {
    sum += number;
  }
  const avg = sum / arr.length;
  return avg;
}
console.log(parseFloat(calculateAvg(number3).toFixed(1)));

/*
 * Task 5
 */
const numbers4 = [1, 2, 3, 4, 5, 6];

function countEven(arr) {
  let count = 0;

  for (const number of arr) {
    if (number % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countEven(numbers4));

/*
 * Task 6
 */
const numbers5 = [10, 15, 20, 25, 30];

function getEvenNumber(arr) {
  const even = [];
  for (const number of arr) {
    if (number % 2 === 0) {
      even.push(number);
    }
  }
  return even;
}
console.log(getEvenNumber(numbers5));

/*
 * Task 7
 */
const numbers6 = [2, 4, 6, 8];

function findFirstOddNumber(arr) {
  for (const number of arr) {
    if (number % 2 !== 0) {
      return `First odd is  ${number}`;
    }
  }
  return `Noo odd number found`;
}
console.log(findFirstOddNumber(numbers6));

/*
 * Task 8
 */
