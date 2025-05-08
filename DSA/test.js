

function isValid(str){
  let stack = []
  let map = {
    '(':')',
    '[':']',
    '{':'}'
  }
  for (let char of str){
    if(map[char]){
      stack.push(map[char])
    }else{ 
      if (char !== stack.pop()){
        return false
      }
    }
  }
  return stack.length == 0
}


console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("([)]"));     // false