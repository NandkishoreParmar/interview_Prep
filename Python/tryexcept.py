
# Exceptional handling done in Python?
n = 10

try:
  res = n/0
  print(res)
except:
  print("n is not divisible by zer0")
finally:
  print("run on both condition")