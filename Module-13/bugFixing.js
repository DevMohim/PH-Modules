// Task 1
/* function findLargest(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    // i <= arr.length  0 1 2 3

    if (arr[i] > largest) {
      //arr[i] < largest; -5 -2 -10 -1
      largest = arr[i];
    }
  }

  return largest;
}

const numbers = [-5, -2, -10, -1];
console.log(findLargest(numbers));
*/

//Task 1
/* function countEven(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}

const numbers = [2, 5, 8, 11, 14, 17];
console.log(countEven(numbers));
*/

// Task 3
/* function findAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let average = sum / arr.length;

  return average.toFixed(2);
}

const numbers = [10, 20, 30, 40];
console.log(findAverage(numbers)); */

//Task 4
/* function calculateTotal(cart) {
  let total = 0;

  for (let item of cart) {
    total += (item.price * item.quantity);
  }

  return total;
}

const cart = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 1000, quantity: 2 },
  { name: "Keyboard", price: 3000, quantity: 1 },
];

console.log(calculateTotal(cart)); */

// Task 5
/* function findStudent(students, name) {
  for (let i = 0; i < students.length; i++) {
    if ((students[i].name === name)) {
      return students[i];
    }
  }

  return null;
}

const students = [
  { name: "Rahim", age: 20 },
  { name: "Karim", age: 22 },
  { name: "Sakib", age: 21 },
];

console.log(findStudent(students, "Karim"));
*/

// Task 6
/*  function getExpensiveProducts(products) {
  let expensive = [];

  for (let product of products) {
    if (product.price > 5000) {
      expensive.push(product)
    }
  }

  return expensive;
}

const products = [
  { name: "Phone", price: 20000 },
  { name: "Mouse", price: 1000 },
  { name: "Monitor", price: 8000 },
  { name: "Keyboard", price: 6000 },
];

console.log(getExpensiveProducts(products));
*/

// Task 7
/* function calculateAverage(marks) {
  let total = 0;

  for (let mark of marks) {
    total += mark;
  }

  let average = total / marks.length;

  return average;
}

const marks = [80, 90, 70, 60];

console.log(calculateAverage(marks));
*/

// Task 8
/* function countNames(names, target) {
  let count = 0;

  for (let name of names) {
    if ((name === target)) {
      count++;
    }
  }

  return count;
}

const names = ["Rahim", "Karim", "Rahim", "Sakib", "Rahim"];

console.log(countNames(names, "Rahim")); */

// Task 9
/* function findProduct(products, productName) {
  for (let product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }

  return "Not Found";
}

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 3000 },
];

console.log(findProduct(products, "Phone")); */

// |Task 10
function getAdultUsers(users) {
  let adults = [];

  for (let user of users) {
    if (user.age >= 18) {
      adults.push(user.name);
    }
  }

  return adults;
}

const users = [
  { name: "Rahim", age: 17 },
  { name: "Karim", age: 20 },
  { name: "Sakib", age: 15 },
  { name: "Hasan", age: 25 },
];

console.log(getAdultUsers(users));


/*
* Type check
*/
// const student = {
//   name : 'mohim'
// }
// const array =[2,4,6,8]
// console.log(typeof null == undefined);
// console.log(typeof undefined)
// console.log(typeof student)
// console.log(typeof array)
// console.log(typeof 'Object')
// console.log(typeof 12445)
// console.log(typeof true)