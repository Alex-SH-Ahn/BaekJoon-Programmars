lst = []
k = int(input())

for i in range(k):
  num = int(input())
  if (num != 0):
    lst.append(num)
  else:
    lst.pop()

print(sum(lst))