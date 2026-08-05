/*
 * Task 1
 */
const calculateBill = (amount, taxRate = 5) => {
  if (typeof amount !== "number" || typeof taxRate !== "number") {
    return "Invalid";
  }
  const totalTax = (amount * taxRate) / 100;

  const totalBill = amount + totalTax;

  return totalBill;
};

// console.log(calculateBill(1000));
// console.log(calculateBill(1000, 10));
// console.log(calculateBill("hi"));
// console.log(calculateBill([1000, 10]));
// console.log(calculateBill({}));

/*
 * Task 2
 */
const buildProfileCard = (obj) => {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    return "Invalid";
  }

  const { name, title, company } = obj;

  return `
   ${name}
   ${title} at ${company}`;
};

// console.log(buildProfileCard({ name: "Arif",title: "Developer",company: "Programming Hero",}));

/*
 * Task  3
 */
const getLowestPrice = (prices) => {
  if (!Array.isArray(prices)) {
    return "Invalid";
  }

  const lowestPrice = Math.min(...prices);

  return lowestPrice;
};

const prices = [340, 120, 560, 90];
// console.log(getLowestPrice(prices));

/*
 * Task 4
 */
const swapValues = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid";
  }
  [a, b] = [b, a];
  return [a, b];
};

// console.log(swapValues(5,10));

/*
 *  Task 5
 */
const getEmployeeDept = (employee) => {
  if (typeof employee !== "object" || Array.isArray(employee)) {
    return "Invalid";
  }

  const {
    name,
    job: { title, department },
  } = employee;

  return { title, department };
};

const employee = { name: "Nadia", job: { title: "PM", department: "Product" } };
console.log(getEmployeeDept(employee));
