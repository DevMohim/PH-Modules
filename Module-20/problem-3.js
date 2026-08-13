function countHashtags(caption) {
   if(typeof caption !== 'string'){
       return 'Invalid'
   }

   
  const words =caption.split(' ')

  const tags = words.filter(word => word.startsWith('#') && word.length > 1)

  const mentions = tags.map(tag => tag.slice(1))

  let longestTag = ''
  for(let name of mentions){
   if(name.length > longestTag.length){
      longestTag = name
   }
  }


  return { hashtagCount: tags.length, longestTag};
}


console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));
console.log(countHashtags("No hashtags here"));
console.log(countHashtags("#ai # #ml data science"));
console.log(countHashtags(123));
console.log(countHashtags(["#fun"]));