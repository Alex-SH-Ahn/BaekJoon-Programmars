import sys
sys.setrecursionlimit(10**6)

n = int(input())

def lines(n):
    if n == 0:
        return
    else:
        print(n)
        lines(n-1)

lines(n)