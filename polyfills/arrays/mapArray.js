// map method in array is used to return new set of array from the original array with same length;


Array.prototype.myMap = function (callback) {
  const newArray = [];
  
  for(let i = 0; i < this.length; i++){
    newArray.push(callback(this[i], i, this));
  }

  return newArray;
}

console.log([1, 2, 3, 4].myMap((n) => n * 2))