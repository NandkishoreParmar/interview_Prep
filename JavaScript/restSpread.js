
// rest operator
//  Destructuring with Rest (Array)
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]

// Destructuring with Rest (Object)
const { a, ...restObj } = { a: 1, b: 2, c: 3 };
console.log(a);       // 1
console.log(restObj); // { b: 2, c: 3 }

// Multiple Fixed + Rest Parameters
function profile(name, age, ...skills) {
  console.log(`Skills of ${name}:`, skills);
}
profile("John", 30, "JS", "React", "Node"); 
// Skills of John: [ 'JS', 'React', 'Node' ]

// Rest in Function Parameters
function greet(greeting, ...names) {
  console.log(names);
}

greet("Hello", "Alice", "Bob", "Charlie"); 
// ['Alice', 'Bob', 'Charlie']






// spread operator++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  Spread in Array Literal
let a1 = [1,2,3]

let newarr = [...a1,4,5]
console.log(newarr)

let a2 = [9,9,9]
// Merging Multiple Arrays
let merged = [...a1,...a2]
console.log(merged)

// Spread in Function Call
function add(a, b, c) {
  return a + b + c;
}

const nums = [10, 20, 30];
console.log(add(...nums)); // 60

// Spread in Object
const obj1 = { name: "John" };
const obj2 = { ...obj1, age: 25 };
console.log(obj2); // { name: 'John', age: 25 }

// Cloning an Array
const original = [1, 2, 3];
const clone = [...original];
console.log(clone); // [1, 2, 3]
