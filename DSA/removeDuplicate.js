
function RemoveDuplicate(arr) {
  let s = new Set();  // 'Set' should be capitalized
  let j = 0;
  for (let i = 0; i < arr.length; i++) {  // Removed `-1` to include last element
    if (!s.has(arr[i])) {
      s.add(arr[i]);  // Sets use 'add', not 'push'
      arr[j] = arr[i];
      j++;
    }
  }
  arr.length = j;  // Truncate the array to remove duplicates
  return arr;  // Return the modified array instead of the set
}

let arr1 = [1,2,2,3,3,4,5,5];
console.log(RemoveDuplicate(arr1));  // [1, 2, 3, 4, 5]


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let arr = [2,3,4,4,5,6,6];

let rd = 0;

for(let i=1; i<arr.length; i++){
    if(arr[rd] != arr[i]){
        rd++;
        arr[rd] = arr[i]
    }
}
let newarr = []
for (let i=0; i<=rd; i++){
    // console.log(arr[i])
    newarr.push(arr[i])
}

console.log(newarr)