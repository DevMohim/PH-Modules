/*
 * Task 5.1
 */
const student = {
  name: "John",
  age: 25,
  grade: 3.75,
  isEnrolled: true,
};
console.log(student);
console.log(student.name);

/*
 * Task 5.2
 */

/*
An object is a data structure in JavaScript that stores data in key-value pairs.

Ex.
   when we need to store a student information , that time we use object in javascript.
   
   const student = {
   name : 'John',
   age : 25,
   grade : 3.75,
   isEnrolled : true
   }

   In this object -> (name, age, grade and  isEnrolled) is keys and ('John', 25,3.75, true) is values. (name : 'John') it is a key-value pairs. 
   
*/

/*
 * Task 6.1
 */
const car = { brand: "Toyota", model: "Corolla", year: 2022 };

console.log(car.brand);
console.log(car["model"]);
car["color"] = "blue";
car.year = 2023;

console.log(car);

/*
 * Task 7.1
 */
const book = { title: "The Hobbit", author: "Tolkien", pages: 310 };

console.log(Object.keys(book));
console.log(Object.entries(book));
delete book.pages;

console.log(book);

/*
 * Task 7.2
 */
let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701",
  },
};
console.log(user.address.city);
user.address["country"] = "Spain";

delete user.address.zip;

/*
 * Task 8.1
 */
const scores = {
  math: 90,
  science: 85,
  art: 95,
};
let sum = 0;
for (const keys in scores) {
  console.log(keys, scores[keys]);
  sum = sum + scores[keys];
}
console.log((sum / 3).toFixed(1));

/*
 * Task 8.1
 */

const contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234",
};

contact.email = contact.email.toLowerCase();

for (const keys in contact) {
  console.log(keys, contact[keys]);
}

  


