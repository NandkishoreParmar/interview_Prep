

let promise = new Promise((res,rej)=>{

  let condition = true;
  if (condition){
    res("Promise is reolved")
  }else{
    rej("Promise is rejected")
  }
})

promise.then((res)=> console.log(res))
.catch((err)=> console.log(err))