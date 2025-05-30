function personInfo() {
  console.log("Name: " + this.name + ", Age: " + this.age);
}

let person = {
  name: "Alice",
  age: 25
};

// Use call() to call personInfo with the person object as context
personInfo.call(person);
// Output: Name: Alice, Age: 25
