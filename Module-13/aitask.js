/*
 * Task 1
 */
const arr = [3, -2, 0, 5, -7, 0, 8];

function findPositiveNegative(arr) {
  let countPositive = 0;
  let countNegative = 0;
  let countZero = 0;

  for (let number of arr) {
    if (number === 0) {
      countZero++;
    } else if (number >= 1) {
      countPositive++;
    } else if (number < 0) {
      countNegative++;
    }
  }

  return {
    positive: countPositive,
    Negative: countNegative,
    Zero: countZero,
  };
}

// console.log(findPositiveNegative(arr))

/*
 * Task 2
 */

function reversedString(word) {
  let reversedStr = "";

  for ( let i = word.length - 1; i >= 0; i-- ) {
    reversedStr += word[i];
  }
  return reversedStr;
}
console.log(reversedString("Bangladesh"));
