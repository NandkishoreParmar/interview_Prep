
let users = [
    { user: "A", age: 20 },
    { user: "B", age: 50 },
    { user: 'C', age: 20 },
    { user: "D", age: 20 },
];
const ans=users.reduce((acc, ele)=>{
   if(acc[ele.age]!=null){      //This line checks whether a key already exists in the accumulator object acc for the current user's age.acc[ele.age] tries to access the value (an array) for that particular age.!= null checks if that value is not null or undefined.
       acc[ele.age].push(ele.user);
   }else{
       acc[ele.age]=[ele.user];
   } 
   return acc;
   
},{})
console.log(ans)

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
