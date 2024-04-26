import sys
tc = int(sys.stdin.readline().rstrip())

numbers = sys.stdin.readline().rstrip()
data = list(map(int, numbers.split()))
num = int(sys.stdin.readline().rstrip())
cnt = 0

for i in range(tc):
    if data[i] == num:
        cnt += 1
print(cnt)
