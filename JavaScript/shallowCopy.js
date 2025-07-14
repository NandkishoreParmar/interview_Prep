// # Shallow copy is used for single object it is not used for nested object 

let obj = {
  name: "Rahul",
  address:{
    city:"Indore",
    state:"MP"
  },
  getAddress : function(){
    return "Hello"
  }
}

let copy = {...obj}
copy.name = "Ram"
copy.address.city = "Ujjain"
console.log(obj)
console.log(copy)
