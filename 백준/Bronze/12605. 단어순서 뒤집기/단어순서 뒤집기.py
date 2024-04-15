tc = int(input()) # input Test case 

for i in range(tc):
  n = input().split()
  print('Case #%d: %s' % (i+1, ' '.join(n[::-1])))