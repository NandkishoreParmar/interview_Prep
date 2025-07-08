
char = input()  #madam
rev = ""
for i in range(len(char)-1,-1,-1):
  rev = rev + char[i]

# print(rev)
if (char == rev):
  print("Yes it is Palindrome")
else:
  print("No it is not a Palindrome")


# another logic 

reverse = ""
for ch in char:
  reverse = ch + reverse

print(reverse)