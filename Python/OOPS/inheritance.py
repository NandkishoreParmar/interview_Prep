
class OTTSubscription:
  def __init__(self,id,plan,payment):
    self.id = id
    self.plan = plan
    self.payment = payment
  
  def subscribe(self):
    return f"id of {self.id} is subscribed"
  
  def unsubscribe(self):
    return f"id of {self.id} is unsubscribed"


class PremiumSubscription(OTTSubscription):
  def __init__(self, id, plan, payment,screen):
    super().__init__(id, plan, payment)   #inherits parent properties and methods
    self.screen = screen
  
  def display(self):
    return f"id: {self.id} and plan of {self.plan} is available for {self.screen} screens "
  

subsription1 = PremiumSubscription(2,"3months",459,2)
ans = subsription1.display()
print(ans)
print(subsription1.subscribe())
print(subsription1.unsubscribe())