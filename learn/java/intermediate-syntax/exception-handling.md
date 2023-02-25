---
sidebar_position: 3
---

# Exception Handling

Let's dive deeper into Exceptions, how to handle them, and why it's important.

## Checked Exceptions

Checked exceptions are exceptions that the compiler requires you to handle explicitly in your code. These exceptions are checked at compile time, which means that the compiler checks whether you have handled the exception or declared it to be thrown. These are also called **compile-time exceptions**, since you cannot compile your code if these exceptions are not handled.

Examples of checked exceptions in Java include `IOException`, `SQLException`, and `ClassNotFoundException`. These exceptions are typically related to input/output operations or other external factors that can cause errors at runtime.

Here's an example of how to handle a checked exception in Java:

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Example {
    public static void main(String[] args) {
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader("myfile.txt"));
            // code that uses the file
        } catch (IOException e) {
            System.out.println("An error occurred while reading the file: " + e.getMessage());
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e) {
                    System.out.println("An error occurred while closing the file: " + e.getMessage());
                }
            }
        }
    }
}
```

In this code, we're using a try-catch block to handle the `IOException` that can occur when reading a file. We're also using a `finally` block to ensure that the file resource is closed properly.

## Unchecked Exceptions

Unchecked exceptions are exceptions that the compiler does not require you to handle explicitly in your code. These exceptions are unchecked at compile time, which means that the compiler does not check whether you have handled the exception or declared it to be thrown. These are also called **runtime exceptions**.

Examples of unchecked exceptions in Java include `NullPointerException`, `ArrayIndexOutOfBoundsException`, and `ArithmeticException`. These exceptions are typically caused by programming errors, such as dividing by zero or trying to access an index that does not exist in an array, or trying to access an object that has not been initialized.

Here's an example of an unchecked exception in Java:

```java
public class Example {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;
        int c = a / b;
    }
}
```

In this code, we're trying to divide the value of "a" by the value of "b", which is zero. But, this is an unchecked (or run-time) exception because our code will compile, and we will not see the error until executing the program. This will cause an `ArithmeticException` to be thrown at runtime.

## When to Use Checked vs Unchecked Exceptions

Checked exceptions are typically used to handle external factors that can cause errors at runtime, such as input/output operations or network errors. They are useful when you need to ensure that a specific type of error is handled properly in your code.

Unchecked exceptions, on the other hand, are typically used to handle programming errors that are caused by the developer, such as null pointer references or index out of bounds errors. They are useful when you want to allow the exception to bubble up and terminate the program, as it indicates a more serious problem with the code.

## But, can't I just fix the code?

It's important to note that there is some debate among Java developers about the use of checked vs unchecked exceptions. Some developers argue that checked exceptions add unnecessary complexity to the code, while others argue that they provide valuable information to the developer about potential errors that can occur at runtime. Ultimately, the decision of when to use checked vs unchecked exceptions will depend on the specific needs of your application and the coding standards of your team.

The best practice is to obviously fix bugs and ensure exceptions don't occur. But, this isn't always possible due to the often monolithic size of an application. It's impossible to find all bugs.

But, understanding exception

## What's next?
