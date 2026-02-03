// we need to captialize each first letter of the sentence.

const builtInCaptialize = (character) => {
  return character.split(" ").map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

console.log(builtInCaptialize("hi from javascript"))


const captializeWord = (character) => {
  const words = character.split(" ");

  let result = [];

  for (const word of words){
    if(word.length > 0){
      let captialized = word[0].toUpperCase() + word.slice(1).toLowerCase();
      result.push(captialized);
    }
    else{
      result.push(" ")
    }
  }

  return result.join(" ");
}

console.log(captializeWord("hi from javascript"))