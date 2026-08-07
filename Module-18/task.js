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
// console.log(getEmployeeDept(employee));

/*
 * Task 6
 */
const promoteEmployee = (employee, newTitle) => {
  const { name, title } = employee;

  const newObj = {
    name,
    title: newTitle,
  };
  return newObj;
};

// const employeee = { name: "Rafi", title: "Junior Dev" };
// console.log(promoteEmployee(employeee, "Senior Dev"));
// console.log(employeee);

/*
 * Task 7
 */
const sumAllPrices = (prices) => {
  if (!Array.isArray(prices)) {
    return "Invalid";
  }
  let sum = 0;
  for (let price of prices) {
    sum += price;
  }
  return sum;
};
//console.log(sumAllPrices([100, 250, 75]));

/*
 * Task 8
 */
const getManagerName = (employee) => {
  if (typeof employee !== "object" || Array.isArray(employee)) {
    return "Invalid";
  }
  const managerName = employee.manager?.name;
  return managerName;
};
// console.log(getManagerName({ name: "Mim", manager: { name: "Tanvir" } }));
// console.log(getManagerName( { name: "Rafi" }));

/*
 * Task 9
 */
const splitFirstRest = (arr) => {
  const [first, ...rest] = arr;
  return { first, rest };
};
// console.log(splitFirstRest([10, 20, 30, 40]));

/*
 * Task 10
 */
const cloneAndUpdate = (arr, index, newValue) => {
  const newArr = [...arr];
  newArr[index] = newValue;

  return newArr;
};
const arr = [5, 10, 15];
console.log(cloneAndUpdate(arr, 1, 99));
console.log(arr)
