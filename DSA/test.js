

let condition = false;

let myPromise = new Promise((resolve,reject)=>{

  setTimeout(() => {
    if(condition){
      resolve("Promise is resolved")
    }else{
      reject("Promise is rejected")
    }
  }, 2000);

})

myPromise.then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.log(error)
})