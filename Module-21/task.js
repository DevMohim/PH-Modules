"use strict";
/*
 * Task 1
 */
function printUser(name, age) {
    return `${name} is ${age} years old.`;
}
// console.log(printUser("Amina", 22));
/*
 * Task 2
 */
const productName = "Laptop";
const price = 45000;
const isAvailable = true;
// console.log(`${productName} cost ${price} and is available: ${isAvailable}`);
/*
 * Task 3
 */
const students = ["Amina", "Rahim", "Karim", "Salma", "Rafi"];
// console.log(students.length)
/*
 * Task 4
 */
const user = ["Amina", 22];
const [userName, userAge] = user;
// console.log(`${userName} is ${userAge} years old`)
/*
 * Task 5
 */
const users = {
    name: "Amina",
};
const { name: usersName, email } = users;
let message = email ? "Provided" : "Not provided";
// console.log(`Name : ${usersName} , Email : ${message}`);
/*
 * Task 6
 */
function isEven(a) {
    if (a % 2 === 0) {
        return true;
    }
    return false;
}
// console.log(isEven(6));
/*
* Task 7
 */
// function calculateSum(a :number,...rest:number[]):number{
//    let sum = a
//    for(let number of rest){
//       sum += number
//    }
//    return sum
// }
const sumAll = (...rest) => {
    const total = rest.reduce((sum, num) => sum + num, 0);
    return total;
};
// console.log(sumAll(1,2,3,4,5))
/*
* Task 8
 */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
// console.log(mergedArray)
/*
* Task 9
 */
const number = 5;
const result = number > 0 ? "Positive" : 'Negative';
// console.log(result)
/*
* Task 10
 */
const userrName = undefined;
const displayName = userrName ?? "Guest";
// console.log(displayName)
/*
* Task 11
 */
const value = 'Hello';
if (typeof value === 'string') {
    console.log(value);
}
/*
* Task 12
 */
const student = {
    name: "Amina",
    age: 22,
    email: "amina@email.com",
    skills: ["HTML", "CSS", "TypeScript"],
    active: true,
};
const { name: studentName, age: studentAge, email: studentEmail, skills, active } = student;
console.log(`
   Name : ${studentName} 
   Age : ${studentAge}
   Email : ${studentEmail}
   Skills : ${skills}
   Active : ${active}`);
