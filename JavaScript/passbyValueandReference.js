

//call by value = primitive-> number/string/boolean        //  call by reference =  non - primitive-> object/arr  

let a = 10;
let b = a

b = a+2

console.log(a)
console.log(b)

let str1 = "hello";
let str2 = str1

str2 = "hi"
console.log(str1)
console.log(str2)


// Non - primitive     call by reference

let arr1 = [1,2,3,4]
let arr2 = arr1          // [...arr1]

arr2.push(5)

console.log(arr1)
console.log(arr2)

let obj1 = {
  name:"rk",
  age:"34"
}

let obj2 = obj1  // {...obj1}

obj2.age = 23
console.log(obj1)
console.log(obj2)