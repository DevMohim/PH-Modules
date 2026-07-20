/*
 * Task 1
 */
for (let i = 1; i <= 5; i++) {
  console.log("Hello");
}

/*
 * Task 2
 */
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/*
 * Task 3
 */
let count = 10;
while (count >= 1) {
  console.log("Value of count", count);
  count--;
}

/*
 * Task 4
 */
let initialMessage = 1;
while (initialMessage <= 7) {
  console.log("Loop " , initialMessage);
  initialMessage++;
}

/*
 * Task 5
 */
for (let i = 2; i <= 30; i += 2) {
  console.log("The number is ", i);
}

/*
 * Task 6
 */
let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum = sum + i;
}
console.log("The result is ", sum);

/*
 * Task 7
 */
let number = 7;
for (let i = 1; i <= 10; i++) {
  console.log(number, "X", i, " = ", number * i);
}

/*
 * Task 8
 */
for (let count = 20; count >= 1; count--) {
  console.log("Count is ", count);
}

/*
 * Task 9
 */
let sumOfEven = 0;
for (let i = 2; i <= 50; i += 2) {
  sumOfEven = sumOfEven + i;
}
console.log("Sum of Even between 2 to 50 is", sumOfEven);

/*
 * Task 10
 */
for (let i = 1; i <= 50; i++) {
  if (i >= 30) {
    break;
  }
  console.log(i);
}

/*
 * Task 11
 */
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}

/*
 * Task 12
 */
let index = 1;
do {
  console.log("index", index);
  index++;
} while (index <= 5);

/* Modification */
let ind = 1;
do {
  console.log("index", ind);
  ind++;
} while (index > 10);



/* 
* Task 13
*/

// For Loop
for (let i = 1; i <=5; i++){
 console.log(i)
}

// While Loop
let number1 = 1;
while(number1 <= 5){
   console.log(number1);
   number1++
}

// Do-While Loop
let number2 = 1;
do{
   console.log(number2);
   number2++
}while(number2 <= 5);



/* 
* Task 14
*/
for(let i = 1;  i <= 100 ;  i++){
   if( i % 5 === 0){
      continue;
   }
   if(i > 40){
      break;
   }
   console.log(i);
}