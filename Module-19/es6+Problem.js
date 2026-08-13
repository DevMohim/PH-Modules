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
// console.log(getActiveEmployees(employees));

/*
 * Task 3
 */
const getDepartmentSalary = (employees) => {
  return employees.reduce((acc, employee) => {
    if (!acc[employee.department]) {
      acc[employee.department] = 0;
    }
    acc[employee.department] += employee.salary;

    return acc;
  }, {});
};
const employeees = [
  { name: "Rahim", department: "IT", salary: 50000 },
  { name: "Karim", department: "HR", salary: 40000 },
  { name: "Sakib", department: "IT", salary: 60000 },
  { name: "Rafi", department: "HR", salary: 45000 },
  { name: "Tamim", department: "Finance", salary: 55000 },
];
// console.log(getDepartmentSalary(employeees))

/*
 * Task 4
 */
const highestNumberStudent = (students) => {
  return students.reduce((top, student) => {
    if (!top.name) {
      return student;
    }

    const { marks: topMarks } = top;
    const { marks: currentMarks } = student;

    if (currentMarks > topMarks) {
      return student;
    }

    return top;
  }, {});
};

const students = [
  { name: "Rahim", marks: 78 },
  { name: "Karim", marks: 91 },
  { name: "Sakib", marks: 85 },
  { name: "Rafi", marks: 95 },
];
// console.log(highestNumberStudent(students));

/*
 * Task 5
 */
const getHighestSpendingCustomer = (orders) => {
  const totalSpending = orders.reduce((acc, order) => {
    if (!acc[order.customer]) {
      acc[order.customer] = {
        customer: order.customer,
        price: 0,
      };
    }
    acc[order.customer].price += order.price;

    return acc;
  }, {});

  const highestSpendingCustomer = Object.values(totalSpending).reduce(
    (top, customer) => {
      if (!top.customer) {
        return customer;
      }

      const { price: topPrice } = top;
      const { price: currPrice } = customer;

      if (currPrice > topPrice) {
        return customer;
      }

      return top;
    },
    {},
  );

  return highestSpendingCustomer;
};

const orders = [
  { customer: "Rahim", product: "Laptop", price: 80000 },
  { customer: "Karim", product: "Mouse", price: 1500 },
  { customer: "Rahim", product: "Keyboard", price: 3000 },
  { customer: "Sakib", product: "Phone", price: 50000 },
  { customer: "Karim", product: "Monitor", price: 25000 },
  { customer: "Rahim", product: "Mouse", price: 1500 },
];

console.log(getHighestSpendingCustomer(orders));
