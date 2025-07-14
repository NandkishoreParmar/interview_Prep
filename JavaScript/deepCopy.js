
const _ = require('lodash');



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

let copy = _.cloneDeep(obj)

console.log(copy)