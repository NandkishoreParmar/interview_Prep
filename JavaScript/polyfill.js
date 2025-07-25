
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