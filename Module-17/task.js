/*
 * Task  1
 */
// const products = [
//   { name: "Laptop", category: "Electronics", price: 800 },
//   { name: "Phone", category: "Electronics", price: 500 },
//   { name: "Shirt", category: "Clothing", price: 40 },
//   { name: "Jeans", category: "Clothing", price: 60 },
//   { name: "Apple", category: "Food", price: 2 },
//   { name: "Bread", category: "Food", price: 3 },
// ];

// function groupByCategory(products) {
// const electronics = products.filter((item) => item.category === "Electronics")
// const clothing = products.filter((item) => item.category === "Clothing")
// const food = products.filter((item) => item.category === "Food")

// return {
//    Electronics : electronics ,
//    Clothing : clothing,
//    Food : food
// }
// }
// console.log(groupByCategory(products))

function groupByCategory(products) {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }

    acc[product.category].push(product);

    return acc;
  }, {});
}
const products = [
  { name: "Laptop", category: "Electronics", price: 800 },
  { name: "Phone", category: "Electronics", price: 500 },
  { name: "Shirt", category: "Clothing", price: 40 },
  { name: "Jeans", category: "Clothing", price: 60 },
  { name: "Apple", category: "Food", price: 2 },
  { name: "Bread", category: "Food", price: 3 },
];
// console.log(groupByCategory(products));

/*
 * Task 2
 */
const students = [
  { name: "Rahim", grade: "A" },
  { name: "Karim", grade: "B" },
  { name: "Sakib", grade: "A" },
  { name: "Nadim", grade: "C" },
  { name: "Rafi", grade: "B" },
  { name: "Tamim", grade: "A" },
];
function countByGrade(students) {
  return students.reduce((acc, student) => {
    if (!acc[student.grade]) {
      acc[student.grade] = 1;
    } else {
      acc[student.grade]++;
    }

    return acc;
  }, {});
}
// console.log(countByGrade(students));

/*
 * Task 3
 */
const sales = [
  { item: "Laptop", category: "Electronics", amount: 1000 },
  { item: "Phone", category: "Electronics", amount: 500 },
  { item: "Shirt", category: "Clothing", amount: 100 },
  { item: "Jeans", category: "Clothing", amount: 200 },
  { item: "Apple", category: "Food", amount: 50 },
];

function totalSalesByCategory(sales) {
  return sales.reduce((acc, sale) => {
    if (!acc[sale.category]) {
      acc[sale.category] = sale.amount;
    } else {
      acc[sale.category] += sale.amount;
    }
    return acc;
  }, {});
}
// console.log(totalSalesByCategory(sales));

/*
 * Task 4
 */
const users = [
  { name: "Rahim", age: 25 },
  { name: "Karim", age: 17 },
  { name: "Sakib", age: 25 },
  { name: "Nadim", age: 30 },
  { name: "Rafi", age: 17 },
  { name: "Tamim", age: 30 },
  { name: "Hasan", age: 25 },
];

function divideByAge(users) {
  return users.reduce((acc, user) => {
    if (!acc[user.age]) {
      acc[user.age] = [];
    }
    acc[user.age].push(user.name);

    return acc;
  }, {});
}
// console.log(divideByAge(users));

/*
 * Task 5
 */
const orders = [
  { customer: "Rahim", amount: 500 },
  { customer: "Karim", amount: 300 },
  { customer: "Rahim", amount: 200 },
  { customer: "Sakib", amount: 700 },
  { customer: "Karim", amount: 100 },
  { customer: "Rahim", amount: 400 },
];

function totalAmountAndOrder(orders) {
  return orders.reduce((acc, order) => {
    if (!acc[order.customer]) {
      acc[order.customer] = {
        totalAmount: order.amount,
        totalOrders: 1,
      };
    } else {
      // acc[order.customer];
      acc[order.customer]["totalAmount"] += order.amount;
      acc[order.customer]["totalOrders"]++;
    }
    return acc;
  }, {});
}
// console.log(totalAmountAndOrder(orders));

/*
 * Task 6
 */
const words = [
  "listen",
  "silent",
  "evil",
  "vile",
  "rat",
  "tar",
  "god",
  "dog",
  "cat",
];

function anagramsTogether(words) {
  return words.reduce((acc, word) => {
    const key = word.split("").sort().join("");

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(word);

    return acc;
  }, {});
}

// console.log(anagramsTogether(words));

/*
 * Task 7
 */
const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Phone", category: "Electronics", price: 800 },
  { name: "TV", category: "Electronics", price: 1500 },
  { name: "Shirt", category: "Clothing", price: 40 },
  { name: "Jacket", category: "Clothing", price: 120 },
  { name: "Jeans", category: "Clothing", price: 80 },
  { name: "Apple", category: "Food", price: 2 },
  { name: "Cake", category: "Food", price: 25 },
  { name: "Pizza", category: "Food", price: 15 },
];

function mostExpensiveByCategory(products) {}

console.log(mostExpensiveByCategory(products))