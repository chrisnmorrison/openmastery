---
sidebar_position: 2
---

# Defining Classes

Here is how we can create a Customer class in Java. Read through this code, then we'll go over each important part.

```java
public class Customer {
    // Data fields (state)
    private String name;
    private String address;
    private String phoneNumber;

    // Constructor
    public Customer(String name, String address, String phoneNumber) {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    // Methods (behavior)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void displayCustomerInfo() {
        System.out.println("Name: " + name);
        System.out.println("Address: " + address);
        System.out.println("Phone number: " + phoneNumber);
    }
}

```

This class defines a customer object with three data fields (name, address, and phoneNumber) and several methods for accessing and modifying those fields. 

It also has a `constructor` that is used to create new customer objects with specific values for the name, address, and phoneNumber fields. We'll go over constructors in an upcoming lesson. In short, a constructor is used to create an object from a class, and you write a constructor to define how an object is created.

Finally, it has a `displayCustomerInfo` method that can be used to display the customer's information to the screen.

## Common Questions

### When I create a class, how do I know what fields to put?

Think of a thing that you can create as a class - Animal, Car, Customer, Employee, etc.

How may you describe this thing? Depending on what it is, a field may be: color, make, model, balance, salary, last name, phone number, etc.

The fields you put will depend on how you can describe that thing, both in general, and specifically in your program. 

### When I create a class, how do I know what methods/behaviours to put?

Without any additional knowledge, you don't. When using OOP in real-world projects, you must define and understand your business uses and program features before writing any code. For example, pretend you are writing a Banking app from scratch. What actions may a `Customer` class want to do? How would this be different than a `Customer` class at an auto body shop?

## What's next?
