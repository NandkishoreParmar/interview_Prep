
let user1 = {
  firstName : "Rahul",
  lastName : "Parmar",
  
}

let printFullName= function(hometown,state){
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", "+ state)
  }

printFullName.call(user1,"Indore","Madhya Pradesh")
printFullName.apply(user1,["Indore","M.P"])

let binding = printFullName.bind(user1,"Bhopal","M.P")
binding()