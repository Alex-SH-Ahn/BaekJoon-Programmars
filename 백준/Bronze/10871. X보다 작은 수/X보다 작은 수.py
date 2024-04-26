import sys

n, x = map(int, sys.stdin.readline().rstrip().split())

numbers = sys.stdin.readline().rstrip()
data = list(map(int, numbers.split()))

result = []
for i in range(len(data)):
    if data[i] < x:
        result.append(str(data[i]))

print(' '.join(result))