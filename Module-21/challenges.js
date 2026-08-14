"use strict";
/*
 * Shopping Card Object
 */
const shoppingCart = {
    productName: "Laptop",
    qty: 2,
    price: 35000,
};
/*
 * User Login check
 */
const loginUser = (users, userName, passWord) => {
    const findUser = users.find((user) => user.username === userName);
    if (!findUser) {
        return "User not found";
    }
    if (findUser.username === userName && findUser.password === passWord) {
        return "Login Successful";
    }
    else if (findUser.password !== passWord) {
        return "Invalid Password";
    }
};
const usersData = [
    { username: "rahim", password: "1234" },
    { username: "karim", password: "5678" },
    { username: "sakib", password: "abcd" },
];
// console.log(loginUser(usersData, "mohim", "12ab"));
/*
 * Filter Even Number
 */
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArr = array.filter((number) => number % 2 === 0);
// console.log(evenArr)
/*
 * Find country in nested object
 */
const user = {
    id: 101,
    name: "Mohim",
    email: "mohim@example.com",
    address: {
        street: "College Road",
        city: "Dhaka",
        location: {
            country: "Bangladesh",
            division: "Dhaka",
        },
    },
};
const country = user.address?.location?.country;
const getTotalPrice = (products) => {
    const total = products.reduce((total, { price }) => total + price, 0);
    return total;
};
const products = [
    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 1500 },
    { name: "Keyboard", price: 3000 },
];
console.log(getTotalPrice(products));
