//Promise all method will execute the promises one by one, if one promises get's failed the entire promises also failed.

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    if (promises.length === 0){
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((value) => {
        results[index] = value;
        completed++;

        if(promises.length === completed){
          resolve(results);
        }
      }).catch(reject);
    })
  })
}

const promise1 = Promise.resolve("Promise resolved");
const promise2 = Promise.reject("Rejcted Promise");

Promise.myAll([promise1, promise2])
.then((res) => console.log(res))
.catch((err) => console.log(err))

// promise myAll which is wait for all the promise to settle, if one promises fail the whole promises get's rejected.

Promise.myAllPromise = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    if (promises.length === 0){
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((value) => {
        results[index] = value;
        completed++

        if(completed === promises.length){
          resolve(results);
        }
      }).catch(reject)
    })
  })
}

const promise3 = Promise.resolve("Promise resolved");
const promise4 = Promise.resolve("Rejected promise");

Promise.myAllPromise([promise3, promise4]).then((res) => console.log("resolve", res)).catch((err) => console.log(err));
