


def isValid(s):
  stack = []
  for i in range(len(s)):
    ch = s[i]
    if ch == "(" or ch == "{" or ch == "[":
      stack.append(ch)
    else:
      if len(stack) == 0:
        return False
      temp = stack.pop()
      if ch == ")" and temp != "(":
        return False
      if ch == "}" and temp != "{":
        return False
      if ch == "]" and temp != "[":
        return False
  return len(stack) == 0

print(isValid("((("))        # False
print(isValid("()[]{}"))     # True
print(isValid("([{}])"))     # True
print(isValid("([)]"))       # False
print(isValid("(((]))"))     # False
print(isValid("((()))[{}]{}"))
