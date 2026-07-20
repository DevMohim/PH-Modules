/* 
* Task 1
 */
const family = ['Mohim', 'Khadija', 'Manha'];
console.log(family)


/* 
* Task 
 */
const length = family.length;
console.log(length);

/* 
* Task 3
 */
 console.log(family[0]);
 console.log(family[2]);


 /* 
* Task 4
 */
family[1]  = "Bubu Rani";
console.log(family)


/* 
* Task 5
 */
family.push('Kabir');
console.log(family);


/* 
* Task 6
 */
const lastItem = family.pop();
console.log(family);
console.log(lastItem);


/* 
* Task 7
 */
family.unshift("Muhammad");
console.log(family);


/* 
* Task 8
 */
const firstItem = family.shift();
console.log(family);
console.log(firstItem);



/* 
* Task 9
 */
const check = family.includes("Manha");
console.log(check);


/* 
* Task 10
 */
const find = family.indexOf("Bubu Rani");
console.log(find);


/* 
* Task 11
 */
for(let i = 0 ; i < family.length ; i++){
   console.log(i,family[i]);
}


/* 
* Task 12 
 */
let i = 0;
while(i < family.length){
   console.log(i, family[i])
   i++
}