
// rest operator
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(a)
console.log(rest)
function multiply(factor,...nums){
  return nums.map((n)=> n* factor)
}

console.log(multiply(3,1,2,3,4,5))


// spread operator

let a1 = [1,2,3]

let newarr = [...a1,4,5]
console.log(newarr)

let a2 = [9,9,9]

let merged = [...a1,...a2]
console.log(merged)