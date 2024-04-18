import sys
tc = int(sys.stdin.readline().rstrip())

deque = []
for i in range(tc):
	cmd = sys.stdin.readline().split()

	if cmd[0]=='push_front':
		deque.insert(0, int(cmd[1]))

	elif cmd[0]=='push_back':
		deque.append(int(cmd[1]))

	elif cmd[0]=='pop_back':
		if deque:
			print(deque.pop())
		else:
			print(-1)

	elif cmd[0]=='pop_front':
		if deque:
			print(deque[0])
			del deque[0]
		else:
			print(-1)

	elif cmd[0]=='back':
		if deque:
			print(deque[-1])
		else:
			print(-1)

	elif cmd[0]=='front':
		if deque:
			print(deque[0])
		else:
			print(-1)

	elif cmd[0]=='size':
		print(len(deque))

	elif cmd[0]=='empty':
		if not deque:
			print(1)
		else:
			print(0)

	else:
		print('Invalid command.')