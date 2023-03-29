---
sidebar_position: 4
---

# Constructors

There are three types of constructors in Java:

Default constructor: A constructor with no parameters is called the default constructor. If a class doesn't have a constructor, the compiler will automatically create a default constructor for the class.

Parameterized constructor: A constructor with parameters is called a parameterized constructor. A parameterized constructor is used to pass values to the instance variables of the class when an object is created.

Copy constructor: A copy constructor is a constructor that takes an object of the same class as an argument and creates a new object with the same state as the object passed as an argument.

## Default constructor

A default constructor is a constructor that takes no arguments. If you do not explicitly define a constructor for a class, Java provides a default constructor that takes no arguments.

```java
public class Person {
    private String name;
    private int age;

    public Person() {
        // This is a default constructor
    }
}
```

By creating a new `Person` object with this default constructor, you are giving it an empty slate - `name` is `null`, and `age` is 0, which is the default when creating a new int and not assigning it a value.

Note, that you can set data fields within a default constructor. It is often blank, but it doesn't have to be.

```java
public class Person {
    private String name;
    private int age;
    private boolean isHuman;

    public Person() {
        this.isHuman = true;
    }
}

```

## Parameterized constructor

A parameterized constructor is a constructor that takes one or more arguments. It allows you to initialize the class's instance variables with specific values.

```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
        // This is a parameterized constructor
    }
}
```

## Copy constructor

A copy constructor is a constructor that takes an object of the same class and creates a new object with the same values as the original object.

```java
public class Person {
    private String name;
    private int age;

    public Person(Person person) {
        this.name = person.name;
        this.age = person.age;
        // This is a copy constructor
    }
}
```

Note that in Java, constructors cannot be overridden, only overloaded. This means that you can have multiple constructors with different parameters in a single class, but you cannot define a new constructor with the same signature as an existing constructor in a subclass.
