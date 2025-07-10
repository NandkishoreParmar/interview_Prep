# 2. Encapsulation
# Data (like balance) and related operations (deposit, withdraw, get_balance) are wrapped together inside the class.

# It helps protect the data from direct access and misuse.

class BankAccount:
  def __init__(self,account_holder,balance=0):
    self.account_holder = account_holder
    self.balance = balance
  def deposit(self,amount):
    self.balance += amount
    print(f"Deposit amount : {amount}")
  def withdraw(self,amount):
    self.balance -= amount
    print(f"withdraw amount: {amount}")
  def getBalance(self):
    print(f"total balance: {self.balance}")

acount1 = BankAccount("Nandkishore",1000)
acount1.deposit(500)
acount1.withdraw(200)
acount1.getBalance()