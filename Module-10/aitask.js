/*
 * Task 1
 */
// const numbers = [12, 8, 5, 20, 15];
// let sum = 0;
// for(let number of numbers){
//    sum += number;
// }
// console.log(sum);

/*
 * Task 2
 */
// const numbers = [10, 25, 7, 18, 42, 3];
// let max = numbers[0];
// for (let number of numbers) {
//    if (number >  max){
//       max = number;
//    }
// }
// console.log(max);


/* 
* Task 3
*/
// const numbers = [10, 25, 7, 18, 42, 3, 16, 9];
// const evenArray = [];
// for (const number of numbers){
//    if(number % 2 === 0){
//       evenArray.push(number);
//    }
// }
// console.log(evenArray.length);


/* 
* Task 4
 */
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

for (const fruit of fruits){
   if(fruit === "Mango"){
      console.log(true);
   }
}


/* 
* Task 5
 */
const numbers = [5, 12, 8, 20, 3, 15];
const newArr = [];

for (const number of numbers){
   if (number > 10){
      newArr.push(number);
   }
}
console.log(newArr)