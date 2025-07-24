// Hoisting means variable and function declarations are moved to the top of their scope during compilation.
// So, var a is hoisted like this:
// var a;
// console.log(a);
// a = 10;

console.log(a);
var a = 10;



// Why? (Concept)
// let and const are hoisted too, but not initialized. They are in a "temporal dead zone" from the start of the block until the line where they are defined.

// So trying to access b before let b = 5 results in an error.

name = "kfdkf"
const obj = {
//   name: "JS",
  regularFunc: function () {
    console.log(this.name);
  },
  arrowFunc: () => {
    console.log(this.name);
  }
};

obj.regularFunc();
obj.arrowFunc();
