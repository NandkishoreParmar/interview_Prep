
function secondLargest(arr){
  max = -Infinity
  second = -Infinity
  for (let num of arr){
    if (num > max){
      second = max
      max = num
    }else if (num < max  && num > second){
      second = num
    } 
  }
  console.log(second)
}

arr = [7,6,8,4,5,3,2,4,5,6,10]
secondLargest(arr)