---
sidebar_position: 10
---

# Inheritance

In object-oriented programming, a subclass is a class that inherits properties and methods from a parent class, also known as a superclass. A subclass can add new properties and methods to the ones it inherits from the superclass, allowing for greater flexibility and reusability in software development.

In Java, the `keyword` is used to create a subclass. When a subclass is created, it inherits all of the properties and methods of the parent class, and can also add its own new properties and methods.

Here's an example of how a subclass works in Java:

```java
public class Animal {
    public void makeSound() {
        System.out.println("The animal makes a sound");
    }
}

public class Dog extends Animal {
    public void makeSound() {
        System.out.println("The dog barks");
    }
    
    public void fetch() {
        System.out.println("The dog fetches a ball");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Animal();
        animal.makeSound(); // Output: "The animal makes a sound"
        
        Dog dog = new Dog();
        dog.makeSound(); // Output: "The dog barks"
        dog.fetch(); // Output: "The dog fetches a ball"
    }
}
```

In this example, we define a superclass `Animal` with a single method `makeSound()`, which prints a message to the console. We then define a subclass Dog that extends `Animal`, and adds a new method `fetch()`.

In the `Main` class, we create an object of the `Animal` class and call the `makeSound()` method, which prints "The animal makes a sound". We then create an object of the Dog class and call the `makeSound()` and `fetch()` methods, which print "The dog barks" and "The dog fetches a ball" respectively.

Try to think of other possible Inheritance scenarios. What are some classes that could inherit from a more generic parent class? Here are a few we can think of:

- `Developer`, `TeamLeader`, and `Manager` could inherit from an `Employee` parent class
- `HondaCivic` could extend from a `Car` parent class
- `Poodle` could extend from `Dog`. Dog could also extend from `Animal`!

## What's next?
