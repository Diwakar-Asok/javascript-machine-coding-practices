// flat the array with recursive function

const deepLevelFlat = (arr) => {
  const deepFlat = [];

  const flatten = (arr) => {
    for (const char of arr){
      if(Array.isArray(char)){
        flatten(char)
      }
      else{
        deepFlat.push(char);
      }
    }
  }

  flatten(arr);
  return deepFlat;
}

console.log(deepLevelFlat([1, [2, 3], [4, [5, 6]]]))

// builtInFlat

const recursiveFlat = (arr) => {
  return arr.reduce((acc, val) => {
    return acc.concat((Array.isArray(val)) ? recursiveFlat(val) : val)
  }, [])
}

console.log(builtInFlat([1, [2, 3], [4, [5, 6]]]))