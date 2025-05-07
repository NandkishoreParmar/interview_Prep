
function twoPointer(arr,k){
  // let indexes = []
  for (let i=0; i<arr.length-1; i++){
    for (let j=i+1; j<arr.length; j++){
      let sum = arr[i] + arr[j]
      if (sum == k){
        // indexes.push(i,j)
        return (i,j)
      }
    }
  }
  return indexes
}



let ans = twoPointer([1,10,3,5,4],8)
console.log(ans)