# A lambda function is an anonymous function. This function can have any number of parameters but, can have just one statement.

# In the example, we defined a lambda function(upper) to convert a string to its upper case using upper().

s1 = "Hello World"

s2 = lambda func: func.upper()
print(s2(s1))

num = lambda x: "positve" if x > 0 else "Negative" if x < 0 else "Zero"
print(num(2))
print(num(-3))
print(num(0))