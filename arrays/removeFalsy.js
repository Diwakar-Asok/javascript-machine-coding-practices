// remove falsy value from an array

const removeFalsy = (arr) => {
  const nonFalsyValue = [];

  for (let i =0; i < arr.length; i++){
    if(arr[i]){
      nonFalsyValue.push(arr[i])
    }
  }

  return nonFalsyValue;
}

console.log(removeFalsy([1, 2, 3, 0, "", 4, undefined, [], NaN]))

// builtInFalsy

const arrayBuiltInFalsy = (arr) => {
  return arr.filter(Boolean);
}

console.log(removeFalsy([1, 2, 3, 0, "", 4, undefined, [], NaN]))