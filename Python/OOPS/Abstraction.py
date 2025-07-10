# 3. Abstraction
# The user doesn't need to know how deposit/withdraw works internally. They just call the method and it works.

# The complex logic (like balance checks) is hidden inside methods.

class BankAccount:
  def __init__(self,account_holder,balance=0):
    self.account_holder = account_holder
    self.balance = balance
  def deposit(self,amount):
    self.balance += amount
    print(f"Deposit Amount : {amount}")
  def withdraw(self,amount):
    self.balance -= amount
    print(f"withdraw amount: {amount}")
  def getbalance(self):
    print(f"Total balance: {self.balance}")

account = BankAccount("Nandkishore")
account.deposit(1000)
account.withdraw(100)
account.getbalance()