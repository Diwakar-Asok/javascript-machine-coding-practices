// To find the index of an array using polyfill

Array.prototype.myFindIndex = function (callback) {
  for (let i = 0; i < this.length; i++){
    if(callback(this[i], i , this)){
      return i
    }
  }
  return -1;
}

console.log([1, 2, 3, 4].myFindIndex((n) => n > 2))