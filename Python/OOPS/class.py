
class Student:
  def __init__(self,id,name,marks):
    self.id = id
    self.name = name
    self.marks = marks
  
  def average(self):
    return f"roll no : {self.id} , name : {self.name} , average: {sum(self.marks)/len(self.marks)}"

first_student = Student(1,"Varun",[87,67,89,78,65])
print(first_student.name)
print(first_student.average())