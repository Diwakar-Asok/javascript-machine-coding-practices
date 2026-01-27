// one level flat from the array

const singleLevelFlat = (arr) => {
  const oneLevel = [];

  for (let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      oneLevel.push(...arr[i]);
    }
    else {
      oneLevel.push(arr[i]);
    }
  }

  return oneLevel;
}

console.log(singleLevelFlat([1, [2, 3], [4, [5, 6]]]))

// builtInFlat

const builtInFlat = (arr) => {
  return arr.reduce((acc, val) => acc.concat(val), [])
}

console.log(builtInFlat([1, [2, 3], [4, [5, 6]]]))