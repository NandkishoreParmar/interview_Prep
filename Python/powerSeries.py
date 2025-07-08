
n = 5

sumofseries = 0

for i in range(n):
  sumofseries += 2 ** i    # 2^0 + 2^1 + 2^2 + 2^3 + 2^4 + 2^5  == 31

print(sumofseries)