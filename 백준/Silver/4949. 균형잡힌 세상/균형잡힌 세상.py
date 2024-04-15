while True:
  balance = []
  sentence = input()

  if sentence == ".":
    break

  for char in sentence:
    if char in '([':
      balance.append(char)
    elif char in ')]':
      if not balance: #balance가 비어있으면
        print('no')
        break
      elif balance[-1] == '(' and char == ')' or balance[-1] == '[' and char == ']': #balance의 마지막 요소와 char이 일치하면
        balance.pop()
      else:
        print('no')
        break
    elif char == '.': #문장이 끝나고 balance가 비어있으면 yes 아니면 no
      if not balance:
        print('yes')
        break
      else:
        print('no')
        break

