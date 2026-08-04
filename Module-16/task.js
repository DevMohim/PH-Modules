/*
 * Task 1
 */
function describeDeclaration(keyword) {
  if (keyword === "var") {
    return "Can redeclare, can reassign";
  } else if (keyword === "let") {
    return "Cannot redeclare, can reassign";
  } else if (keyword === "const") {
    return "Cannot redeclare, cannot reassign";
  } else {
    return "Invalid";
  }
}
// console.log(describeDeclaration('let'))
// console.log(describeDeclaration('const'))
// console.log(describeDeclaration('var'))
// console.log(describeDeclaration('int'))

/*
 * Task 2
 */
function bookTicket(movie, seats = 1, pricePerSeat = 300) {
  //Validation
  if (
    typeof movie !== "string" ||
    typeof seats !== "number" ||
    typeof pricePerSeat !== "number" ||
    pricePerSeat < 0 ||
    seats < 0
  ) {
    return "Invalid";
  }

  //Logic

  const total = seats * pricePerSeat;
  return `${movie} : ${seats} Seat(s) , Total - BDT ${total}`;
}

// console.log(bookTicket("Dune"));
// console.log(bookTicket("Dune",3));
// console.log(bookTicket("Dune",2,450));
// console.log(bookTicket(123,2));

/*
 * Task 3
 */
function generateReceipt(customerName, items, total) {
  if (!Array.isArray(items) || items.length === 0) {
    return "Invalid";
  }
  console.log(items);

  return `Receipt for ${customerName}
    Items : ${items.join(",")}
    Total : $ ${total}`;
}
// console.log(generateReceipt("Rakib", ["Pen", " Book"], 150));
// console.log(generateReceipt("Sadia", ["Milk"], 60));
// console.log(generateReceipt("Tanvir", [], 0));\

/*
 * Task 4
 */
const calculateBMI = (weight, height) => {
  if (height <= 0 || weight <= 0) {
    return "Invalid";
  }

  const BMI = weight / (height * height);
  return Number(BMI.toFixed(2));
};
// console.log(calculateBMI(70, 1.75));
// console.log(calculateBMI(70, 0));
// console.log(calculateBMI(0, 70));
// console.log(calculateBMI(50, 1.6));
// console.log(calculateBMI(60, -1.7));

/*
 * Task 5
 */
const mergeInventory = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  const mergeArr = [...arr1, ...arr2];
  return mergeArr;
};
// console.log(mergeInventory([1, 2], [3, 4]));

const highestScore = (scores) => {
  if (!Array.isArray(scores)) {
    return "Invalid";
  }
  const highScore = Math.max(...scores);
  return highScore;
};
// console.log(highestScore([3, 7, 2, 9, 4]));
// console.log(highestScore("3,7,2"));


/* 
* Task 6  
*/
const extractUserInfo = (userObj)=>{
  
  const {name, age} = userObj.user
  const {hobbies : firstHobby = "Nothing"} = userObj

  if (!userObj.hasOwnProperty(userObj.user.name)) {
    return "Invalid";
  }

  return `${name} (${age}) likes ${firstHobby[0]}`

}
console.log(extractUserInfo({
  user: { name: "Sadia", age: 22 },
  hobbies: ["reading", "coding"],
}));
console.log(extractUserInfo({ user: { name: "Rafi", age: 19 }, hobbies: [] }));
console.log(extractUserInfo({ user: { age: 30 }, hobbies: [] }));