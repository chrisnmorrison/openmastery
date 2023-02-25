---
sidebar_position: 5
---

# Default Constructor

In Java, a default constructor is a constructor that takes no arguments. It is automatically provided by the compiler if you do not explicitly define a constructor for a class. The default constructor is empty, meaning it does not contain any code inside the constructor body.

Here's an example of a class with a default constructor:

```java
public class Person {
    private String name;
    private int age;

    // This is a default constructor
    public Person() {
        // No code is needed here since the default constructor is empty
    }

    // Getter and setter methods omitted for brevity
}
```

In this example, the Person class has a default constructor that takes no arguments. Since the default constructor is empty, it does not do anything when the constructor is called.

If you do not need to initialize any instance variables or perform any other setup when creating an object of a class, you can rely on the default constructor provided by Java. However, if you need to initialize instance variables with specific values or perform any other setup when creating an object, you should define a parameterized constructor that takes the necessary arguments.

Note that in Java, constructors cannot be overridden, only overloaded. This means that you can have multiple constructors with different parameters in a single class, but you cannot define a new constructor with the same signature as an existing constructor in a subclass.

## What's next?
