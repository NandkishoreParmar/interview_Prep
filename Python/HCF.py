
num1 = 25      #  int(input())
num2 = 15      #  int(input())

while num2 != 0:
  num1,num2 = num2, num1 % num2

print(num1)