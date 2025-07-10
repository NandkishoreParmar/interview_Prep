class Car:
  def __init__(self,name,model):
    self.name = name
    self.model = model
  def move(self):
    print("Drive!")

class Plane:
  def __init__(self,name,model):
    self.name = name
    self.model = model
  def move(self):
    print("Fly!")

car1 = Car("Audi",2020)
plane1 = Plane("shera",2030)

for x in (car1,plane1):
  x.move()