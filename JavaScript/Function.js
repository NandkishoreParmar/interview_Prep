
// simple function statement  and function declaration are same 

simple()  // we call before initialization 
function simple(){
  console.log("Simple function")
}

simple()

// function expression
//fun()    //  one diffrence bt function statement and function expression ->  we can not call before its initialization 
let fun = function(){
  console.log("This is a function expression")
}

fun()

// Anonymous  function 
// function (){

// }

// named function expresion
var a = function hello(){
  console.log("hi")
} 
a()
// hello()  // we cannot call like this 

// first class function or first class citizen
function x(){
console.log("hello")
}
var firstclassfun = function (x){
return x
}
let newfun = firstclassfun(x)
newfun()