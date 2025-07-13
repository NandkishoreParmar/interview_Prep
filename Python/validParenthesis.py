
balance = "([{}])"

def valid(str):
  stack = []
  for i in range(len(str)):
    ch = str[i]
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

print(valid("((("))        # False
print(valid("()[]{}"))     # True
print(valid("([{}])"))     # True
print(valid("([)]"))       # False
print(valid("(((]))"))     # False
print(valid(")))"))        # False
