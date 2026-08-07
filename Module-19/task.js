/*
 * Task 1
 */
const getFormattedPrices = (prices) => {
  // console.log(prices)
  const newArray = prices.map((price) => `$${price}`);
  return newArray;
};
// console.log(getFormattedPrices( [100, 250, 75]))

/*
 * Task 2
 */
const getAvailableProducts = (products) => {
  const fillteredProducts = products
    .filter((product) => product.stock > 0)
    .map((product) => {
      return {
        name: product.name,
        stock: product.stock,
      };
    });
  return fillteredProducts;
};
// console.log(
//   getAvailableProducts([
//     { name: "Pen", stock: 5 },
//     { name: "Bag", stock: 0 },
//     { name: "Notebook", stock: 2 },
//   ]),
// );

/*
 * Task 3
 */
const findProductByName = (products, name) => {
  return products.find((product) => product.name === name);
};
const products = [
  { name: "Pen", price: 10 },
  { name: "Bag", price: 500 },
];

// console.log(findProductByName(products, "Bag"));

/*
 * Task 4
 */
const getTotalStockValue = (products) => {
  return products.reduce(
    (acc, product) => acc + product.price * product.stock,
    0,
  );
};
// console.log(
//   getTotalStockValue([
//     { price: 50, stock: 4 },
//     { price: 20, stock: 10 },
//   ]),
// );

/*
 * Task 5
 */
const getDiscountedTotalForCategory = (products, category) => {
  const total = products
    .filter((product) => product.category === category)
    .map((product) => product.price - (product.price * 10) / 100)
    .reduce((total, price) => total + price, 0);

  return total;
};
const Products = [
  { name: "Pen", category: "stationery", price: 100 },
  { name: "Bag", category: "accessory", price: 500 },
  { name: "Notebook", category: "stationery", price: 60 },
];
const category = "stationery";
// console.log(getDiscountedTotalForCategory(Products, category));

/*
 * Task 6
 */
const createIdGenerator = () => {
  let id = 1;

  return () => {
    return id++;
  };
};
const nextId = createIdGenerator();

// console.log(nextId());
// console.log(nextId());
// console.log(nextId());

/*
 * Task 7
 */
const sortByPriceAscending = (products) => {
  return [...products].sort((a, b) => a.price - b.price);
};
// console.log(
//   sortByPriceAscending([
//     { name: "Bag", price: 500 },
//     { name: "Pen", price: 10 },
//     { name: "Notebook", price: 60 },
//   ]),
// );

/*
 * Task 8
 */
const applyBonusPoints = (users, bonus) => {
  return users.map((user) => {
    return {
      ...user,
      points: user.points + bonus,
    };
  });
};
const users = [{ name: "Rafi", points: 20 }];
const bonus = 5;
// console.log('Before =>' , users)
// console.log('Preview =>' , applyBonusPoints(users,bonus));
// console.log('After =>' , users)

/*
 * Task 9
 */
const isStrictMatch = (input, target) => input === target;
// console.log(isStrictMatch("18", 18));
// console.log(isStrictMatch(18, 18));

/*
 * Task 10
 */

const getTopSellingProduct = (orders) => {
  const totalUnits = orders.reduce((acc, order) => {
    if (!acc[order.product]) {
      acc[order.product] = 0;
    }
    acc[order.product] += order.unitsSold;
    return acc;
  }, {});

  const topProduct = Object.keys(totalUnits).reduce((top, product) => {
    if (totalUnits[product] > totalUnits[top]) {
      return product;
    }
    return top;
  });

  return topProduct;
};
const orders = [
  { product: "Pen", unitsSold: 30 },
  { product: "Bag", unitsSold: 12 },
  { product: "Pen", unitsSold: 25 },
];
console.log(getTopSellingProduct(orders));
