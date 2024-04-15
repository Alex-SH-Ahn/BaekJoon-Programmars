tc = int(input())
cnt = 0

for i in range(tc):
  stack = []
  word = input()
  stack.append(word[0])
  for j in range(1, len(word)):
    if not stack:
      stack.append(word[j])
    else:
      if stack[-1] != word[j]:
        # 넣으려는 글자가 stack의 마지막 요소와 다르면 append
        stack.append(word[j])
      else: #같으면 pop
        stack.pop()
  if not stack:
    cnt += 1

print(cnt)