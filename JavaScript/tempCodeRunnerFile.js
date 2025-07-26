



let promise  = new Promise((res,rej)=>{

  let condtion = false;

  if(condtion){
    res("promise is resolved")
  }else{
    rej("Promise is rejected")
  }
})

promise.then((res)=>{
  console.log(res)
}).catch((err)=>{
  console.log("error",err)
})


let original = [1, 2, 3];
let copy = [...original];
copy.push(4);
console.log(original, copy);
Vijendra Singh
1:18 PM
const obj = {
  name: 'Vijendra',
  greet: function () {
    return () => console.log(this.name);
  }
};
const greetFn = obj.greet();
greetFn();
You
1:25 PM
value by reference
Gourav Choudhary
1:25 PM
console.log([] + []);       // ?
console.log([] + {});       // ?
console.log({} + []);       // ?
console.log({} + {});       // ?
You
1:25 PM
prototype
Vijendra Singh
1:28 PM
question --> takes a word and returns an array of all the letters
takes a word and returns an array of all the letters
//  *       not found in the alphabet

composes an array of functions into a function that passes a value through a pipeline of functions

const pipeline = [
  (num) => num - 1,
  (num) => num * 10,
  (num) => `${num} as a string`,
];

const composed = compose(pipeline);

console.log(composed(4));