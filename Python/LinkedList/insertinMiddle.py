
class Node:
  def __init__(self,data):
    self.data = data
    self.next = None


node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)
node5 = Node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

node6 = Node(3.5)
current = node1

while current is not None and current.data != 3:
  current = current.next

node6.next = current.next
current.next = node6

current = node1
while current is not None:
  print(current.data,end="-> ")
  current = current.next
print("None")

