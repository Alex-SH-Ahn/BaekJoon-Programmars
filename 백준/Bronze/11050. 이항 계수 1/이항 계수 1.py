def Fact(n):
  result = 1
  for i in range(1, n + 1):
    result *= i
  return result

n, k = input().split()
n = int(n)
k = int(k)

print(f'{Fact(n) / (Fact(k)*(Fact(n-k))):.0f}')