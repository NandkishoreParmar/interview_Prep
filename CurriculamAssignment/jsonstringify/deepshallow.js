function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Example usage
let original = {
  name: "Alice",
  hobbies: ["reading", "traveling"]
};

let cloned = deepClone(original);

// Modify the cloned object
cloned.hobbies.push("coding");

console.log("Original:", original);
// Output: Original: { name: "Alice", hobbies: ["reading", "traveling"] }

console.log("Clone:", cloned);
// Output: Clone: { name: "Alice", hobbies: ["reading", "traveling", "coding"] }
