row = 5

for i in range(row+1):
  print("* "*i)

print("---------------------")
for i in range(row,0,-1):
  print("* "*i)

for i in range(1,row+1):
  for j in range(1,i+1):
    print(j,end=" ")
  print()
print("----------------")
for i in range(1,row+1):
  for j in range(1,i+1):
    print(i,end=" ")
  print()

print("--------------------------------------")

num = 1
for i in range(row+1):
  for j in range(1,i+1):
    print(num,end=" ")
    num += 1
  print()
print(" -------------------------------------------")
rows = 5
for i in range(1, rows + 1):
    print(" " * (rows - i) + "* " * i)

print("---------------------------------------")
for i in range(rows,0,-1):
  print(" " * (rows-i) + "* " * i)


