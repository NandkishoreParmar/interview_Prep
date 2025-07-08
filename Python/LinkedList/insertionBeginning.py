class Node:
  def __init__(self,data):
    self.data = data
    self.next = None


node1 = Node(10)
node2 = Node(20)
node3 = Node(30)
node4 = Node(40)

node1.next = node2
node2.next = node3
node3.next = node4

head = node1
current = head
print("Before Adding Node Linked List")
while current is not None:
  print(current.data,end="->")
  current = current.next
print("None")

#adding new node
newnode = Node(5)
newnode.next = head
head = newnode
current = head
print("After Adding new Node at Beginning Linked List")
# print(current.data)
while current is not None:
  print(current.data,end="-> ")
  current = current.next
print("None")



