/*
 * Task 1
 */
const num1 = [1, 3, 5, 7];
const num2 = [2, 4, 6, 8];
const combine = num1.concat(num2);
console.log(combine);

/*
 * Task 2
 */
const num3 = [1, 2, 3, 7, 8, 9];
const portion = num3.slice(1, 5);
console.log(num3);
console.log(portion);

/*
 * Task 3
 */
const sentence = ["Word", "Word", "Word"];
const combineSentence = sentence.join(" ");
console.log(combineSentence);

/*
 * Task 4
 */
const userName = "mohim";
const usersName = ["mohim", "manha", "khadija"];
console.log(Array.isArray(userName));
console.log(Array.isArray(usersName));

/*
 * Task 5
 */
const numbers = [1, 54, 429, 42, 74, 48];
console.log(numbers.reverse());

/*
 * Task 6
 */
const players = [
  "messi",
  "neymar",
  "mbappe",
  "ozil",
  "ronaldo",
  "lamine",
  "alvarez",
];
console.log(players.sort());

/*
 * Task 7
 */
const sorten = numbers.sort((a, b) => a - b);
console.log(sorten);

/*
 * Task 8
 */
const numbers2 = [554, 245, 1, 5, 154, 528, 24, 54];
for (const number of numbers2) {
  if (number > 30) {
    console.log("Greater number is", number);
  }
}


/*
* Task 9
*/
const numbers3 = [554, 245, 1, 5, 154, 528, 24, 54];
let sum = 0
for(const number of numbers3){
   sum += number
}
   console.log(sum);