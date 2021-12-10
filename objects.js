'use strict';

// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  let wordCounts = {};
  const wordsInPhrase = phrase.split(' ');
  
  for (const word of wordsInPhrase){
      let objectKeys = Object.keys(wordCounts);
      if (objectKeys.includes(word)){
        wordCounts.word +=1;
      } else {
        wordCounts.word = 1;
    }
  }
  return wordCounts
}

console.log(countWords("This function is pretty difficult function function function"))

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
}
