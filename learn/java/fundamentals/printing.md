---
sidebar_position: 1.5
---

# Print vs Return

Before we dive any deeper, let's look at two concepts that you'll be using extremely often, no matter what you're doing with your code: printing, and returning.

Are you using an IDE, like Eclipse, IntelliJ, or Visual Studio Code? You've probably noticed that when you run your code, a `console` appears. In Java, printing something using `System.out.println()`, or a similar method like `.print()`, will output the specified text to the IDE's console. That text is, you guessed it, your output!

Printing and Returning are two very different concepts, and the difference often confuses beginners. Let's compare both.

### Print

Printing is exactly what sounds like (don't overthink it). When you print something, it prints to your IDE's console, or to the command line on a command line program.

```java
public class Learn {
  public static void main(String[] args) {
    try {
      String[] hello = {"hello", "world"};
      System.out.println(hello[15]);
      System.out.println("does this print?");
    } catch (Exception e) {
      System.out.println(e);
      System.out.println("Error!!!");
    }
  }
}

// Output:
// java.lang.ArrayIndexOutOfBoundsException: Index 15 out of bounds for length 2
// Error!!!
```

We haven't covered arrays or exceptions yet, so don't worry if you don't understand the code. We used this example to illustrate something important: printing errors to the console! If your program has 1 million lines of code, tracking down every error is going to be hard. So instead, you can catch exceptions, log them to the console, and your program can keep running (if possible, depending on the error). Similarly, you can print your output to files, so that your error messages are stored somewhere.

We'll go much more in-depth into this, but for now, let's compare `return` to `print`

### Return

```java
public class Learn {
    //defining a static method outside of main()
    static int addNums(int x) {
        return x + 10;
    }

    //this is where our code runs
    public static void main(String[] args) {
        int myNum = addNums(15);
        if (myNum > 100) {
            System.out.println("You have a high number!");
        } else {
            System.out.println(myNum + " is too low!");
        }

    }
}
```

You may not fully understand what's happening here, especially since we haven't covered `static`, `methods`, and a few other important concepts yet. But, we used this example to illustrate how `return` differs from `print`.

1. We define a method called `addNums()`, that takes a number as input, `x`, and returns `x + 10`.
2. Then, right under our entry point `public static void main(String[] args)`, we create a variable called `myNum` of type `int`. It stores the **returned** value of `addNums()`. Since 15 is passed to `addNums()`, it **returns** a value of 25. We store this value in `myNum`, so that we can use it later.

Could you achieve the same thing with `System.out.println`? Not really, without completely changing the program. By returning a value, we can use it later on. Printing only prints something to the console.

`return` can also exit from functions without returning anything. Essentially, you're returning out of the function, back to your program execution.

```java
public class Learn {
    //defining a static method outside of main()
    static Integer addNums(int x) {
        if (x < 0){
            // if x is less than zero, exit the method without returning anything
            return;
        } else {
           return 10 + x;
        }
      }
    }

```

```java live
String hello = "4";
System.out.println("Hello world");
```

--->
