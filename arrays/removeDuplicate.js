// remove duplicates value from an array using inbuilt and loop method

const builtInRemoveDuplicates = (arr) => {
  return [...new Set(arr)]
}

console.log(builtInRemoveDuplicates([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]))

const removeDuplicates = (arr) => {
  const singleValue = [];

  for (const char of arr){
    if(!singleValue.includes(char)){
      singleValue.push(char)
    }
  }

  return singleValue;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]))