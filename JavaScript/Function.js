
// simple function statement

simple()  // we call before initialization 
function simple(){
  console.log("Simple function")
}

simple()

// function expression
fun()    //  one diffrence bt function statement and function expression ->  we can not call before its initialization 
let fun = function(){
  console.log("This is a function expression")
}

fun()