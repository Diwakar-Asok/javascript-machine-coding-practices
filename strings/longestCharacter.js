// to find the longest character in a setence;

const findLongestCharacter = (str) => {
  const char = str.split(" ");

  let longestWord = "";
  for (const word of char){
    if (word.length > longestWord.length){
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestCharacter("Hello from javascript"))