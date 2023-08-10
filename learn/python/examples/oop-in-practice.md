---
sidebar_position: 1.0
sidebar_label: "OOP in Practice"
---

# OOP in Practice

Let's look at a lengthy example of object oriented programming (OOP), demonstrating the core concepts of OOP: Abstraction, Encapsulation, Inheritance, and Polymorphism.

## Example: Banking App

```python
# Encapsulation: Creating a class to encapsulate customer data and behavior
class Customer:
    def __init__(self, name, account_number, balance=0):
        self.__name = name  # Private attribute: Customer's name
        self.__account_number = account_number  # Private attribute: Customer's account number
        self.__balance = balance  # Private attribute: Customer's balance

    def get_name(self):
        return self.__name  # Method to get the customer's name

    def get_account_number(self):
        return self.__account_number  # Method to get the customer's account number

    def get_balance(self):
        return self.__balance  # Method to get the customer's balance

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount  # Method to deposit money into the customer's account

    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount  # Method to withdraw money from the customer's account
        else:
            print("Insufficient balance.")

# Abstraction: Hiding complex details and providing an easy-to-use interface
class BankingApp:
    def __init__(self):
        self.__customers = []  # Private attribute: List to store customer objects

    def add_customer(self, name, account_number, balance=0):
        customer = Customer(name, account_number, balance)  # Creating a Customer object
        self.__customers.append(customer)  # Adding the customer object to the list
        print(f"Customer '{name}' added to the system.")

    def get_customer_balance(self, account_number):
        for customer in self.__customers:
            if customer.get_account_number() == account_number:
                return customer.get_balance()  # Returning the customer's balance
        return None

    def process_deposit(self, account_number, amount):
        for customer in self.__customers:
            if customer.get_account_number() == account_number:
                customer.deposit(amount)  # Depositing amount into the customer's account
                print(f"Deposited ${amount} into account '{account_number}'.")
                return
        print(f"Customer with account '{account_number}' not found.")

    def process_withdrawal(self, account_number, amount):
        for customer in self.__customers:
            if customer.get_account_number() == account_number:
                customer.withdraw(amount)  # Withdrawing amount from the customer's account
                print(f"Withdrew ${amount} from account '{account_number}'.")
                return
        print(f"Customer with account '{account_number}' not found.")

# Inheritance: Creating specialized subclasses
class PremiumCustomer(Customer):
    def __init__(self, name, account_number, balance=0):
        super().__init__(name, account_number, balance)  # Calling the superclass constructor
        self.__reward_points = 0  # Private attribute: Reward points for premium customers

    def get_reward_points(self):
        return self.__reward_points  # Method to get the reward points

    def earn_reward_points(self, points):
        self.__reward_points += points  # Method to earn reward points

# Polymorphism: Treating different customers as instances of the common class
def process_transactions(app, account_number):
    app.process_deposit(account_number, 500)  # Depositing money
    app.process_withdrawal(account_number, 200)  # Withdrawing money

# Creating instances and demonstrating OOP concepts
bank_app = BankingApp()  # Creating a BankingApp object
bank_app.add_customer("Alice", "123456")  # Adding a customer
bank_app.add_customer("Bob", "789012", 1000)  # Adding another customer with initial balance

process_transactions(bank_app, "123456")  # Processing transactions for Alice
process_transactions(bank_app, "789012")  # Processing transactions for Bob

print("Customer Alice's balance:", bank_app.get_customer_balance("123456"))  # Checking Alice's balance
print("Customer Bob's balance:", bank_app.get_customer_balance("789012"))  # Checking Bob's balance
```

## Challenge

Take note of the attributes and behaviour of this application, and try writing this program from scratch. It doesn't have to be the exact same, because at this point, the only goal is learning. You can try to add more features to the application, or you can try to make it more efficient. The choice is yours.

Afterwards, try coming up with your own application that uses OOP. It can be anything you want, as long as it uses OOP. Ideas include:
- A mechanics garage
- A restaurant
- A school
- A zoo
- A library

:::success The best way to learn is to write your own code, rather than following tutorials.
We've mentioned it in previous articles as well, but it's important to keep in mind that it doesn't matter if these applications model real-world applications or not. These practices are for learning purposes only, to help you understand the concepts of OOP and cement your knowledge.

Follow tuturials until you understand the concepts, then write your own code. This is by far the best way to learn.
:::

