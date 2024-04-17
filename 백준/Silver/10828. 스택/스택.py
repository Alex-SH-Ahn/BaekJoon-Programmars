import sys
tc = int(sys.stdin.readline().rstrip())
stack = []

for _ in range(tc):
    cmd = sys.stdin.readline().rstrip() # 명령어 입력받기
    if 'push' in cmd:
        p, num = cmd.split()
        stack.append(int(num))
    elif cmd == 'pop':
        if not stack:
            print(-1)
        else:
            print(stack.pop())
    elif cmd == 'size':
        print(len(stack))
    elif cmd == 'empty':
        if not stack: #비어있으면
            print(1)
        else:
            print(0)
    elif cmd == 'top':
        if not stack:
            print(-1)
        else:
            print(stack[-1])
    else:
        print("invalid command")