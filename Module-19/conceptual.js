/*
 * Task 1
 */
const calculateDiscountTotal = (prices) => {
  //Validation for if input is not an Array
  if (!Array.isArray(prices)) {
    return "Invalid";
  }

  //logic
  return prices
    .map((price) => price - 5)
    .reduce((total, price) => total + price, 0);
};

// console.log(calculateDiscountTotal([100, 250, 80]));
// console.log(calculateDiscountTotal(["50"]));

/*
 * Task 2
 */
const employeeProfileCard = (employees) => {
  if (
    typeof employees !== "object" ||
    Array.isArray(employees) ||
    Object.keys(employees).length === 0
  ) {
    return "Invalid";
  }

  const { name, age, department } = employees;

  return `My name is ${name}. I am ${age} years old. I work in ${department}.`;
};

const employees = { name: "Jodu", age: 25, department: "Marketing" };
const employees2 = { name: "Tanvir", age: 25, department: "Marketing" };
const employees3 = {};
const employees4 = "employee";
// console.log(employeeProfileCard(employees3))

/*
 * Task 3
 */

const couponApplier = (customer) => {
  if (
    typeof customer !== "object" ||
    Array.isArray(customer) ||
    Object.keys(customer).length === 0
  ) {
    return "Invalid";
  }

  const discountPrice = customer.total * 0.1;

  return {
    ...customer,
    total: customer.total - discountPrice,
  };
};
// console.log(couponApplier({ orderId: "A1", total: 500, customer: "Mim" }));
// console.log(couponApplier('Manha'));
// console.log(couponApplier([{ orderId: "A1", total: 500, customer: "Mim" }]));
// console.log(couponApplier({}));

/*
 * Task 4
 */
const availableProducts = (products) => {
  if (!Array.isArray(products) || products.length === 0) {
    return "Invalid";
  }
  for (let product of products) {
    if (Object.keys(product).length === 0 || !("inStock" in product)) {
      return "Invalid";
    }
  }

  return products.filter((product) => product.inStock === true);
};
// console.log(
//   availableProducts([
//     { name: "Shirt", inStock: true },
//     { name: "Shoes", inStock: false },
//   ]),
// );
// console.log(
//   availableProducts([
//     { name: "Shirt", isActive: true },
//     { name: "Shoes", isActive: false },
//   ]),
// );
// console.log(availableProducts("product"));
// console.log(availableProducts([]));
// console.log(availableProducts([{}, {}]));

/*
 * Task 5
 */

function generateTopScorers(students) {
  if (!Array.isArray(students)) {
    return "Invalid";
  }
  if (students.length === 0) {
    return "Invalid";
  }
  const qualified = students.filter((student) => student.score > 60);

  const names = qualified.map(({ name }) => name.toUpperCase());

  return names.slice(0, 3);
}

// console.log(generateTopScorers([
// { name: "Rafi", score: 80 },
// { name: "Sadia", score: 55 },
// { name: "Karim", score: 70 },
// { name: "Nafis", score: 65 }
// ]))

/*
 * Task 6
 */

const countMentions = (caption) => {
  if (typeof caption !== "string") {
    return "Invalid";
  }

  const mentionName = caption
    .split(" ")
    .filter((word) => word.startsWith("@") && word.length > 1)
    .map((tag) => tag.slice(1));

  let longestMention = "";

  for (let name of mentionName) {
   
    if (name.length > longestMention.length) {
      longestMention = name;
    }
  }
  return { mentionCount: mentionName.length, longestMention: longestMention };
};
console.log(countMentions("Great session today @rafi @sadia @karim"));
console.log(countMentions("No mentions here"));
