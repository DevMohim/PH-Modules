"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Task 1
 */
let value = "hello javascript";
console.log(value.length);
console.log(value.length);
/*
 * Task 2
 */
const password = "100";
// safe cast
const numPass = Number(password);
// risky example
const riskyPass = password;
const product1 = { title: "Mouse", price: 500, inStock: true };
const product2 = { title: "Laptop", price: 55000 };
const productPrice = (product1, product2) => {
    return `${product1.price} and ${product2.price} printed by the function `;
};
let method = "card";
const order = {
    id: 1,
    method: method,
};
// console.log(order)
/*
 * Task 5
 */
function getLastElement(arr) {
    const lastElem = arr[arr.length - 1];
    return lastElem;
}
const numberContainer = {
    item: 100,
};
const stringContainer = {
    item: "Books",
};
function findById(items, id) {
    return items.find((item) => item.id === id);
}
const user = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
];
console.log(findById(user, 2));
// Constraint violation:
// const invalid = findById([{ name: "A" }], 1);
// Error: Type '{ name: string; }' does not satisfy the constraint 'HasId'.
// Property 'id' is missing.
/*
 * Task 8
 */
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Placed"] = "Placed";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
function printStatus(status) {
    console.log(` Current status: ${status}`);
}
printStatus(OrderStatus.Shipped);
const appConfig = {
    theme: "dark",
    version: "12.0.2",
};
appConfig.theme = "light";
// Mutation attempt:
// appConfig.theme = "light";
// Error: Cannot assign to 'theme' because it is a read-only property.
const colors = ["red", "green", "blue"];
// Color = "red" | "green" | "blue"
const selectedColor = "green";
console.log(appConfig);
console.log(selectedColor);
function updateEmplooye(emplooye) {
    console.log(emplooye);
}
updateEmplooye({ name: "Rafi" });
const basicInfo = {
    name: "Rafi",
    id: 101,
};
const employeeInfo = {
    name: "Rafi",
    id: 101,
    department: "IT",
};
console.log(basicInfo);
console.log(employeeInfo);
//# sourceMappingURL=task.js.map