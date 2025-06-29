
let condition = false;

let promise = new Promise((res,rej)=>{
  setTimeout(()=>{
if (condition){
  res("Promise is resolved after 2 sec")
}else{
  rej("Promise is rejected after 2 sec")
}
  },2000)
})


promise.then((result)=>{
  console.log(result)
}).catch((erro)=>{
  console.log(erro);
}).finally(()=>{
  console.log("Run on both condition")
})