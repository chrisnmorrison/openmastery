---
sidebar_position: 2
---

# Defining Classes

:::tip Where do I place this code?
So far, all of our code has been placed in the `Main` method. Now, we want to create new files!

If you're following along locally on your computer, create a `FileName.java` file in the same directory as your `Main` method file, where FileName is the same name of your class you are creating. For example, `Employee.java` holds the `Employee` class.

In our examples, we'll show what your file name should be.
:::

Here is how we can create a Customer class in Java. Read through this code, then we'll go over each important part.

```java title="Customer.java"
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
    public void displayCustomerInfo() {
        System.out.println("Name: " + name);
        System.out.println("Address: " + address);
        System.out.println("Phone number: " + phoneNumber);
    }

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
}

```

This class defines a customer object with three data fields (name, address, and phoneNumber) and several methods for accessing and modifying those fields. 

It also has a `constructor` that is used to create new customer objects with specific values for the name, address, and phoneNumber fields. We'll go over constructors in an upcoming lesson. In short, a constructor is used to create an object from a class, and you write a constructor to define how an object is created.

Finally, it has a `displayCustomerInfo` method that can be used to display the customer's information to the screen.

## Common Questions

### When I create a class, how do I know what fields to put?

Think of a thing that you can create as a class - Animal, Car, Customer, Employee, etc.

How can you describe this thing? Depending on what it is, a field may be: color, make, model, balance, salary, last name, phone number, etc.

The fields you put will depend on how you can describe that thing, both in general, and specifically in your program. Additionally, your fields need to be relevant to your program. 

In a Banking application, your `Customer` class definitely needs `firstName` and `lastName` fields, but do you need a `favouriteColor` field? Unless there's a specific reason for adding this field, you should only add fields relevant to your application.

### When I create a class, how do I know what methods/behaviours to put?

Without any additional knowledge, you don't. When using OOP in real-world projects, you must define and understand your business uses and program features before writing any code. For example, pretend you are writing a Banking app from scratch. What actions may a `Customer` class want to do? How would this be different than a `Customer` class at an auto body shop?

Ultimately, both the state and behaviour of a class depends on each individual business use, and there is no right answer. Once a development team brainstorms the purpose of an app and class, then the state and behaviour is decided. 

## What's next?
