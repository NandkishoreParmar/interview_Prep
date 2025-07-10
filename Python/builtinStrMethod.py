
stri = "Hello world Hello"

n = len(stri)
print(n)

title = stri.title()
print(title)

count = stri.count("Hello")  #count (string,start,end)
print(count)

index = stri.index("world")  #index(string,start,end)
print(index)

strt = stri.startswith("He") 
print(strt)

end = stri.endswith("lo")
print(end)

replace = stri.replace("Hello","Hi")
print(replace)

tr2 = " "
join = tr2.join(stri)
print(join)

split = stri.split()
print(split)