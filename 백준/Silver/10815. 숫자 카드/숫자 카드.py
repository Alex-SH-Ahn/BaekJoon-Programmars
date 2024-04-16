n = int(input())
n_set = set(map(int, input().split()))

m = int(input())
m_list = list(map(int, input().split()))

for num in m_list:
    if num in n_set:
        print(1, end=' ')
    else:
        print(0, end=' ')