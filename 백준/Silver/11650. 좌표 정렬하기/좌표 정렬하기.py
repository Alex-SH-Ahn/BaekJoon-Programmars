import sys
tc = int(sys.stdin.readline().rstrip())

points = []
for i in range(tc):
    (x, y) = map(int, sys.stdin.readline().split())
    points.append((x, y))

points = sorted(points, key=lambda point: (point[0], point[1]))

for point in points:
    print(point[0], point[1])