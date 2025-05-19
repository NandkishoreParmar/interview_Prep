function secondHighest(s) {
  let firstMax = -1;  // Largest number found
  let secondMax = -1; // Second largest number found

  for (let char of s) {
      if (char >= '0' && char <= '9') { // Check if it's a digit
          let num = Number(char);

          if (num > firstMax) {  
              secondMax = firstMax; // Update second max
              firstMax = num;  // Update first max
          } else if (num > secondMax && num < firstMax) {
              secondMax = num;  // Update second max if num is unique
          }
      }
  }

  return firstMax;
}

// Example Cases
console.log(secondHighest("dfa12321afd")); // Output: 2
console.log(secondHighest("abc1111"));     // Output: -1
console.log(secondHighest("87329"));       // Output: 8
console.log(secondHighest("abc"));




function secondhighest (arr){

  let firstmax = arr[0];
  let secondmax = arr[0];

  for (let i=1; i<arr.length; i++){
    if (arr[i] > firstmax){
      secondmax = firstmax
      firstmax = arr[i]
    }else if (arr[i] > secondmax && arr[i] < firstmax){
      secondmax = arr[i]
    }
  }

  console.log("firstmax", firstmax);
  console.log("secondmax", secondmax)
}

let arr = [2,1,0,8,9,10,5,5,6,9,3,4,8]
secondhighest(arr)