
def isprime(num):
  isflag = True
  if num <= 1:
    isflag = False
  else:
    for i in range(2,num):
      if num % i == 0:
        isflag = False
  if (isflag):
    # print("Prime")
    return True
  else:
    # print("Not a Prime")
    return False

def prime(num):
  for i in range(1,num):
    if isprime(i):
      print(i,end=" ,")

prime(50)

