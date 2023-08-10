---
sidebar_position: 1.7
sidebar_label: "Encapsulation"
---

# Encapsulation

Encapsulation refers to the practice of restricting direct access to an object's internal attributes and methods from outside the class. It promotes the concept of data hiding, allowing classes to control how their data is accessed and modified. By encapsulating data within a class, you ensure that changes to the implementation details do not affect the external code that uses the class.

## Principles of Encapsulation

There are several key principles that encapsulation enforces:

- Data Hiding: Internal attributes are hidden from external access, preventing unauthorized modification.
- Data Protection: Access to data is controlled through methods, allowing the class to validate and manipulate data before it's exposed.
- Modularity: Encapsulation promotes modularity by isolating the implementation details within the class.
- Flexibility: The internal implementation of a class can change without affecting the external code using the class.

## Benefits of Encapsulation

Encapsulation offers numerous advantages in object-oriented programming:

- Security: Prevents unauthorized access and manipulation of data, enhancing data integrity and security.
- Maintenance: Changes to the internal implementation of a class do not affect external code, making maintenance and updates easier.
- Abstraction: Encapsulation allows you to provide an abstract interface for using a class, hiding complex internal details.
- Code Reusability: Encapsulated classes can be reused across different parts of the codebase without needing to understand their internal complexities.

## Access Modifiers

Python provides three access modifiers to control the visibility of attributes and methods within a class:

- Public (public): No access restrictions. Attributes and methods are accessible from anywhere.
- Protected (_protected): Conveys that the attribute or method is intended for internal use within the class and its subclasses.
- Private (__private): Attributes and methods are strongly hidden, preventing direct access from outside the class. However, Python name mangling still allows access within the class.

## Practical Implementation

Let's illustrate encapsulation with a practical example:

```python
class BankAccount:
    def __init__(self, account_number, balance):
        self.__account_number = account_number
        self.__balance = balance
    
    def get_balance(self):
        return self.__balance
    
    def deposit(self, amount):
        self.__balance += amount
    
    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount
        else:
            print("Insufficient balance.")

# Creating an instance
account = BankAccount("123456", 1000)

# Accessing methods with encapsulated data
print("Initial balance:", account.get_balance())
account.deposit(500)
print("Balance after deposit:", account.get_balance())
account.withdraw(300)
print("Balance after withdrawal:", account.get_balance())
```
In this example, the `BankAccount` class encapsulates the `account_number` and `balance` attributes along with methods for deposit and withdrawal. The double underscores (`__`) before the attribute names indicate that they are private and encapsulated. External code can interact with the class only through the defined methods.