function isPrime(n){
  let isFlag = true
  if(n <= 1){
      isFlag = false
  }
  else{
      for (let i=2; i<=n-1; i++){
          if(n % i == 0){
              isFlag = false
              break
          }
      }
  }
  if (isFlag){
      // console.log(n + " is a prime number")
      return true
  }
  else{
      // console.log(n + " is not a prime number")
      return false
  }
}

// isPrime(5)
function primeInRange(n){
  for (let i=2; i<=n; i++){
     if(isPrime(i)){ 
          process.stdout.write(i + " ")
      
     }
  }
}

primeInRange(50)