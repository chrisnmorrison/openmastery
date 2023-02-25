---
sidebar_position: 10.5
---

# The super keyword

In Java, the `super` keyword is used to refer to the parent class of a subclass. It is typically used to access the parent class's constructors, methods, and variables.

One common use of the `super` keyword is in the constructor of a subclass. When you create a new object of a subclass, Java automatically calls the constructor of the superclass before executing the constructor of the subclass. If the superclass has a constructor that takes arguments, you can use the `super` keyword to call that constructor with the appropriate arguments.

Here's an example:

```java
public class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    public void speak() {
        System.out.println("Animal speaks.");
    }
}

public class Dog extends Animal {
    private String breed;

    public Dog(String name, String breed) {
        super(name); // Call the constructor of the Animal class
        this.breed = breed;
    }

    public void speak() {
        System.out.println("Woof!");
    }

    public void printInfo() {
        System.out.println("Name: " + super.name); // Access the name variable of the Animal class
        System.out.println("Breed: " + this.breed);
    }
}
```

In this example, we have two classes: `Animal` and `Dog`. `Dog` is a subclass of `Animal`, which means it inherits all of the methods and variables of `Animal`.

The `Animal` class has a constructor that takes a `name` argument and a `speak()` method that prints a generic message. The `Dog` class has a constructor that takes both a `name` and `breed` argument, and a `speak()` method that prints a specific message for dogs.

The `Dog` class also has a `printInfo()` method that prints the `name` and `breed` variables. In the `printInfo()` method, we use the `super` keyword to access the `name` variable of the `Animal` class.

By using `super` appropriately, you can call constructors of the superclass, access methods and variables of the superclass, and customize the behavior of your subclass.

## What's next?
