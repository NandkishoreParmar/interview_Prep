const student = {
  name: "Akshay",
  printName:function(){
    console.log(`called name is ${this.name}`)
    // cont x : ()=>{
    //   console.log(this)  // in this arrow function this keyword behave like a normal function like student object becaue it have inside a function that is nested if a single arrow function that time this keyword refers to undefined
    // }
  }
}

student.printName()
const student2 = {
  name:"Aman"
}

// student2.printName()  // it gives error because student2 does'not have printName method  so with the help of call,bind and apply we can use that method also 

// borrowing method from other object 
student.printName.call(student2)
student.printName.apply(student2)



let obj1 = {
   a:10,
   x:function(){
    console.log(this)  // this refers to the obj1
   }
}
obj1.x()
 // this keywords
let name = "RAm";
let user = {
  name: "Raju",
  greet : function (){
    // console.log(`Hello ${name}`);  // when name is not defined in global scope so we will get a eror
    console.log(`Hello ${this.name}`) // this.name is find its outer function  // raju
    // console.log(this)   // inside function this is refers to the respected whole object
  }
}

user.greet();

console.log("+++++++++++++++++++++++++++++++++++++++++")

console.log("Call Methods .........");
let person = {
  // salutation : "Mr.",
  detail : function (city, country){
    console.log(`${this.firstname} ${this.lastname} from ${city}, ${country}`)  //${person.salutation} 
  }
}

let john = {firstname:"Nandkishore",lastname:"Parmar"};
person.detail.call(john,"Indore","India");        //    call(object ,parameter)

console.log("Apply Methods .................................");
let username = {
        productdetail: function (price,categories){
          console.log(`${this.productname} have a price of ${price} is a categories of ${categories}`)
        }
}

let productdet = {productname:"Mobile"}
username.productdetail.apply(productdet,[5000,"Electronics"]);

console.log("Bind Methods..............................");

let det = username.productdetail.bind(productdet,5000,"Electronics");
det();




// ++++++++++++++++++++++++++++++++++++++++++++/

var obj = {
    name:  "vivek",
    getName:function(){
    console.log(this.name);
  }
}

obj.getName();   //it refers to the obj object 

// ++++++++++++++++++++++++++++++++++++++
var obj = {
    name:  "vivek",
    getName:function(){
    console.log(this.name);
  }

}

var getName = obj.getName;

var obj2 = {name:"akshay", getName };
obj2.getName();   //it refers to the obj2 object inside obj2 name is akshay


// +++++++++++++++++++++++++++++++++++++++++++


const person1 = {
    "firstname":"Masai",
    "lastname": "School",
    getAddress: function (town,country){
        console.log(`my first name is ${this.firstname} and last name is ${this.lastname} and i am from ${town}, ${country}`);
    }
}

const person2 = {
    "firstname": "Rahul",
    "lastname":"Parmar"
}
person1.getAddress()

person1.getAddress.call(person2,"Bhopal","Indore") // call method
person1.getAddress.apply(person2,["indore", "india"]); // apply method 
let binndexample = person1.getAddress.bind(person2,"betma", "india"); // bind method 
binndexample()



