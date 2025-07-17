function NonRepeatingElement(s){
  let count = {}
  for (let char of s){
    if (char in count){
      count[char] ++
    }else{
      count[char] = 1
    }
  }
  // console.log(count)
  let unnique = []
  for (let key of Object.keys(count)){
    if (count[key] == 1){
      unnique.push(key)
    }
  }
console.log(unnique.join(""))
}

NonRepeatingElement("aabbccdef")