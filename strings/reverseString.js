// reverse string in both normal and builtIn method

const reverseString = (str) => {
  let reversed = ""

  for (let i = str.length -1; i >= 0; i--){
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("Hello from Diwakar"))

//builtIn method

const builtInReverse = (str) => {
  return str.split(" ").map(word => {
    let reversed = "";
    for (let i = word.length -1; i >= 0; i--){
      reversed += word[i]
    }
    return reversed;
  }).join(" ");
}

console.log(builtInReverse("Hello from Diwakar"))