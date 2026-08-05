/*
 * Task 1
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

function mostExpensiveByCategory(products) {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = {
        name: product.name,
        category: product.category,
        price: product.price,
      };
    } else {
      if (product.price > acc[product.category].price) {
        acc[product.category] = product;
      }
    }
    return acc;
  }, {});
}

// console.log(mostExpensiveByCategory(products));

/*
 * Task  2
 */
const employees = [
  { name: "Rahim", department: "IT", salary: 50000 },
  { name: "Karim", department: "HR", salary: 40000 },
  { name: "Sakib", department: "IT", salary: 60000 },
  { name: "Rafi", department: "HR", salary: 45000 },
  { name: "Tamim", department: "Marketing", salary: 55000 },
  { name: "Nadim", department: "IT", salary: 70000 },
];

function groupByDepartment(employees) {
  return employees.reduce((acc, employee) => {
    if (!acc[employee.department]) {
      acc[employee.department] = {
        totalSalary: employee.salary,
        averageSalary: employee.salary,
        employeeCount: 1,
      };
    } else {
      acc[employee.department].totalSalary += employee.salary;
      acc[employee.department].employeeCount++;
      acc[employee.department].averageSalary =
        acc[employee.department].totalSalary /
        acc[employee.department].employeeCount;
    }

    return acc;
  }, {});
}

// console.log(groupByDepartment(employees));

/*
 * Task 3
 */
const transactions = [
  { user: "Rahim", type: "deposit", amount: 1000 },
  { user: "Rahim", type: "withdraw", amount: 300 },
  { user: "Karim", type: "deposit", amount: 500 },
  { user: "Rahim", type: "deposit", amount: 200 },
  { user: "Karim", type: "withdraw", amount: 100 },
  { user: "Sakib", type: "deposit", amount: 700 },
];

function transactionDetails(transactions) {
  return transactions.reduce((acc, transaction) => {
    if (!acc[transaction.user]) {
      acc[transaction.user] = {
        balance: 0,
        deposits: [],
        withdrawals: [],
      };
    }

    if (transaction.type === "deposit") {
      acc[transaction.user].deposits.push(transaction.amount);
      acc[transaction.user].balance += transaction.amount;
    } else {
      acc[transaction.user].withdrawals.push(transaction.amount);
      acc[transaction.user].balance -= transaction.amount;
    }
    return acc;
  }, {});
}
// console.log(transactionDetails(transactions)

/*
 * Task 4
 */
const numbers = [3, 7, 2, 9, 4, 8, 1];

function analayzNumbers(numbers) {
  const result = numbers.reduce(
    (acc, number) => {
      if (number > acc.max) {
        acc.max = number;
      }

      if (number < acc.min) {
        acc.min = number;
      }

      acc.sum += number;

      if (number % 2 === 0) {
        acc.even.push(number);
      } else {
        acc.odd.push(number);
      }
      return acc;
    },
    {
      max: -Infinity,
      min: Infinity,
      sum: 0,
      average: 0,
      even: [],
      odd: [],
    },
  );
  result.average = result.sum / numbers.length;
  return result;
}
// console.log(analayzNumbers(numbers));

/*
 * Task 5
 */
const students = [
  { name: "Rahim", subject: "Math", marks: 80 },
  { name: "Rahim", subject: "English", marks: 70 },
  { name: "Karim", subject: "Math", marks: 90 },
  { name: "Karim", subject: "English", marks: 85 },
  { name: "Sakib", subject: "Math", marks: 60 },
];

const analyzeStudents = (students) => {
  return students.reduce((acc, student) => {
    // Initialization Part
    if (!acc[student.name]) {
      acc[student.name] = {
        totalMarks: 0,
        average: 0,
        subjects: [],
      };
    }

    // Update Part
    acc[student.name].totalMarks += student.marks;
    acc[student.name].subjects.push(student.subject);
    acc[student.name].average =
      acc[student.name].totalMarks / acc[student.name].subjects.length;

    return acc;
  }, {});
};

console.log(analyzeStudents(students));
