function outer() {
  var outerVar = 'I am outside!';

  function inner() {
      console.log(outerVar);
  }
  inner();
}

outer(); // I am outside!



for (var i=1; i<=5; i++){  //let  1,2,3,4,5
  setTimeout(() => {
    console.log(i)    // 6 6 6 6 6
  }, i*1000);
}

// for (var i=1; i<=5; i++){
//   function close(x){
//     setTimeout(()=>{
// console.log(x)    // 1 2 3 4 5
//     },x*1000)
//   }
//   close(i)
// }
