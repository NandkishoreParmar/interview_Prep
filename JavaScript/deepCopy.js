// A deep copy means creating a completely separate copy of an object, including all nested objects or arrays inside it.
// So if you change the copied object, the original does not change.
// 🧠 Think of it like:
// 📄 Photocopying a document page by page, even pages inside folders — not just the cover.
const _ = require('lodash');

let obj = {
  name: "Rahul",
  address:{
    city:"Indore",
    state:"MP"
  },
  getAddress : function(){
    return `Hello i live in ${this.address.city}`
  }
}


let copy = _.cloneDeep(obj)
copy.address.city = "Ujjain"
console.log("original",obj)
console.log("copy",copy)
console.log(obj.getAddress())

