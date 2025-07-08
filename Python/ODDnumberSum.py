
a = 1
total = 0 

while a <= 50:
  if a % 2 != 0:
    total += a
  a += 1

print(total)

oddsum = 0
for a in range(50):
  if a % 2!= 0:
    oddsum += a
print("for loop",oddsum)

num = 20
while num > 0:
  print(num,end=" ,")
  num -= 2

for i in range(20,0,-2):
  print(i,end=" ,")