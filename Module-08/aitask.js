/*
 * Task 1
 */
const number = 159;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

/*
 * Task 2
 */

const marks = 76;

if (marks >= 80) {
  console.log("A+");
} else if (marks >= 70) {
  console.log("A");
} else if (marks >= 60) {
  console.log("A-");
} else if (marks >= 50) {
  console.log("B");
} else if (marks >= 40) {
  console.log("C");
} else {
  console.log("Fail");
}

/*
 * Task 3
 */
const year = 1874;

year % 4 === 0 ? console.log("Leap Year") : console.log("Not leap year");

/*
 * Task 4
 */
const username = "admin";
const password = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login successful");
} else {
  console.log("Invalid username or password");
}

/*
 * Task 5
 */
const month = 7;

if (month >= 1 && month <= 12) {
  if (month <= 2 || month === 12) {
    console.log("Winter");
  } else if (month >= 3 && month <= 5) {
    console.log("Summer");
  } else if (month >= 6 && month <= 8) {
    console.log("Rainy");
  } else {
    console.log("Autumn");
  }
} else {
  console.log("Invalid month");
}

/*
 * Task 6
 */
const unit = 180;
let billPerUnit;

if (unit <= 100) {
  billPerUnit = 5;
} else if (unit >= 101 && unit <= 200) {
  billPerUnit = 7;
} else {
  billPerUnit = 10;
}
const totalBill = unit * billPerUnit;
console.log(`Total Bill : ${totalBill}`);

/*
 * Task 7
 */
const weight = 68; // kg
const height = 1.75; // meter

const BMI = weight / (height * height);

if (BMI < 18.5) {
  console.log("Underweight");
} else if (BMI < 25) {
  console.log("Normal");
} else if (BMI < 30) {
  console.log("Overweight");
} else {
  console.log("Obese");
}

/*
 * Task 8
 */
const num1 = 20;
const num2 = 5;
const operator = "*";

if (operator === "/" && num2 === 0) {
  console.log("Cannot divide by zero");
} else if (operator === "+") {
  console.log(num1 + num2);
} else if (operator === "-") {
  console.log(num1 - num2);
} else if (operator === "*") {
  console.log(num1 * num2);
} else if (operator === "/") {
  console.log(num1 / num2);
} else {
  console.log("Invalid operator");
}

/*
 * Task 9
 */
const agee = 15;

if (agee < 5) {
  console.log("Ticket price free");
} else if (agee >= 5 && agee <= 12) {
  console.log("Ticket price is 100 tk");
} else if (agee >= 13 && agee  <= 59) {
  console.log("Ticket price is 250 tk");
} else {
  console.log("Ticket price is 150 tk");
}

/*
 * Task 10
 */
const a = 45;
const b = 90;
const c = 67;

if (a === b && b === c) {
  console.log("Numbers are equal");
} else if (a >= b && a >= c) {
  console.log(`${a} is largest number.`);
} else if (b >= c && b >= a) {
  console.log(`${b} is largest number`);
} else {
  console.log(`${c} is largest number`);
}


/*
 * Task 11
 */
const age = 25;
const salary = 35000;
if (age < 21) {
  console.log("You are not eligible");
} else if (age >= 21 && salary >= 30000) {
  console.log("Loan approve");
} else {
  console.log("Load Rejected");
}

/*
 * Task 12
 */
const totalPrice = 4500;
const isMember = true;

let discount = 0;
if (isMember && totalPrice >= 5000) {
   discount = 20;
} else if (isMember && totalPrice < 5000) {
   discount = 10;
} else if (!isMember && totalPrice >= 5000) {
   discount = 5;
} else {
  console.log("No discount");
}
const totalDiscount = (totalPrice * discount) / 100;
const billAfterDiscount = totalPrice- totalDiscount;
console.log(`Discount : ${totalDiscount}`);
console.log(`Final Bill : ${billAfterDiscount}`);

/*
 * Task 13
 */
const signal = "yellow";

if (signal === "red") {
  console.log("Stop");
} else if (signal === "yellow") {
  console.log("Get Ready");
} else if (signal === "green") {
  console.log("Go");
} else {
  console.log("Invalid Signal");
}

/*
 * Task 14
 */
const attempts = 4;

if (attempts === 1 || attempts === 2) {
  console.log("Try Again");
} else if (attempts === 3) {
  console.log("Last attempts");
} else {
  console.log("Account Locked");
}

/*
 * Task 15
 */
const side1 = 5;
const side2 = 5;
const side3 = 5;

if(side1 === side2 && side2 === side3 && side1 === side3){
  console.log("Equilateral Triangle");
}else if(side1 === side2 || side1 === side3 || side2 === side3){
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}