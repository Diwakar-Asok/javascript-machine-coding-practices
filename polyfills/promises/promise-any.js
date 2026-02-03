// promise any is used to return the any resolved promises but if all the promise are rejected it will thrown an aggregrate error.

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    const errors = [];
    let rejections = 0;

    if(promises.length === 0){
       reject(new AggregateError([], 'All promises were rejected'));
       return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(resolve).catch((error) => {
        errors[index] = error;
        rejections++

        if (rejections === promises.length){
          reject(new AggregateError(errors, "All promises rejected"))
        }
      })
    })
  })
}


const promise1 = Promise.reject('rejected');
const promise2 = Promise.reject('reject');

Promise.myAny([promise1, promise2]).then(console.log).catch(console.error);