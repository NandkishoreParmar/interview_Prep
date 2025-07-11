def twosum(arr, target):
    n = len(arr)
    for i in range(n):
        for j in range(i + 1, n): 
            if arr[i] + arr[j] == target:
                print("True")
                return
    print("False")  # also fix this: should print instead of returning string

def twopointer(arr,target):
    arr.sort()
    print(arr)
    n = len(arr)
    l = 0
    r = n-1

    while l < r:
        currentsum = arr[l] + arr[r]
        if currentsum == target:
            print("true")
            print(l,r)
            return
        elif currentsum < target:
            l += 1
        else:
            r -= 1
    print("false")
arr = [2,3,1,5,6]
target = 7
twosum(arr,target)
twopointer(arr,target)