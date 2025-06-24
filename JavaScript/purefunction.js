

function pure(a,b){
  console.log(a+b)
}

pure(3,4)  // 7
pure(3,4)  // 7
pure(3,4) // 7



let total = 0;
function impure(a,b){
  total += a + b
  console.log(total)
}

impure(2,2)  // 4
impure(2,2)  // 8
impure(2,2)  // 12
