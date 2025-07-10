def binarySearch(arr,target):
  n = len(arr)
  left,right = 0, n-1
  while left <= right:
    mid = (left+right)//2
    if arr[mid] == target:
      return mid
    elif arr[mid] < target:
      left = mid + 1
    else:
      right = mid - 1 
  return -1


arr = [1,2,3,4,5,6]
target = 5

ans = binarySearch(arr,target)
print(ans)