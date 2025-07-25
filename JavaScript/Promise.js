// A promise is an object representing the eventual completion or failure of an asynchronous operation  

let condition = false;
const myPromise = new Promise((resolve,reject)=>{
    setTimeout(function() {
        if (condition){
            resolve("Promise is resolved")
        }
        else{
            reject("Promise is Rejected")
        }
    }, 2000);
})

myPromise.then((result)=>{
    console.log(result)
}).
catch((error)=>{
    console.log(error)
}).finally(()=>
    console.log("Run in both cases")
)