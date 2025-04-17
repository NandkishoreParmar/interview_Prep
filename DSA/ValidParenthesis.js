function isValid(s) {
  const stack = [];
  const map = {
      '(': ')',
      '{': '}',
      '[': ']'
  };

  for (let char of s) {
      if (map[char]) {
          // If char is an opening bracket, push its corresponding closing bracket
          stack.push(map[char]);
      } else {
          // If char is a closing bracket, check if it matches the top of the stack
          if (char !== stack.pop()) {
              return false;
          }
      }
  }

  // If stack is empty, all brackets matched
  return stack.length === 0;
}
console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("([)]"));     // false