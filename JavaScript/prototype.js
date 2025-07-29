// What is a Prototype?
// In JavaScript, every object has a hidden property called [[Prototype]] (can be accessed using __proto__), which refers to another object.
// This object can have properties and methods that are shared among other objects.

// ➡️ You can think of it as a blueprint or parent object.
const person = {
  greet: function() {
    console.log("Hello!");
  }
};

const student = Object.create(person) ; // student inherits from person  is similar const student.__proto__= person
student.name = "John";
// student didn’t have greet(), but it found it through its prototype: person.
student.greet(); // Output: Hello!


// What is Prototypal Inheritance?
// It is the mechanism by which an object can inherit properties and methods from another object via the prototype chain.

// 🔗 Prototype Chain:
// If a property or method is not found in the current object, JavaScript looks for it in the prototype, and then its prototype, and so on — this is called the prototype chain.
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

const dog = new Animal("Dog");
dog.speak(); // Dog makes a noise.
// dog object inherited speak() from Animal.prototype.
