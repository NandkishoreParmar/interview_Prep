
strr = "Python is a Fun"
vowels = "aeiouAEIOU"
count = {}

for char in strr:
  if char in vowels:
    if char in count:
      count[char] += 1
    else:
      count[char] = 1
print(count)

