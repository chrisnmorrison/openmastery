---
sidebar_position: 7
---

# Parameterized Constructor

In Java, a parameterized constructor is a constructor that takes one or more arguments. Unlike the default constructor, a parameterized constructor contains code inside the constructor body that initializes instance variables with specific values based on the arguments passed to the constructor.

Here's an example of a class with a parameterized constructor:

```java
public class Person {
    private String name;
    private int age;

    // This is a parameterized constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Getter and setter methods omitted for brevity
}
```

In this example, the Person class has a parameterized constructor that takes a name and an age as arguments. When the constructor is called, it initializes the name and age instance variables with the values passed to the constructor.

Here's an example of how to create a Person object using the parameterized constructor:

```java
Person person = new Person("John", 30);
```

In this example, a new Person object is created with the name "John" and the age 30, based on the arguments passed to the constructor.

Parameterized constructors are useful when you need to create objects with specific values for their instance variables. They allow you to initialize instance variables with specific values based on the arguments passed to the constructor, making it easier to create and work with objects of a class.
