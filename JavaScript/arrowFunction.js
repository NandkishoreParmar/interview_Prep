
// single function
let add = function hello (a,b){
  console.log("The sum of a + b", a+b)
}

add(2,2)

let name = "Ravi"
let user ={
  "name":"Ram",
  valueofname: function(){
    console.log("My name is ",this.name)
  }

}
user.valueofname()


// arrrow function 
let sub = (a,b)=> console.log("The sub of a-b",a-b)

sub(2,2)

let singlepar = name => console.log("Hello",name)
singlepar("rahul")

var age = 30
let user2 = {
  "age":23,
  knowage : ()=> console.log("My age is ",this.age)
}

user2.knowage()