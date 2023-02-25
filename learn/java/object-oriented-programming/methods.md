---
sidebar_position: 9
---

# Methods

## What is a method?

A method is a set of instructions that performs a specific task. Methods are used to organize code and make it easier to understand and reuse. Each method has a name, a set of parameters (optional), and a return type (optional).

Here's an example of a simple method:

```java
public void sayHello() {
    System.out.println("Hello, world!");
}
```

This method is called sayHello, has no parameters, and doesn't return anything. When this method is called, it will print "Hello, world!" to the console.

## Creating a method

To create a method in Java, you need to define it inside a class. Here's the basic syntax for defining a method:

```java
<access_modifier> <return_type> <method_name>(<parameter_list>) {
    // method body
}
```

Let's break this down:

    `access_modifier`: This is optional and determines the visibility of the method. It can be `public`, `private`, `protected`, or omitted (which means it has default access).
    `return_type`: This is optional and specifies the data type of the value that the method returns (if any). If the method doesn't return anything, use the keyword void.

`method_name`: This is the name of the method. It should be descriptive and follow Java naming conventions.
`parameter_list`: This is a comma-separated list of parameters (optional) that the method takes. Each parameter consists of a data type and a parameter name.

Here's an example of a method that takes two integer parameters and returns their sum:

```java
public int add(int num1, int num2) {
    int sum = num1 + num2;
    return sum;
}
```

In this example, the method is called add, has two int parameters (num1 and num2), and returns an int value (the sum of num1 and num2).

## Calling a method

To call a method in Java, you need to use its name followed by a set of parentheses. If the method takes parameters, you need to pass them inside the parentheses. Here's an example:

```java
int result = add(5, 7);
System.out.println(result); // prints "12"
```

In this example, the add method is called with the arguments 5 and 7. The method returns the sum of these two numbers, which is stored in the variable result. Finally, the value of result is printed to the console.

## Method overloading

In Java, you can define multiple methods with the same name as long as their parameter lists are different. This is called method overloading. Here's an example:

```java
public int add(int num1, int num2) {
    int sum = num1 + num2;
    return sum;
}

public double add(double num1, double num2) {
    double sum = num1 + num2;
    return sum;
}
```

In this example, there are two add methods with different parameter lists (one takes two ints, the other takes two doubles). This allows you to use the same method name for different types of data.

Methods are an essential part of Java programming. They allow you to organize your code and make it easier to understand and reuse. When creating methods, be sure to follow Java naming conventions and use descriptive names. And don't be afraid to use method overloading to create more flexible and versatile code!

## What's next?
