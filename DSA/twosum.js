


function twoSum(arr,k){

  for (let i=0; i<arr.length; i++){
    for (let j=i+1; j<arr.length; j++){
      if (arr[i] + arr[j] == k){
        console.log(arr[i],arr[j])
        return 
      }
    }
  }
  console.log("Not getting any pair ")
}

// twoSum([1,2,3,4,5],6)

function twoPointer(arr,k){
  arr.sort((a,b)=> a-b);
  // console.log(arr)
  let left = 0;
  let right = arr.length-1;
  while (left < right){
    let sum = arr[left] + arr[right] 
    if (sum == k){
      console.log(left,right)
      return 
    }
    else if (sum > k){
      right --
    }
    else{
      left ++
    }
  }
  return console.log("not getting any pair")
}
twoPointer([1,10,3,5,4],8)

