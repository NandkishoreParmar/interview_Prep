// A promise is an object representing the eventual completion or failure of an asynchronous operation  
Promise.all()
// Waits for all promises to be fulfilled.
// If any promise is rejected, the whole Promise.all() fails immediately with that error.
// Returns a single promise that resolves to an array of results (in order).
// Promise.all([Promise1, Promise2, Promise3])
//   .then(values => console.log(values))
//   .catch(err => console.log(err));

Promise.allSettled()
// Waits for all promises to complete, regardless of fulfilled or rejected.
// Returns a single promise that resolves to an array of result objects, each indicating status ('fulfilled' or 'rejected') and value or reason.
// Promise.allSettled([Promise1, Promise2, Promise3])
//   .then(results => console.log(results));
// with **Promise.allSettled**, you don't need to use .catch(), and here's why:

// 🔸 Promise.allSettled never rejects, even if some promises fail.
// It always resolves with an array of results — where each result is an object:

// { status: 'fulfilled', value: result }

// { status: 'rejected', reason: error }

// So, unlike Promise.all, it will not throw if a promise fails. Instead, it captures that error as part of the results array.
// example
// const p1 = Promise.resolve('Success');
// const p2 = Promise.reject('Failed');
// const p3 = Promise.resolve('Done');

// Promise.allSettled([p1, p2, p3])
//   .then(results => {
//     results.forEach((result, index) => {
//       if (result.status === 'fulfilled') {
//         console.log(`Promise ${index + 1} fulfilled with`, result.value);
//       } else {
//         console.log(`Promise ${index + 1} rejected with`, result.reason);
//       }
//     });
//   });

Promise.race()
// Promise.race() returns a promise that settles (resolves or rejects) as soon as the first promise in the array settles, regardless of whether it's fulfilled or rejected.
// Promise.race([promise1, promise2, promise3])
//   .then(result => console.log('Resolved:', result))
//   .catch(error => console.log('Rejected:', error));
// Key Concepts:
// It’s a race – the first settled promise wins.
// If the first settled promise is rejected, the entire race() is rejected.
// If the first settled promise is fulfilled, the race resolves with that value.

Promise.any()
// Promise.any() returns a promise that fulfills as soon as any one of the input promises fulfills.
// If at least one promise is fulfilled, Promise.any() resolves with the value of the first fulfilled promise.
// If all promises are rejected, it rejects with an AggregateError.
// Promise.any([promise1, promise2, promise3])
//   .then(result => console.log('Fulfilled with:', result))
//   .catch(err => console.error('All promises rejected:', err));

// const p1 = Promise.reject("❌ Error 1");
// const p2 = new Promise(resolve => setTimeout(() => resolve("✅ Success 2"), 1000));
// const p3 = new Promise(resolve => setTimeout(() => resolve("✅ Success 3"), 2000));

// Promise.any([p1, p2, p3])
//   .then(result => console.log(result))  // ✅ Success 2
//   .catch(err => console.log(err));




let condition = false;
const myPromise = new Promise((resolve,reject)=>{
    setTimeout(function() {
        if (condition){
            resolve("Promise is resolved")
        }
        else{
            reject("Promise is Rejected")
        }
    }, 2000);
})

myPromise.then((result)=>{
    console.log(result)
}).
catch((error)=>{
    console.log(error)
}).finally(()=>
    console.log("Run in both cases")
)