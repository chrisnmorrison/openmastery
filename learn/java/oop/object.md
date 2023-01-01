---
sidebar_position: 3
---

# Creating Objects

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

It also has a constructor that is used to create new customer objects with specific values for the name, address, and phoneNumber fields. We'll go over constructors in an upcoming lesson. In short, a constructor is

Finally, it has a displayCustomerInfo method that can be used to display the customer's information to the screen.

## Common Questions

### When I create a class, how do I know what fields to put?

## What's next?
