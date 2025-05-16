
function charCount(str){
  let charCount = {}

  for(let char of str){
    if(charCount[char]){
      charCount[char]++
    }
    else{
      charCount[char]=1
    }
  }
  return charCount
}
const string = "hello"
console.log(charCount(string))