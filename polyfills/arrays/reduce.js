// reduce which is used to return an array into single value and also has initial value as optional.

Array.prototype.myReduce = function(callback, initialValue){
  let acc = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++){
    acc = callback(acc, this[i], i, this);
  }

  return acc;
}

const reduceArray = ["Hello", "World"];

console.log(reduceArray.myReduce((acc, curr) => acc + "-" + curr))
