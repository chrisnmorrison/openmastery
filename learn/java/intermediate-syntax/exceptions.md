---
sidebar_position: 2
---

# Exceptions

Exception handling is a crucial aspect of Java programming that allows developers to gracefully handle unexpected errors and exceptions that can occur during the execution of their code. By using exception handling, developers can prevent their programs from crashing and provide useful feedback to users about what went wrong.

Let's discuss what exceptions are in Java, how to handle them, and best practices for implementing exception handling in your Java programs.

## What are Exceptions in Java?

An exception is an event that occurs during the execution of a Java program that disrupts the normal flow of the program's instructions. When an exception occurs, the Java Virtual Machine (JVM) creates an object known as an exception object, which contains information about the type of exception and the state of the program at the time the exception occurred.

There are two types of exceptions in Java: checked and unchecked exceptions.

Checked exceptions are those that the Java compiler forces you to handle explicitly in your code. These exceptions are typically related to input/output operations or other external factors that can cause errors at runtime. Examples of checked exceptions in Java include IOException, SQLException, and ClassNotFoundException.

Unchecked exceptions, on the other hand, are exceptions that the compiler does not force you to handle explicitly in your code. These exceptions are typically caused by programming errors, such as dividing by zero or trying to access an index that does not exist in an array. Examples of unchecked exceptions in Java include NullPointerException, ArrayIndexOutOfBoundsException, and ArithmeticException.

## How to Handle Exceptions in Java

To handle exceptions in Java, you need to use a try-catch block. A try-catch block allows you to catch and handle exceptions that may occur during the execution of your code. Here is the syntax of a try-catch block in Java:

```java
try {
    // code that may throw an exception
} catch (ExceptionType1 e1) {
    // exception handling code
} catch (ExceptionType2 e2) { //optional. You can catch many different Exceptions
    // exception handling code
} finally {
    // code that will always execute, regardless of whether an exception occurred
}
```

In this code, you put the code that may throw an exception inside the try block. If an exception occurs, the JVM will jump to the appropriate catch block based on the type of exception that occurred. You can have multiple catch blocks for different types of exceptions.

The `finally` block is optional and will always execute, regardless of whether an exception occurred or not. Finally block is commonly used to release any resources that were acquired in the try block.

Here is an example of how to use a try-catch block in Java. We'll cover File I/O in the next lesson, so don't worry if you've never seen `FileInputStream` before. Focus on the try/catch flow for now.

```java
import java.io.FileInputStream;
import java.io.IOException;

public class Learn {
    public static void main(String[] args) {
        try {
            FileInputStream file = new FileInputStream("myfile.txt");
            // code that uses the file
        } catch (IOException e) {
            System.out.println("An error occurred while reading the file: " + e.getMessage());
         } catch (Exception e) { // you can catch generic exceptions, and print the error to the console
            System.err.println(e);
         }
        
         finally {
            // close the file resource
            file.close();
        }
    }
}
```

In this code, we're trying to open a file and read from it using a `FileInputStream`. If an `IOException` occurs, we `catch` it and print an error message to the console. In the `finally` block, we close the file resource to ensure that it's released properly.

## Best Practices for Exception Handling in Java

Here are some best practices to keep in mind when implementing exception handling in your Java programs:

1. Always handle exceptions explicitly. Never ignore exceptions, as doing so can lead to unpredictable behavior and potential security issues.
2. Catch only the exceptions that you know how to handle. Catching a generic exception type like `Exception` is not recommendeded, as it can make it difficult to pinpoint the problem. It's like saying "I think this will cause a problem, but I don't know why". That's why you test your application, see what exceptions it may cause, and plan accordingly!

## What's next?
