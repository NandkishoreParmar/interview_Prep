// Pass by Value
// When a variable is passed to a function, only its value is copied, not the original variable.
// So, changes inside the function don’t affect the original variable.
// 👉 When you pass a primitive value (like number, string, boolean), a copy is sent.
// 🔸 Changes don’t affect the original.

// Example:
let a = 10;

function change(val) {
  val = 20;
}
change(a);
console.log(a); // 10 ✅ (not changed)

// Pass by Reference
// When an object or array is passed to a function, its reference (address in memory) is passed.
// So, changes inside the function will affect the original object.
// 👉 When you pass an object or array, the reference (memory address) is sent.
// 🔸 Changes do affect the original.

// Example:
let obj = { name: "Nandu" };

function update(o) {
  o.name = "Parmar";
}
update(obj);
console.log(obj.name); // Parmar ✅ (changed)


// Final One-liner Summary (Great for Interviews):
// 🔹 Primitives are passed by value → copy only
// 🔹 Objects/Arrays are passed by reference → changes affect original