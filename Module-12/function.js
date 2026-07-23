/*
 * Task 1
 */
function addNumber(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
console.log(addNumber(5, 7)); // 12

/*
 * Task 2
 */
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkEvenOdd(5)); // Odd
console.log(checkEvenOdd(8)); // Even

/*
 * Task 3
 */
function findLargest(num1, num2) {
  if (num1 > num2) {
    return `The largest number is ${num1}`;
  }
  return `The largest number is ${num2}`;
}
console.log(findLargest(45, 78)); // 78
console.log(findLargest(120, 55)); // 120

/*
 * Task 4
 */
function calculateDiscount(price, discountInPercentage) {
  const discount = (price * discountInPercentage) / 100;
  const priceAfterDiscount = price - discount;

  return priceAfterDiscount;
}
console.log(calculateDiscount(1000, 20)); // 800
console.log(calculateDiscount(500, 10));  // 450


/*
 * Task 5
 */
function getGrade(marks){

   if (marks >= 80 && marks <= 100) {
     return "A+";
   } else if (marks >= 70 && marks < 80) {
     return "A";
   } else if (marks >= 60 && marks < 70) {
     return "A-";
   } else if (marks >= 50 && marks < 60) {
     return "B";
   } else if (marks >= 40 && marks < 50) {
     return "C";
   } else if (marks >= 33 && marks < 40) {
     return "D";
   } else {
      return 'F'
   }
}
console.log(getGrade(85)); // A+
console.log(getGrade(76)); // A
console.log(getGrade(63)); // A-
console.log(getGrade(51)); // B
console.log(getGrade(44)); // C
console.log(getGrade(35)); // D
console.log(getGrade(20)); // F