

function isValid(s){
  let st = [];
  for (i=0; i < s.length; i++){
    let ch = s[i];
    if ((ch == '(') || (ch == '[') || (ch == '{')){
      st.push(ch)
    }
    else{
      if (st.length === 0){
        return false
      }
      let temp = st.pop();
      if (ch == ')' && temp != '('){
        return false
      }
      if (ch == ']' && temp != '['){
        return false
      }
      if (ch == '}' && temp != '{'){
        return false
      }
      
    }

  }
  return st.length === 0;
}

let s = "(((]))"
console.log(isValid(s))  // false
console.log(isValid("((("))  // false
console.log(isValid("()[]{}"))  // true
console.log(isValid("([{}])"))  // true

