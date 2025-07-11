
def removeDuplicate(arr):
  n = len(arr)
  rd = 0
  for i in range(1,n):
    if arr[rd] != arr[i]:
      rd += 1
      arr[rd] = arr[i]
  newarr = []
  for i in range(rd+1):
    newarr.append(arr[i])
  print(newarr)


arr = [1,1,2,2,3,4,4,5,6]
removeDuplicate(arr)

