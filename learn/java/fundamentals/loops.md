---
sidebar_position: 15
---

# Looping

Computers are great at performing repetitive tasks. In fact, that's one of the main reasons they were invented!

To our knowledge, every programming language contains looping. You define how you want to loop, when to end the loop, and what to perform with each iteration. Java has several types of loops, all of which are equally important. We'll cover all the loops, and in the next lesson, we'll give plenty of examples so that you can become more familiar with looping!

:::warning
Loops are susceptible to infinite loops, where your program be stuck in a loop until you run out of memory. We'll give examples of this in the next lesson. To avoid this, always remember to verify that your program can reach your end condition.
:::

## For Loop

The `for` loop is used to iterate through a set amount of steps defined by a given condition, such as a predefined iteration count, or an array. It takes the following form, which we'll expand on after the code block:

```java
public class Learn {
    public static void main(String[] args) {
        //         (1)          (2)             (3)
        for (initialization; end condition; increment/decrement){
            // do something
        }

    }
}
```

1. The initialization condition. Common practice is to use `int i` to store the value of the initial condition.
2. End condition. You define when you want the loop to stop. This typically also uses `int i` set to the value that, once reached, will end the loop.
3. Increment/decrement: If using `int i`, you define how `i` will change on each iteration

Let's look at a few different examples to show the flexibility uses of `for` loops:

```java
public class Learn {
    public static void main(String[] args) {
        for (int i = 0; i <= 10; i++) {
            System.out.println(i);
        }
        System.out.println(); //print a blank line

        for (int i = 10; i >= 0; i--) {
            System.out.println(i);
        }
        System.out.println();

        for (int i = 0; i <= 10; i = i + 2) {
            System.out.println(i);
        }
        System.out.println();
    }
}
```

```text
0
1
2
3
4
5
6
7
8
9
10

10
9
8
7
6
5
4
3
2
1
0

0
2
4
6
8
10
```

These are very simple demonstrations of the `for` loop. For now, the main thing to understand is how each loop works. In the next page we'll dive into better use-cases of `for` loops. For now, let's cover the basics.

:::warning
There are a lot of things that you can use as your `for` loop iterator, such as `double`, and you can even use different variables in each of the three conditions. We recommend **not** to do this, to avoid code obfuscation and to avoid bugs. For example, `double` and other floating point values are subject to possible rounding errors. In basically every situation, you can use the same integer variable (usually called `int i`) in each three condition.
:::

#### Nested For loops

You can write `for` loops within `for` loops. The main use-case of this is when you're working with 2-D arrays (or 3-D, etc.), or some kind nested list.

```java
public class Learn {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= 5; j++) {
                System.out.println(i + " " + j);
            }
        }
    }
}
```

```
1 1
1 2
1 3
1 4
1 5
2 1
2 2
2 3
2 4
2 5
3 1
3 2
3 3
3 4
3 5
4 1
4 2
4 3
4 4
4 5
5 1
5 2
5 3
5 4
5 5
```

In this example,

1. The `i` loops is initialized
2. The `j` loop is initialized and completely iterates
3. The `i` loop increments. Repeat from step 2 until `j` has reached the ending condition

### For-Each Loop

Also called the _enhanced for-loop_, the `for-each` loop excels when you know that you want to iterate over a whole array or collection, rather than a predefined condition. We haven't covered `Collections` yet, so for now, just understand that Java has a number of different data structures other than arrays.

Most importantly, the `for-each` loop saves you from having to worry about index values. It simply iterates from start to finish.

```java
public class Learn {
    public static void main(String[] args) {
        int[] myCollection = {1,2,3,4,5,6};

        //    (1)         (2)
        for (int i : myCollection) {
            System.out.println(i);
        }
    }
}

```

```text
1
2
3
4
5
6
```

1. Represents each value of the array or collection, starting from the first value
2. The name of your array or collections

In the above example, the `for-each` loop iterates over the entire collection. It's a much simpler syntax compared to the `for` loop, and when you want to iterate over an entire collection, it's preferred to use the `for-each` loop. In fact, the `for-each` loop is essentially syntactic sugar (reworking code to make it easier to read) for the built-in `Iterator` interface.

:::tip
In both the `for` and `for-each` loops, you can use `break;` to **break out** of the loop. For example, if you're searching an array with 1000000 integers, and your number is the 5th element, why bother wasting resources searching the rest of the array? We'll look at an example of this in the next lesson.
:::

## While Loop

Similar to the `for` loop, `while` loops continually run a block of code until a condition is met.

```java
public class Learn {
    public static void main(String[] args) {
        int i = 0;

        while (i <= 10){
            System.out.println(i);
            i++; //important! without this, we could have an infinite loop
        }
    }
}

```

In this example,

- we define our start condition outside of the `while` loop - `int i = 0`
- we define our end condition in brackets beside `while` - end the loop when `i <= 10`
- in this example, we print the value of `i` during each iteration
- we increment/decrement our iterator **inside of the block**. In this example, we increment `i` by 1 on each iteration. Without this, `i` would never increase and our condition will always be true, causing the value of `0` to be printed infinitely (until your program runs out of memory)

### Do-While Loop

The do-while loop is very similar to the `while` loop, with one key difference. In the `do-while` loop, the loop always runs at least once, even if the end condition signifies that the loop should not run anymore. Let's refactor our previous example as a `do-while` loop:

```java
public class Learn {
    public static void main(String[] args) {
        int i = 0;
        do {
            System.out.println(i);
            i++; //important! without this, we could have an infinite loop
        } while (i <= 10);

        }
    }
```

Now, let's look at a quick example to show the different output between a `while` and `do-while` loop.

```java
public class Learn {
    public static void main(String[] args) {
        boolean running = false;

        while(running) {
            System.out.println("While loop - does this print?");
        }

        do {
            System.out.println("Do-while loop - does this print?");
        } while (running);

        }
    }
```

```text
Do-while loop - does this print?
```

Even though our condition was not met, our do-while loop still prints once. In a `do-while` loop, your loop runs, **then** your program checks the condition.

## What's next?
