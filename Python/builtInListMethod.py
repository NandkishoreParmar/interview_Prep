
lis = [1,2,3,4,5,1]
print(lis)
leng= len(lis)

print(leng)

strr = "aeiou"

creli = list(strr)
print(creli)

addEle = lis.append(6)
print(lis)

count = lis.count(1)
print(count)

remove = lis.remove(1)
print(lis)

dele = lis.pop(2)   # index
print(dele)
print(lis)

reverse = lis.reverse()
print(lis)

sor = lis.sort(reverse=True)
print(lis)

sorte = sorted(lis)  #created new not change original
print("llist2",sorte)

minn = min(lis)
print(minn)

maxx = max(lis)
print(maxx)

summ = sum(lis)
print(summ)