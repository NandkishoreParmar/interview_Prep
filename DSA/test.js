

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