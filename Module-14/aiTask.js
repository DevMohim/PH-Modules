/*
 * Task 1 => find longest word
 */
function findLongestWord(str) {
   if(typeof str !== 'string'){
      return 'Invalid'
   }
   const newArr = str.split(" ")
   let longestWord = ''
   for(const word of newArr){
      if(word.length > longestWord.length){
         longestWord = word
      }
   }
   return  `Longest Word :  ${longestWord}`
}
console.log(findLongestWord("I love learning Javascript"));
