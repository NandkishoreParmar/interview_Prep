def bubble(arr):
  n = len(arr)
  for i in range(n):
    swapped = False
    for j in range(0,n-i-1):
      if arr[j] > arr[j+1]:
        arr[j], arr[j+1] = arr[j+1], arr[j]
        swapped = True
    if not swapped:
      break
  return arr

arr = [40,30,20,10]
ans = bubble(arr)

print(ans)