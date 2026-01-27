// Promise.race polyfill to check which promise will race and return first

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) return;

    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject)
    })

  })
}

const promise1 = new Promise((reject) => setTimeout(reject, 500, "Fast reject"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 500, "Slow resolve"));

console.log(Promise.myRace([promise1, promise2]).then(console.log).catch(console.log));