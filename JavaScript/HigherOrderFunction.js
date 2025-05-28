

// forEach return undefined
let arr = [1,2,3,4,5,6];

let narr = arr.forEach((el,i,arr)=>
  console.log(el,i,arr)
)

console.log("+++++++++++++")
//map
// map create a duplicate copy it doessnot change the original array
let maparr = arr.map((el,i,arr)=>{
  return el*2    // el % 2==0   
})
console.log(maparr)
console.log(arr)

// filter 
let fruits = ["Apple","Banana","Grapes","Papaya"];

function searchFruits(fruit){
  let fruit1 = fruits.filter((el,i,arr)=>{
    return el == fruit
  
  })
  // console.log(fruit1)
  if (fruit1.length == 0){
    console.log("Not found")
  }else{
    console.log(fruit1)
  }

}
searchFruits("Apples")

//reduce
console.log("Reduceeeeeeeeeeeeeeeeeeeee")
let newArr = [2,3,4];

function sumofN(){
  let sum = newArr.reduce((acc,curr)=> {
    return acc = acc + curr
  },""  )//10)
  console.log(sum);
}
sumofN();


console.log("Method Chaining...............................................");
let products = [
  {
    name: "earphone",
    price: 3500,
    category:"electronics"
  },
  {
    name: "bluetooth",
    price: 300,
    category:"electronics"
  },{
    name: "cap",
    price: 350,
    category:"cloths"
  },{
    name: "shirt",
    price: 500,
    category:"cloths"
  },{
    name: "earbuds",
    price: 200,
    category:"electronics"
  },
]

let category = products.filter((el,i,arr)=>{
  return el.category == "electronics"
})// .reduce

console.log(category)

let elect = products.filter((el,i,arr)=>{
  return el.category == "electronics"
}).reduce((acc,curr)=>{
  return acc = acc + curr.price
},0)
console.log(elect)