
function Multiply(a){
  return function(b){
    return function(c){
      return a*b*c
    }
  }
}

let mult = Multiply(2)
let mullt = mult(2)
console.log(mullt(2))
console.log(Multiply(2)(2)(2))