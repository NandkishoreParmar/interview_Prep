class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} eats`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  } // Calls Animal's constructor
  bark() {
    console.log("Barking!");
  }
}

const dog = new Dog("Ronny");
dog.eat(); // Inherited
dog.bark(); // Own method
