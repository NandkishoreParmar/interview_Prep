
a = [1,2,3,4,5]

res = [val*2 for val in a]

print(res)


mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

res1 = [val for row in mat for val in row]

print(res1)

# Creates a list of numbers from 0 to 9
a = [i for i in range(10)]

print(a)