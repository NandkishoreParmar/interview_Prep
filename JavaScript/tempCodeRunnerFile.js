const products = [
  { productid: 1, productname: "iPhone", category: "Electronics", price: 400 },
  { productid: 2, productname: "Laptop", category: "Electronics", price: 400 },
  { productid: 3, productname: "Shirt", category: "Clothing", price: 30 },
  { productid: 4, productname: "Jeans", category: "Clothing", price: 300 },
  { productid: 5, productname: "Blender", category: "Home Appliances", price: 500 },
  { productid: 6, productname: "Headphones", category: "Electronics", price: 150 },
  { productid: 7, productname: "Banana", category: "Groceries", price: 2 },
  { productid: 8, productname: "Milk", category: "Groceries", price: 30 },
  { productid: 9, productname: "Sneakers", category: "Footwear", price: 300 },
  { productid: 10, productname: "Microwave", category: "Home Appliances", price: 150 }
];

// const electronicsOnly = products.filter(p => p.category === "Clothing");  if we want a clothing category data

const groupElectronics = products.reduce((acc, curr) => {
  acc[curr.category] = acc[curr.category] || [];
  acc[curr.category].push(curr.productname);
  return acc;
}, {});

console.log(groupElectronics);
