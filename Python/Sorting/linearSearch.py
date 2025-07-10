
def linearSearch(arr,target):
  n = len(arr)
  for i in range(n):
    if arr[i] == target:
      return i
  return -1

arr = [12,11,4,76,23,54]
target = 76
ans = linearSearch(arr,target)
print(ans)