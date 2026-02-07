// deep level flatten array using loops

Array.prototype.myDeepFlat = function (){
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

  flatten(this);
  return deepFlat;
}

console.log([1, 2, 3, 4, [5, 6, [7, 8]], 9, 10].myDeepFlat())