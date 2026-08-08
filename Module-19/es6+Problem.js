/*
 * Task 1
 */
const increasePrices = (products, percentage) => {
  return products.map((product) => {
    const { price } = product;

    const priceAfterIncrease = price + (price * percentage) / 100;

    return {
      ...product,
      price: priceAfterIncrease,
    };
  });
};
const products = [
  { id: 1, name: "Laptop", price: 80000 },
  { id: 2, name: "Mouse", price: 1500 },
  { id: 3, name: "Keyboard", price: 3000 },
];
// console.log(increasePrices(products, 10));
// console.log(products)

/*
 * Task  2
 */
const getActiveEmployees = (employees) => {
  const activeEmployeeName = employees
    .filter((employees) => employees.active === true)
    .map((employee) => employee.name);

  return activeEmployeeName;
};

const employees = [
  { name: "Rahim", department: "IT", active: true },
  { name: "Karim", department: "HR", active: false },
  { name: "Sakib", department: "IT", active: true },
  { name: "Rafi", department: "Finance", active: true },
];
console.log(getActiveEmployees(employees));


/* 
* Task 3
 */
const getDepartmentSalary = (employees) => {

   return employees.reduce((acc,employee) => {
       if(!acc[employee.department]){
         acc[employee.department] = 0
       }
       acc[employee.department] += employee.salary


       return acc
   } ,{})
  
};
const employeees = [
  { name: "Rahim", department: "IT", salary: 50000 },
  { name: "Karim", department: "HR", salary: 40000 },
  { name: "Sakib", department: "IT", salary: 60000 },
  { name: "Rafi", department: "HR", salary: 45000 },
  { name: "Tamim", department: "Finance", salary: 55000 },
];
console.log(getDepartmentSalary(employeees))

