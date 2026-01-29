// promise allSettled will always resolve the promises and even if the promises are success or failed.

Promise.myAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((value) => {
        results[index] = {status: "fulfilled", value}
      }).catch((reason) => {
        results[index] = {status: "rejected", reason}
      }).finally(() => {
        completed++;

        if(completed === promises.length){
          resolve(results);
        }
      })
    })
  })
}

const promise1 = Promise.resolve("Promise resolved");
const promise2 = Promise.reject("Rejcted Promise");

Promise.myAllSettled([promise1, promise2]).then((res) => console.log("Result", res))