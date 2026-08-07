/*
 * Task 1
 */
const countProducts = (orders) => {
  if (!Array.isArray(orders)) {
    return "Invalid";
  }

  return orders.reduce((acc, order) => {
    if (!acc[order.product]) {
      acc[order.product] = 0;
    }

    acc[order.product]++;

    return acc;
  }, {});
};

// const orders = [
//   { product: "Pen", unitsSold: 10 },
//   { product: "Book", unitsSold: 5 },
//   { product: "Pen", unitsSold: 7 },
//   { product: "Pencil", unitsSold: 3 },
//   { product: "Book", unitsSold: 8 },
//   { product: "Pen", unitsSold: 2 },]

//   console.log(countProducts(orders))

/*
 * Task 2
 */
const countUnitHolds = (orders) => {
  if (!Array.isArray(orders)) {
    return "Invalid";
  }

  return orders.reduce((acc, order) => {
    if (!acc[order.product]) {
      acc[order.product] = 0;
    }

    acc[order.product] += order.unitsSold;

    return acc;
  }, {});
};

// const orders = [
//   { product: "Pen", unitsSold: 10 },
//   { product: "Book", unitsSold: 5 },
//   { product: "Pen", unitsSold: 7 },
//   { product: "Pencil", unitsSold: 3 },
//   { product: "Book", unitsSold: 8 },
//   { product: "Pen", unitsSold: 2 },
// ];

// console.log(countUnitHolds(orders));

/*
 * Task 3
 */
const topSellingProducts = (orders) => {
  if (!Array.isArray(orders)) {
    return "Invalid";
  }

  const totalUnits = orders.reduce((acc, order) => {
    if (!acc[order.product]) {
      acc[order.product] = 0;
    }

    acc[order.product] += order.unitsSold;

    return acc;
  }, {});

  // console.log(totalUnits)

  const topProduct = Object.keys(totalUnits).reduce((top, product) => {
    if (totalUnits[product] > totalUnits[top]) {
      return product;
    }
    return top;
  });

  return topProduct;
};

// const orders = [
//   { product: "Pen", unitsSold: 10 },
//   { product: "Book", unitsSold: 5 },
//   { product: "Pen", unitsSold: 7 },
//   { product: "Pencil", unitsSold: 20 },
//   { product: "Book", unitsSold: 8 },
//   { product: "Pen", unitsSold: 2 },
// ];

// console.log(topSellingProducts(orders))

/*
 * Task 4
 */
const calculateTotalSpending = (users) => {
  const premiumMemberSpent = users
    .filter((user) => user.membership === "premium")
    .map((user) => {
      const totalSpent = user.orders.reduce(
        (acc, order) => acc + order.price,
        0,
      );
      return {
        name: user.name,
        totalSpent: totalSpent,
      };
    });
  // console.log(premiumMember)
  return premiumMemberSpent;
};

const users = [
  {
    name: "Rahim",
    membership: "premium",
    orders: [
      { product: "Laptop", price: 80000 },
      { product: "Mouse", price: 1500 },
    ],
  },
  {
    name: "Karim",
    membership: "basic",
    orders: [{ product: "Keyboard", price: 3000 }],
  },
  {
    name: "Sakib",
    membership: "premium",
    orders: [
      { product: "Phone", price: 50000 },
      { product: "Charger", price: 2000 },
    ],
  },
  {
    name: "Tamim",
    membership: "basic",
    orders: [{ product: "Monitor", price: 20000 }],
  },
];

// console.log(calculateTotalSpending(users));
