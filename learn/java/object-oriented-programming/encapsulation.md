---
sidebar_position: 14
---

# Encapsulation

## Introduction

Encapsulation is one of the fundamental principles of object-oriented programming. It refers to the idea of bundling data and methods that operate on that data into a single unit, known as a class. The purpose of encapsulation is to hide the internal details of an object from the outside world, and to provide a clean and well-defined interface for interacting with the object.

We introduced [access modifiers](./access-modifiers) in a previous lesson. Let's expand on this knowledge by introducing core methods of encapsulated Java objects: **Getters** and **Setters**.

```java
public class BankAccount {
    private String accountNumber;
    private double balance;
    
    public BankAccount(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    
    public void deposit(double amount) {
        balance += amount;
    }
    
    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
        } else {
            System.out.println("Insufficient funds");
        }
    }
    
    public double getBalance() {
        return balance;
    }
}
```

In this example, we have a `BankAccount` class that represents a simple bank account. The class has two private fields, `accountNumber` and `balance`, which are only accessible within the class. The class also has three public methods, `deposit()`, `withdraw()`, and `getBalance()`, which are the only ways that other classes can interact with the `BankAccount` object.

By making the `accountNumber` and `balance` fields private, we ensure that they can only be accessed from within the `BankAccount` class. This prevents other classes from directly modifying the state of the BankAccount object, which helps to maintain the integrity of the object's data.

The `deposit()` and `withdraw()` methods provide a way to modify the balance field, but they do so in a controlled and predictable manner. The `withdraw()` method checks to make sure that there are sufficient funds in the account before allowing a withdrawal, and the `deposit()` method simply adds the deposited amount to the current balance.

Finally, the `getBalance()` method provides a way for other classes to retrieve the current balance of the `BankAccount` object, but it does so without allowing direct access to the `balance` field. This helps to maintain encapsulation by ensuring that the internal state of the `BankAccount` object is not exposed to the outside world.

### More Getters and Setters

Getters and Setters are very common, so let's look at another example!

```java
public class Employee {
    private String name;
    private int age;
    private double salary;
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
    
    public double getSalary() {
        return salary;
    }
    
    public void setSalary(double salary) {
        this.salary = salary;
    }
}
```

In our `Employee` class, we set our fields as `private`. This means that they can only be accessed from **within the class**. 

So, we write `public` methods to get and set these values! It's that simple.

## But, I want my fields to stay private!

Yes, getters and setters expose your `private` fields to the world! Doesn't this defeat the purpose of using `private`?

No, getters and setters do not defeat the purpose of `private` fields in Java. In fact, using `private` fields and providing `public` getter and setter methods is considered to be good practice in object-oriented programming.

The main purpose of making instance variables `private` is to encapsulate the data and protect it from external modification. By making the variables `private`, you **restrict direct access** to them from outside the class, and force any code that wants to modify or read the data to go through the getter and setter methods.

Getter and setter methods provide a **controlled** way for external code to access or modify the private instance variables. They allow you to define how the values of the instance variables are accessed and modified. For example, you can add validation logic to ensure that the value being set is within a certain range, or you can perform additional actions such as logging how your `private` field was accessed, or updating dependent variables.

The most important takeaway is that getters and setters allow you read and write to `private` fields, without providing direct access. The code examples above show the simpliest implementation, but you, the programmer, **can implement this controlled access however you like**. 

## What's next?
