// Includes will help to find whether the value is present in the array or not.

Array.prototype.myIncludes = function (value) {
  for (let i = 0; i < this.length; i++){
    if(this[i] === value){
      return true;
    }
  }
  return false;
}

console.log([1, 2, 3, 4].myIncludes(2));