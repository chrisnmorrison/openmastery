---
sidebar_position: 3
---

# Creating Objects

Let's look at the `Customer` class again. A class is like a blueprint, while an object is a "thing" of the class, created with code. 

## How are classes and objects related?

This is one of the most confusing parts for beginners, but it's actually quite simple.

**A class is a blueprint**. Classes are stored in separate files. For example, a `Customer` class is stored in `Customer.java`. In Java, a class can have a different name than the name of the file that contains it, but it is generally good practice to have them match. For the purposes of best practices, imagine that this is a strict rule: Match the Class name to the file name.

If a class has a different name than the file that contains it, it can become confusing for developers who are trying to navigate the code. Additionally, some IDEs and build systems may have difficulty finding the class if its name does not match the filename.

In general, it is recommended to have one class per file, and to name the file after the class it contains. This makes it easier to navigate and maintain the code.

**An objects is something created from a class, and exists in memory. An object is like saying, "I want to create something out of the class blueprint, and give it properties and methods.** If you have an `Employee` class, you store the class in a single file, `Employee.java`. But, you can create as many object from this Employee class as you want. Say you are using a Java-based Employee Management Application. You have it connected to an SQL database, and there are 50 employees stored in the database. Your Java program can pull this data from the database and create objects from it. If you add, remove, or modify employees, you don't need to re-write your Java code. It uses the classes to create these objects in memory, and assign different state (data fields) and behaviour (methods)! 

So, a class is a reusable blueprint that defines state and behaviour, and an object is something created from this blueprint, that exists in program memory.

## Example

To create an object from a customer class in Java, you need to follow these steps:

1. Let's revisit the customer class: First, you need to create a customer class that defines the properties and behaviors of a customer. Here's an example of a customer class:

```java
public class Customer {
    private String name;
    private String address;
    private String phone;

    public Customer(String name, String address, String phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
```
2. Create an instance of the customer class: To create an instance of the customer class, you need to use the new keyword followed by the class name and a set of parentheses. Here's an example:

```java
Customer customer = new Customer("John Doe", "123 Main St", "555-555-1212");
```
This creates a new customer object with the specified name, address, and phone number.

3. Access the properties and methods of the customer object: Once you have created a customer object, you can access its properties and methods using the dot notation. Here are some examples:

```java
String name = customer.getName(); // Gets the customer's name
customer.setAddress("456 Oak St"); // Sets the customer's address
System.out.println(customer.getPhone()); // Prints the customer's phone number
```
These examples demonstrate how to get and set the customer's properties, as well as how to call a method on the customer object.

## What's next?
