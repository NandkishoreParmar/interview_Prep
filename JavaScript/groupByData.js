const people = [
  { name: "Alice", age: 25,id:1 },
  { name: "Bob", age: 30,id:2 },
  { name: "charlie", age: 25,id:3 }
];

const grouped = people.reduce((acc, curr) => {
  acc[curr.age] = acc[curr.age] || [];
  acc[curr.age].push(curr);
  return acc;
}, {});

console.log(grouped);
// { '25': ['Alice', 'Charlie'], '30': ['Bob'] }

console.log("+++++++++++++++++++++++++++++++++++++++++++++++")
// What happens internally:
// acc starts as an empty object {}.

// For each person (curr) in the array:

// It checks if acc[curr.age] exists:

// If yes, reuse the array.

// If not, create a new empty array.

// Then it pushes the curr.name to the right age group.

const products = [
  { productid: 1, productname: "iPhone", category: "Electronics", price: 400 },
  { productid: 2, productname: "Laptop", category: "Electronics", price: 400 },
  { productid: 3, productname: "Shirt", category: "Clothing", price: 30 },
  { productid: 4, productname: "Jeans", category: "Clothing", price: 300 },
  { productid: 5, productname: "Blender", category: "HomeAppliances", price: 500 },
  { productid: 6, productname: "Headphones", category: "Electronics", price: 150 },
  { productid: 7, productname: "Banana", category: "Groceries", price: 2 },
  { productid: 8, productname: "Milk", category: "Groceries", price: 30 },
  { productid: 9, productname: "Sneakers", category: "Footwear", price: 300 },
  { productid: 10, productname: "Microwave", category: "HomeAppliances", price: 150 }
];

// const electronicsOnly = products.filter(p => p.category === "Clothing");  //if we want a clothing category data

// const groupElectronics = electronicsOnly.reduce((acc, curr) => {
const groupElectronics = products.reduce((acc, curr) => {
  acc[curr.category] = acc[curr.category] || [];
  acc[curr.category].push(curr);
  return acc;
}, {});

console.log(groupElectronics);
