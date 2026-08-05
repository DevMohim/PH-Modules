/*
 * Task  1
 */
const users = [
  { id: 1, name: "Rahim", age: 25, active: true },
  { id: 2, name: "Karim", age: 17, active: false },
  { id: 3, name: "Sakib", age: 30, active: true },
  { id: 4, name: "Rafi", age: 22, active: false },
  { id: 5, name: "Tamim", age: 28, active: true },
];

const findActiveUsers = (users) => {
  const activeUsers = users
    .filter((user) => user.active)
    .map((user) => user.name);

  return activeUsers;
};
// console.log(findActiveUsers(users))

/*
 * Task 2
 */
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 },
  { id: 4, name: "Monitor", price: 300 },
];

const findFirstExpensiveProduct = (products) => {
  return products.find((product) => product.price < 700);
};
// console.log(findFirstExpensiveProduct(products))

/*
 * Task 3
 */
const employees = [
  { name: "Rahim", salary: 50000 },
  { name: "Karim", salary: 35000 },
  { name: "Sakib", salary: 60000 },
  { name: "Tamim", salary: 28000 },
  { name: "Rafi", salary: 45000 },
];

const highSalaryEmployee = (employees) => {
  return employees
    .filter((employee) => employee.salary >= 40000)
    .map((employee) => employee.name);
};
console.log(highSalaryEmployee(employees));

/*
 * Task 4
 */
const Products = [
  { name: "Laptop", stock: 10 },
  { name: "Phone", stock: 0 },
  { name: "Tablet", stock: 5 },
  { name: "Monitor", stock: 0 },
];