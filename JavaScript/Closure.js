function outer() {
  var outerVar = 'I am outside!';

  function inner() {
      console.log(outerVar);
  }
  inner();
}

outer(); // I am outside!