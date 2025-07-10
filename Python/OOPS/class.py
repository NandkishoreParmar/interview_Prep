# constructor
# it is speacial method within a class that gets automatically called when an object is created 
# it is used to initialize the attributes of the  object 
# it is written with  __init__
class Student:
  def __init__(self,id,name,marks):   # __init__  this is a constructor 
    self.id = id
    self.name = name
    self.marks = marks
  
  def average(self):
    return f"roll no : {self.id} , name : {self.name} , average: {sum(self.marks)/len(self.marks)}"

first_student = Student(1,"Varun",[87,67,89,78,65])
print(first_student.name)
print(first_student.average())