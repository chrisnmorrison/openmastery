---
sidebar_position: 13
---

# If, Else, and Control Statements

Computers are just rocks that we made smart. They can't make decisions on their own; instead, we use code to instruct them to make decisions!

How computers make decisions is quite an advanced topic, and one that we won't cover in-depth right now. Instead, just know that some very intelligent engineers designed computers to make decisions, and we guide these decisions using code.

In Java, decisions are made using conditional statements. Conditional statements only run if the given condition is true, and take the following form:

```
if (condition) {
    perform one or more actions
    }
```

Here's a very simple example:

```java
if (2 == 2) {
    System.out.println("That is true!");
}
```

2 is (of course) equal to 2, so this statement is true. Because our condition (`2 == 2`) is true, then the code contained within the curly braces (`{}`) runs. What do you think happens here?

```java
if (2 == 7) {
    System.out.println("That is true!");
}
```

If you answered `nothing prints`, then you're correct. Since the **condition is false**, the code within the curly brackets doesn't run.

## If-Else statements

You can further expand your decision-making with two additional control statements: `else if` and `else`. `else if` checks an additional condition, and runs if that statement is true. `else` does not take a condition, and runs if the other conditions are false.

```java
public class Learn {
    public static void main(String[] args) {
        int one = 123;
        int two = 456;
        int three = 789;

        boolean isTrue = false;

        if (isTrue == true) {
            System.out.println(one);
        } else if(isTrue == false){
            System.out.println(two);
        } else {
            System.out.println(three);
        }
    }
}
```

Take a few seconds to ask - Are one of the first two conditions true? If neither are true, will the `else` block run?

In this example, `456` prints, because the `else if` condition is true.
:::info
In this example, the program will never reach the `else` condition. `isTrue` will always be true or false, so the program can reach only the `if` and `else if` block.
As a challenge, try changing the above code (however you want) so that `else` is reachable.
:::

### Else is optional

You don't have to include an else block. This will ultimately depend on your program. If you want to check all conditions, but run no code if no conditions match, then it's best to leave `else` out.

```java
public class Learn {
    public static void main(String[] args) {
        String one = "Hello";
        String two = "World";

        boolean myBool = false;

        if (myBool == true) {
            System.out.println(one);
        } else if (myBool == false) {
            System.out.println(two);
        }
    }
}
```

## Better comparison syntax

:::tip
This section explains coding best practices. Don't skip it!
:::

In the above examples, we use a conditional in the form `value1 == value2`. There's nothing wrong with this, but there's a better way to write this!

```java
public class Learn {
    public static void main(String[] args) {
        String one = "Hello";
        String two = "World";

        boolean myBool = false;

        if (myBool) {
            System.out.println(one);
        } else if (!myBool) {
            System.out.println(two);
        }
    }
}
```

We can remove `== true` and `== false`, and our code does the same thing.

In the above example, we can even go a step further in reducing our code. Can you see how? (hint: do we need the `else if`?)

```java
public class Learn {
    public static void main(String[] args) {
        String one = "Hello";
        String two = "World";

        boolean myBool = false;

        if (myBool) {
            System.out.println(one);
        // We can remove the condition, since we're just comparing a boolean
        } else {
            System.out.println(two);
        }
    }
}
```

A boolean can only be true or false, so we don't need to write the second condition. If the first condition fails, then the second condition is always going to pass.

This lesson contained very basic examples to illustrate if-else conditionals. In the next lesson, we'll look at some more real-world type examples of conditionals!
