// A polyfill in JavaScript is a piece of code that provides functionality for features that are not natively supported in certain web browsers. The term "polyfill" is derived from the idea of filling in the gaps or providing a fallback for missing functionalities. The goal is to make modern JavaScript code compatible with older browsers or environments that do not support certain features or APIs.
// pollyfill for map

Array.prototype.mymap = function(logic){
  let output = []
  for (let i=0; i<this.length; i++){
    output.push(logic(this[i]))
  }
  return output;
}

const arr = [1,2,3,4]
const ans = arr.mymap((el)=>{
  return el*2
})

console.log(ans)