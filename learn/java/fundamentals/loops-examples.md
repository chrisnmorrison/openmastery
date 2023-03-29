---
sidebar_position: 16
---

# Looping Examples

Let's look at examples of each loop to help cement your understanding.

We'll first write our use-case in plain English, and we encourage you to try writing it yourself before scrolling to the code. Then we'll write what we came up with. Your code might be a little different, and that's okay! The main thing is that you have the same output.

## For loop

### Example 1 - Reverse a String

Use a `for` loop to reverse the string `"Reverse me!"`, and print it.

This can be tricky for beginners, so here's a few hints:

Hint 1: Think of what the 3 conditions (initialization; end condition; increment/decrement) should be. The initialization should start at the end of the `String`, and the loop should increment towards the beginning of the `String`.

Hint 2: The `stringName.length()` returns the length of a `String`

Hint 3: `stringName.charAt(i)` returns the character at the specified index. For example, `stringName.charAt(3)` returns the **4th** character, since indices are zero-based

Try this out for yourself, and once you have, here's our solution:

public class Learn {
public static void main(String[] args) {
String myString = "Reverse me!";
String reverse = "";

        for (int i = myString.length() - 1; i >= 0; i--){
            reverse += myString.charAt(i);
        }

        System.out.println(reverse);
    }

}

## For-each loop

### Example 1 - Rework a for loop

Rework this `for` loop to be a `for-each` loop instead.

```java
public class Learn {
    public static void main(String[] args) {
        String[] fruits = new String[] { "Apple", "Pear", "Orange" };

        for (int i = 0; i < fruits.length; i++) {
            System.out.println(fruits[i]);
        }

        }
    }
```

**New Code:**

```java
public class Learn {
    public static void main(String[] args) {
        String[] fruits = new String[]{"Apple", "Pear", "Orange"};

//        for (int i = 0; i < fruits.length; i++) {
//            System.out.println(fruits[i]);
//        }

        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}


```

## While loop

### Example 1 - Exit Command

Ask the user for input using `Scanner`, and store their input as a `String`. Print the value that was entered, and prompt for another input. If the user enters `"quit"`, then terminate the program.

```java
import java.util.Scanner;

public class Learn {
    public static void main(String[] args) {
        boolean running = true;
        String value = "";

        Scanner in = new Scanner(System.in);

        while (running){
            System.out.print("Please enter something: ");
            value = in.nextLine();
            System.out.println("You entered: " + value);
            if (value.equals("quit")){
                running = false;
            }
        }
        System.out.println("You exited. Goodbye!");
    }
}


```

## Do-while loop - Printing Numbers

Create `int x` and set it to equal `3`. Write a `do-while` loop to print the value of `x`, then mutiply `x` by itself. Run the loop as long as `x` is less than `1000000` (one million).

```java
import java.util.Scanner;

public class Learn {
    public static void main(String[] args) {
        int x = 3;

        do {
            System.out.println("X = " + x);
            x *= x;
        } while (x < 1000000);
    }
}
```
