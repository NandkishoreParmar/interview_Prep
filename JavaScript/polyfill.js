// A polyfill in JavaScript is a piece of code that provides functionality for features that are not natively supported in certain web browsers. The term "polyfill" is derived from the idea of filling in the gaps or providing a fallback for missing functionalities. The goal is to make modern JavaScript code compatible with older browsers or environments that do not support certain features or APIs.
// pollyfill for map
// forEach 
console.log("+++++++++++++++forEach++++++++++++++++++++++++++++++")
Array.prototype.myforEach = function (callback){
  for (let i=0; i<this.length; i++){
    callback(this[i],i,this)
  }
}

let arr2 = [2,3,4,5,6]
let ans1 = arr2.myforEach((el,i,arr)=> console.log(arr))


// map
console.log("+++++++++++++++map++++++++++++++++++++++++++++++")
Array.prototype.mymap = function(callback){
  let output = []
  for (let i=0; i<this.length; i++){
    output.push(callback(this[i],i,this))
  }
  return output;
}

const arr = [1,2,3,4]
const ans = arr.mymap((el,i,arr)=>{
  return el*2
})

console.log(ans)


// filter

Array.prototype.myfilter = function (callback){
  let output = []
  for (let i=0; i<this.length; i++){
    if(callback(this[i],i,this)){
      output.push(this[i])
    }
  }
  return output
}
let arr3 = [2,3,4,5,6]
let ans3 = arr3.myfilter((el)=>{
  return el < 5
})

console.log(ans3)

//  Reduce   
console.log("+++++++++++++++Reduce++++++++++++++++++++++++++++++")
let arr4 = [1,2,3,4]

Array.prototype.myreduce = function(callback,initialValue=null){
        let acc = initialValue;
        for (let i=0; i<this.length; i++){
          acc = callback(acc,this[i],i,this)
        }     
        return acc;         
}

let ans4 = arr4.myreduce((acc,el)=>{
  return acc + el
})

console.log(ans4)
