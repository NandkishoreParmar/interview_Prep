// forEach return undefined
let arr = [1, 2, 3, 4, 5, 6];
console.log("foreach+++");
let narr = arr.forEach((el, i, arr) => console.log(el, i, arr));

console.log("+++++++++++++ Map");
//map
// map create a duplicate copy it doessnot change the original array
let maparr = arr.map((el, i, arr) => {
  return el * 2; // el % 2==0
});
console.log(maparr);
console.log(arr);

const users = [
  {fisrtname: "Rahul",secondname: "Pawar",age: 27},
  {fisrtname: "Ram",secondname: "sastri",age: 50},
  {fisrtname: "Raman",secondname: "Parmar",age: 75},
  {fisrtname: "Pawan",secondname: "sharma",age: 27}
];
const fullname = users.map((el)=> el.fisrtname + " " + el.secondname  )
console.log(fullname)

console.log("+++ filter");
// filter
let ageless30 = users.filter((el)=> el.age < 30).map((first)=> first.fisrtname)
console.log(ageless30)
//["Rahul","Pawan"]



let findname = users.reduce((acc,curr)=>{
  if (curr.age < 30){
    acc.push(curr.fisrtname)
  }
  return acc
},[])
console.log("firstname",findname)
//["Rahul","Pawan"]



let fruits = ["Apple", "Banana", "Apple", "Grapes", "Papaya"];

function searchFruits(fruit) {
  let fruit1 = fruits.filter((el, i, arr) => {
    return el == fruit;
  });
  // console.log(fruit1)
  if (fruit1.length == 0) {
    console.log("Not found");
  } else {
    console.log(fruit1);
  }
}
searchFruits("Apple");

//reduce
console.log("Reduceeeeeeeeeeeeeeeeeeeee");
let newArr = [2, 3, 4];

function sumofN() {
  let sum = newArr.reduce((acc, curr) => {
    return (acc = acc + curr);
  }, ""); //10)
  console.log(sum);
}
sumofN();

const agepersoncount = users.reduce((acc,curr)=>{
  if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age]   // += 1  
  }else{
    acc[curr.age] = 1
  }
  return acc
},{})

console.log(agepersoncount);
//putput ; {27:2 , 25:1, 22:1}

console.log("Method Chaining...............................................");
let products = [
  {
    name: "earphone",
    price: 3500,
    category: "electronics",
  },
  {
    name: "bluetooth",
    price: 300,
    category: "electronics",
  },
  {
    name: "cap",
    price: 350,
    category: "cloths",
  },
  {
    name: "shirt",
    price: 500,
    category: "cloths",
  },
  {
    name: "earbuds",
    price: 200,
    category: "electronics",
  },
];

let category = products.filter((el, i, arr) => {
  return el.category == "electronics";
}); // .reduce

console.log(category);

let elect = products
  .filter((el, i, arr) => {
    return el.category == "electronics";
  })
  .reduce((acc, curr) => {
    return (acc = acc + curr.price);
  }, 0);
console.log(elect);
