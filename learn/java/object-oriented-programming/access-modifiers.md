---
sidebar_position: 11
---

# Access Modifiers

Access modifiers are keywords used in Java to determine the accessibility of classes, methods, and variables. They are used to restrict access to certain parts of a program, ensuring that they are only accessible to specific classes or methods. In Java, there are four types of access modifiers: `public`, `private`, `protected`, and `default` (also known as package-private).

The `public` access modifier is used to make classes, methods, and variables accessible to any other class, method, or package in the program. Public members are widely accessible and can be used by any part of the program that can access the class containing the public member.

The `private` access modifier, on the other hand, is used to restrict access to classes, methods, and variables to only the class that contains them. Private members are not accessible outside the class, even to subclasses or other classes in the same package.

The `protected` access modifier is similar to private, but it allows access to subclasses and classes in the same package. Protected members are not accessible outside the class, but can be accessed by subclasses and classes in the same package.

Finally, the `default` (package-private) access modifier is used when no access modifier is specified. Members with default access can only be accessed by other classes in the same package.

Let's look at access modifiers in action

```java
public class ExampleClass {
    public int publicVariable;
    private int privateVariable;
    protected int protectedVariable;
    int defaultVariable;
    
    public void publicMethod() {
        // Code here
    }
    
    private void privateMethod() {
        // Code here
    }
    
    protected void protectedMethod() {
        // Code here
    }
    
    void defaultMethod() {
        // Code here
    }
}

public class ExampleSubclass extends ExampleClass {
    public void methodInSubclass() {
        publicMethod(); // Accessible
        privateMethod(); // Not accessible
        protectedMethod(); // Accessible
        defaultMethod(); // Accessible (because subclass is in the same package as ExampleClass)
    }
}

public class ExampleOtherClass {
    public void methodInOtherClass() {
        ExampleClass exampleObject = new ExampleClass();
        exampleObject.publicVariable = 1; // Accessible
        exampleObject.privateVariable = 2; // Not accessible
        exampleObject.protectedVariable = 3; // Not accessible (because ExampleOtherClass is not a subclass of ExampleClass)
        exampleObject.defaultVariable = 4; // Accessible (because ExampleOtherClass is in the same package as ExampleClass)
        exampleObject.publicMethod(); // Accessible
        exampleObject.privateMethod(); // Not accessible
        exampleObject.protectedMethod(); // Not accessible (because ExampleOtherClass is not a subclass of ExampleClass)
        exampleObject.defaultMethod(); // Accessible (because ExampleOtherClass is in the same package as ExampleClass)
    }
}
```

In this example, we define a class `ExampleClass` with four different types of member variables (public, private, protected, and default) and four different types of member methods (public, private, protected, and default). We then define a subclass of `ExampleClass` called `ExampleSubclass`, which can access the protected and default members of ExampleClass. Finally, we define another class `ExampleOtherClass`, which can only access the public and default members of ExampleClass because it is not a subclass of `ExampleClass`, but is in the same package.

Access modifiers play a crucial role in encapsulation, which is the process of hiding the implementation details of a class from other classes. By controlling the access to methods and variables, developers can ensure that their code is used correctly and securely, and they can prevent unwanted changes to the implementation details of a class.

## What's next?
