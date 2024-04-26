import sys
tc = int(sys.stdin.readline().rstrip())

queue = []
for i in range(tc):
    cmd = sys.stdin.readline().split()

    if cmd[0]=='push':
        queue.append(int(cmd[1]))

    elif cmd[0]=='pop':
        if queue: 
            print(queue[0])
            del queue[0]
        else: print(-1)

    elif cmd[0]=='size':
        print(len(queue))

    elif cmd[0]=='empty':
        if not queue: print(1)
        else: print(0)
    
    elif cmd[0]=='front':
        if queue: print(queue[0])
        else: print(-1)

    elif cmd[0]=='back':
        if queue: print(queue[-1])
        else: print(-1)

    elif cmd[0]=='display':
        print(queue)

    else:
        print('Invalid command.')
        