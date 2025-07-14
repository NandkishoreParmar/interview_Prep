
function NonRepeating(str){
  let count = {}
  for (let char of str){
    if (char in count){
      count[char] ++
    }else{
      count[char] = 1
    }
  }
  newstr = []
  for (let k of Object.keys(count)){
    if (count[k] == 1){
          newstr.push(k)
    }
  }
  console.log(newstr.join(" "))  // convert array to string
  
}

st = "aabbccdef"
NonRepeating(st)