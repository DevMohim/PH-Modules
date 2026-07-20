

/* Task 1 */
const price1 = 700;
const price2 = 500;

// console.log(price1 == price2);

// console.log(price1 === price2);

// console.log(price1 != price2);

// console.log(price1 !== price2)

// console.log(price1 > price2);

// console.log(price1 < price2);

// console.log(price1 >= price2);

// console.log(price1 <= price2);

/* Task 2 */
console.log("5" == 5); // True
console.log("5" === 5); // False

/* Task 3 */
const isRaining = false;
if (isRaining) {
  console.log("Take an umbrella");
}

/* Task 4 */
const stock = 0;
if (stock === 0) {
  console.log("Out of stock");
}

/* Task 5 */
const number = 32;
if (number >= 0) {
  console.log("Positive number");
} else {
  console.log("Negative number");
}

/* Task 6 */
const year = 1972;

if (year % 4 === 0) {
  console.log("It is leap year.");
}

/* Task 7 */
const speedInKmh = 120;
if (speedInKmh > 80) {
  console.log("Over Speeding");
} else {
  console.log("Normal Speed");
}

/* Task 8 */
const age = 21;
const hasTicket = true;
if (age > 18 && hasTicket) {
  console.log("Entry Allowed");
}

/* Task 9 */
const isWeekend = true;
const isHoliday = false;

if (isHoliday || isWeekend) {
  console.log("No work today");
}

/*
 * Task 10
 */

const userName = "mohim";
const passWord = "200122";

if (userName === "mohim" && passWord === "200122") {
  console.log("Login successful");
}

/*
 * Task 11
 */
const mark = 76;

if (mark >= 80) {
  console.log("A+");
} else if (mark >= 70) {
  console.log("A");
} else if (mark >= 60) {
  console.log("B");
} else if (mark >= 50) {
  console.log("C");
} else {
  console.log("F");
}

/*
 * Task 12
 */
const bmi = 23.5;
if (bmi >= 25) {
  console.log("Obese");
} else if (bmi >= 24.9) {
  console.log("Overweight");
} else if (bmi >= 18.5) {
  console.log("Normal");
} else {
  console.log("Underweight");
}

/*
 * Task 13
 */
const numberOfMonth = 6;
if (
  numberOfMonth === 10 ||
  numberOfMonth === 11 ||
  numberOfMonth === 1 ||
  numberOfMonth === 2
) {
  console.log("Winter");
} else if (
  numberOfMonth === 3 ||
  numberOfMonth === 4 ||
  numberOfMonth === 5 ||
  numberOfMonth === 6
) {
  console.log("Summer");
} else {
  console.log("Moonsoon");
}

/*
 * Task 14
 */
const aage = 17;
const hasID = true;

if (aage >= 18) {
  if (hasID) {
    console.log("You are eligible to vote");
  }
} else {
  console.log("You are not eligible to vote");
}

/*
 * Task 15
 */
const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Admin Dashboard");
  } else {
    console.log("User Dashboard");
  }
} else {
  console.log("Please Log in first");
}

/*
 * Task 16
 */
const num = 15;
num % 2 === 0 ? console.log("Even number") : console.log("Odd number");

/*
 * Task 17
 */

const boyos = 24;
boyos >= 18 ? console.log("Adult") : console.log("Minor");

/*
 * Task 18
 */
const price = 1540;
price > 1000 ? console.log("Expensive") : console.log("Affordable");

/*
 * Task 19
 */
const hasPermission = false;

!hasPermission ? console.log("Access denied") : console.log("Access Granted");

/*
 * Task 20
 */
const isOnline = false;
if (!isOnline) {
  console.log("User is offline");
}

/*
--------------------------------------------
*        Big Problem solve by Condition
--------------------------------------------
*/

/*
 * Task 21
 */
let totalPrice = 1500;
const isMember = true;

if (totalPrice > 1000 && isMember) {
  const discount = 20;
  const payablePrice = totalPrice - (totalPrice * discount) / 100;
  console.log(`Your payable price is ${payablePrice} BDT`);
} else if (totalPrice > 1000 && !isMember) {
  const discount = 10;
  const payablePrice = totalPrice - (totalPrice * discount) / 100;
  console.log(`Your payable price is ${payablePrice} BDT`);
} else {
  console.log(`Please pay your full Amount`);
}

/*
 * Task 22
 */
const usersName = "Mohim";
const password = "mohim@714";
const role = "admin";

if (usersName === "Mohim" && password === "mohim@714") {
  if (role === "admin") {
    console.log("Show admin dashboard");
  } else {
    console.log("Show user dashboard");
  }
} else {
  console.log("Login first.");
}
