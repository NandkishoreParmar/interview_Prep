let categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

let counts = categories.reduce(function(acc, category) {
  if (acc[category]) {
    acc[category] = acc[category] + 1;
  } else {
    acc[category] = 1;
  }
  return acc;
}, {});

console.log(counts);
// Output: { electronics: 2, clothing: 2, toys: 3 }
