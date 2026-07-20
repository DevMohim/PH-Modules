/*
 * Task 1
 */
const numbers = [5, 65, 4, 1, 4, 4, 541, 547, 65, 15, 465, 45, 5, 45, 65, 74];
const newArr = [];

for (const number of numbers) {
  if (!newArr.includes(number)) {
    newArr.push(number);
  }
}
console.log(newArr);

/*
 * Task 2
 */
const mixed = [10, "apple", 25, "banana", 50, "orange"];
const stringArr = [];
const numberArr = [];

for (const item of mixed) {
  if (typeof item === "string") {
    stringArr.push(item);
  } else if (typeof item === "number") {
    numberArr.push(item);
  }
}
console.log("Array with only string value", stringArr);
console.log("Array with only number value", numberArr);

/*
 * Task 3
 */
const Numbers = [21, 5, 21, 58, 52, 4, 5, 45];
let max = Numbers[0];
let min = Numbers[0];

for (const number of Numbers) {
  if (number > max) {
    max = number;
  }
  if (number < min) {
    min = number;
  }
}
console.log(max);
console.log(min);

/*
 * Task 4
 */
const nestedArr = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArr.flat(Infinity));

/*
 * Task 5
 */
const num = [2, 3, 4, 5, 1];
const lastItem = num.pop();
num.unshift(lastItem);
console.log(num);
