function largest(arr){
  return Math.max(...arr)
}

function smallest(arr){
  return Math.min(...arr)
}

function manualLargest(arr){
  let largest = arr[0];
  for (let i=1; i<arr.length; i++){
      if (arr[i] > largest){
          largest = arr[i]
      }
  }
  return largest
}

function manualsmallest(arr){
  let small = arr[0];
  for (let i=1; i<arr.length; i++){
      if (arr[i] < small){
          small = arr[i]
      }
  }
  return small
}

let arr = [1,2,3,4,5,6,7,8,9]
// console.log(largest(arr))
// console.log(smallest(arr))
console.log(manualLargest(arr))
console.log(manualsmallest(arr))