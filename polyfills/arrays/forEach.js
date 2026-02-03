// forEach which is used to iterate the value but return undefined.

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++){
    callback(this[i], i, this)
  }
}

const fruits = ['apple', 'banana', 'cherry'];

fruits.myForEach((fruit, index) => {
    console.log(`Fruit at index ${index} is: ${fruit}`);
});