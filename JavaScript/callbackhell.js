// callback hell
function eatSomething(callback){
        setTimeout(()=>{
            console.log("Dinner finesded")
            callback()
        },2000)
}

function dinner(callback){
    setTimeout(()=>{
        console.log("Yummmy dish")
        callback()
    },1000)
}

function gotobed(){
    console.log("Got to bed")
}

// eatSomething(function(){
//     dinner(function(){
//         gotobed()
//     })
// })

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
// implement promise 

function eat(){
  return new Promise ((resolve)=>
    setTimeout(()=>{
      console.log("eating done")
      resolve()
    },3000)
  )
}

function Din(){
  return new Promise((resol)=>{
    setTimeout(()=>{
      console.log("Dinnner done")
      resol()
    },2000)
  })
}

function goto(){
  console.log("Going to sleep")
}

eat()
.then(Din)
.then(goto)