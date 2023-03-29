---
sidebar_position: 8
---

# Copy Constructor

In Java, a copy constructor is a special constructor that takes an object of the same class as its argument and creates a new object with the same values for its instance variables. The purpose of a copy constructor is to create a new object that is a copy of an existing object, while also allowing for any necessary modifications to be made to the copied object.

Here's an example of a class with a copy constructor:

```java
public class Person {
    private String name;
    private int age;

    // This is the copy constructor
    public Person(Person otherPerson) {
        this.name = otherPerson.name;
        this.age = otherPerson.age;
    }

    // Getter and setter methods omitted for brevity
}
```

In this example, the Person class has a copy constructor that takes a Person object as its argument. When the copy constructor is called, it creates a new Person object with the same values for name and age as the Person object passed to it.

Here's an example of how to use the copy constructor:

```java
Person person1 = new Person("John", 30);
Person person2 = new Person(person1); // Creates a new Person object with the same values as person1
```

In this example, a new Person object is created using the copy constructor and passed person1 object. This creates a new Person object with the same values for name and age as person1.

Copy constructors are useful when you need to create a new object that is a copy of an existing object, while also allowing for any necessary modifications to be made to the copied object. They are especially useful when working with immutable objects or objects that are expensive to create.
