// count vowels from the string

const countVowels = (str) => {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (const char of str){
    if(vowels.includes(char)){
      count++
    }
  }

  return count;
}

console.log(countVowels("riyaa sai"))