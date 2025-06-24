// Constructor functions are used to create objects in javascript.

// When do we use constructor functions?

// If we want to create multiple objects having similar properties and methods, constructor functions are used.

// function name first letter always will be capital

function Person(name,age,gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
}

let user1 = new Person("Rahul",23,"Male")
let user2 = new Person("maya",22,"Female")

console.log(user2)
