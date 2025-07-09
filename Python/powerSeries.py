
n = 5

sumofseries = 0

for i in range(n):
  sumofseries += 2 ** i    # 2^0 + 2^1 + 2^2 + 2^3 + 2^4 + 2^5  == 31

print(sumofseries)


def recursive(n):
  total = 0
  if n == 1:
    return 1
  return 2 ** (n-1) + recursive(n-1)

print(recursive(n))