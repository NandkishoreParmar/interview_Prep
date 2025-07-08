

def findMinMax(arr):
  min = arr[0]
  max = arr[0]

  for i in range(1,len(arr)):
    # print(arr[i],end=" ")
    if (arr[i] < min):  # 1 < 2
      min = arr[i]
    if (arr[i] > max):  # 1 > 2
      max = arr[i]
  return min,max

arr = [2,1,3,5,7,8,4]

ans = findMinMax(arr)
print(ans)