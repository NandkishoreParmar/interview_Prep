function multiplyNumbers(a, b) {
  // Use apply to call a function that multiplies two numbers
  function multiply(x, y) {
    return x * y;
  }

  // Use apply to pass the arguments as an array
  return multiply.apply(null, [a, b]);
}

// Example usage
let result = multiplyNumbers(5, 6);
console.log(result); // Output: 30
