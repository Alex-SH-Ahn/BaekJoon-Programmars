n = int(input())

def hello(i, n):
    if i > n:
        return
    else:
        print(f"Hello World, Judge {i}!")
        hello(i+1, n)

hello(1, n)