/*
 * Task 1
 */
let value: unknown = "hello javascript";
console.log((value as string).length);
console.log((<string>value).length);

/*
 * Task 2
 */
const password: string | number = "100";

// safe cast
const numPass = Number(password);

// risky example
const riskyPass = password as unknown as number;

// console.log(add)

/*
 * Task 3
 */
interface Product {
  title: string;
  price: number;
  inStock?: boolean;
}

const product1 = { title: "Mouse", price: 500, inStock: true };

const product2 = { title: "Laptop", price: 55000 };

const productPrice = (product1: Product, product2: Product): string => {
  return `${product1.price} and ${product2.price} printed by the function `;
};
// console.log(productPrice(product2 , product1))

/*
 * Task 4
 */
type PaymentMethod = "cash" | "card" | "mobile";
// Interface can't directly represent a union of string literal values.
// Interface is mainly used to define the shape of objects.
interface Order {
  id: number;
  method: PaymentMethod;
}

let method: PaymentMethod = "card";

const order: Order = {
  id: 1,
  method: method,
};

// console.log(order)

/*
 * Task 5
 */
function getLastElement<T>(arr: T[]): T {
  const lastElem = arr[arr.length - 1]!;
  return lastElem;
}
// console.log(getLastElement<number>([10, 20, 30]));
// console.log(getLastElement<string>(["a", "b", "c"]));

/*
 * Task 6
 */
interface Container<T> {
  item: T;
}

const numberContainer: Container<number> = {
  item: 100,
};

const stringContainer: Container<string> = {
  item: "Books",
};

// console.log(numberContainer)
// console.log(stringContainer)

/*
 * Task 7
 */

interface HasId {
  id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
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
enum OrderStatus {
  Placed = "Placed",
  Shipped = "Shipped",
  Delivered = "Delivered",
  Cancelled = "Cancelled",
}

function printStatus(status: OrderStatus): void {
  console.log(` Current status: ${status}`);
}
printStatus(OrderStatus.Shipped);

/*
 * Task 9
 */
interface AppConfig {
  theme: string;
  version: string;
}

const appConfig = {
  theme: "dark",
  version: "12.0.2",
} as const;

appConfig.theme = "light";
// Mutation attempt:
// appConfig.theme = "light";
// Error: Cannot assign to 'theme' because it is a read-only property.

const colors = ["red", "green", "blue"] as const;
type Color = (typeof colors)[number];

// Color = "red" | "green" | "blue"

const selectedColor: Color = "green";

console.log(appConfig);
console.log(selectedColor);

/*
 * Task 10
 */
interface Emplooye {
  name: string;
  id: number;
  salary: number;
  department: string;
}

function updateEmplooye(emplooye: Partial<Emplooye>): void {
  console.log(emplooye);
}

updateEmplooye({ name: "Rafi" });

type EmployeeBasicInfo = Pick<Emplooye, "name" | "id">;

const basicInfo: EmployeeBasicInfo = {
  name: "Rafi",
  id: 101,
};

// Omit<Employee, "salary">
type EmployeeWithoutSalary = Omit<Emplooye, "salary">;

const employeeInfo: EmployeeWithoutSalary = {
  name: "Rafi",
  id: 101,
  department: "IT",
};

console.log(basicInfo);
console.log(employeeInfo);