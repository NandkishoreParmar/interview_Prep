
strr = "aabdglfkgfgnm"

dic = {}

for char in strr:
  # print(char)
  if char in dic:
    dic[char] += 1
  else:
    dic[char] = 1

print(dic)

for key in dic:
  print(key ,"->",dic[key])



