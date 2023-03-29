---
sidebar_position: 13
---

# Polymorphism

Polymorphism is a fundamental concept in object-oriented programming (OOP), and it refers to the ability of an object to take on many forms or have multiple behaviors. In Java, polymorphism allows you to write code that can work with objects of different classes, as long as they share a common interface or superclass.

There are several types of Polymorphism, which we'll discuss below.

## Method Overloading

Method overloading is a type of compile-time polymorphism that allows you to define multiple methods with the same name in a class, as long as they have different parameter lists. When you call an overloaded method, the Java compiler uses the number and type of the arguments to determine which version of the method to call.

For example, consider the following code:

```java
public class MyClass {
    public void print(int num) {
        System.out.println("The number is: " + num);
    }

    public void print(String str) {
        System.out.println("The string is: " + str);
    }
}
```

In this code, the `MyClass` class has two methods called `print()`, one that takes an `int` parameter and another that takes a `String` parameter. When you call the `print()` method with an `int` argument, Java will call the first version of the method, and when you call it with a `String` argument, Java will call the second version of the method.

## Method Overriding

Method overriding is a type of runtime polymorphism that allows you to define a method in a subclass that has the same name and signature as a method in the superclass. When you call the overridden method on an object of the subclass, Java will call the version of the method defined in the subclass, not the version defined in the superclass.

For example, consider the following code:

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
}
```

In this code, the `Dog` class extends the `Animal` class and overrides the `makeSound()` method. When you create an object of the `Dog` class and call the `makeSound()` method on it, Java will call the version of the method defined in the `Dog` class, which will print "The dog barks" to the console.

## Inheritance Polymorphism

Class polymorphism, also known as inheritance polymorphism, is achieved by using inheritance in object-oriented programming. In Java, class polymorphism allows you to define a subclass that inherits properties and behaviors from a superclass, and to use the subclass in place of the superclass when working with objects.

Here's an example:

```java
public class Animal {
    protected String species;

    public Animal(String species) {
        this.species = species;
    }

    public void makeSound() {
        System.out.println("The " + species + " makes a sound");
    }
}

public class Dog extends Animal {
    public Dog() {
        super("dog");
    }

    public void makeSound() {
        System.out.println("The dog barks");
    }
}

public class Cat extends Animal {
    public Cat() {
        super("cat");
    }

    public void makeSound() {
        System.out.println("The cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal1 = new Dog();
        Animal animal2 = new Cat();

        animal1.makeSound(); // prints "The dog barks"
        animal2.makeSound(); // prints "The cat meows"
    }
}
```

In this example, we have a superclass called `Animal`, which has a property `species` and a method `makeSound()` that prints out the species of the animal and the sound it makes. We also have two subclasses, `Dog` and `Cat`, which inherit from the `Animal` class and override the `makeSound()` method with their own implementations.

In the `Main` class, we create two `Animal` objects, one of type `Dog` and one of type `Cat`. When we call the `makeSound()` method on each object, Java uses polymorphism to call the appropriate version of the method for each object. So, even though the `animal1` object is of type `Dog`, when we call its `makeSound()` method, Java calls the `makeSound()` method defined in the `Dog` class, which prints out "The dog barks". Similarly, when we call the `makeSound()` method on the `animal2` object, Java calls the `makeSound()` method defined in the `Cat` class, which prints out "The cat meows".

This is an example of class polymorphism because we're using the superclass `Animal` to define the `animal1` and `animal2` objects, but we're using subclasses `Dog` and `Cat` to provide the specific behavior for each object. By doing this, we can write code that is more flexible and reusable, and that can handle different types of animals without needing to know the exact type of each object at compile time.
