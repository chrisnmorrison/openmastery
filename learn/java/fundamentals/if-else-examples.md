---
sidebar_position: 13.5
---

# If, Else-If, and Else Examples

Let's look at some real-world examples of when you might use `if-else` conditionals.

We'll first write our use-case in plain English, and we encourage you to try writing it yourself first. Then we'll write what we came up with. Your code might be a little different, and that's okay! The main thing is that you have the same output.

## Examples

### Example 1 - Bank ATM

Ask user how much money they would like to withdraw using `Scanner`. Check if the bank account balance is above zero in order to withdraw. Print whether or not their withdrawal was successful.

```java
import java.util.Scanner;

public class Learn {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        //beep boop. pretend we pulled your balance from a database
        int balance = 23;

        System.out.printf("Please enter the amount you would like to withdraw: ");
        int amount = in.nextInt();

        if (balance - amount > 0) {
            System.out.println("Success!");
        } else {
            System.out.println("Your balance is too low :(");
        }
    }
}
```

### Example 2 - Verify data type

Right after your `public static void main(String [] args)` line, write the line `int myInt = 3;`. Then, write an `if-else` statement to check if `myInt` is of type `int`. We haven't covered this yet, so practice using google to solve this problem!

This problem is very open-ended, so be creative! There are multiple ways to verify data types. After writing your conditions, print an appropriate message in each conditional.

```java

```

### Example 3 - Nested if-else blocks

Create the variable `int i;`. Use Scanner to ask the user for input, and store the input as an `int`. Write an `if` block to test whether the `i` is **odd** using the modulus operator (`%`). Then, write an `if-else` block **inside** your `if` statement. If the number is less than or equal to 3, print a success message of your choice. Else, print `Your number is higher than three!`.

After writing the above code, change the value of `i` to reach all 3 print options.

```java
public class Learn {
    public static void main(String[] args) {
        int i = 3;

        if (i % 2 == 1) {
            if (i >= 3){
                System.out.println("Your number is odd, and it's less than or equal to 3!");
            } else {
                System.out.println("Your number is higher than three!");
            }
        } else {
            System.out.println("Your number is even!");
        }
    }
}
```

### Example 4 - Simple Password validator

Prompt the user for input, then store their input as a `String`. Check that the password is at least 8 characters long, and no longer than 20 characters. Inform the user whether their password is valid, too long, or too short.

:::warning
Obviously, real password validators are much more complex than this (i.e. ensuring numbers and symbols, encrypting before sending to a back-end). This is just a simple demonstration of `if-else` code.
:::

```java
import java.util.Scanner;

public class Learn {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.print("Please enter a password (between 8 and 20 characters): ");
        String pw = in.nextLine();

        if (pw.length() >= 8 && pw.length() <= 20) {
            System.out.println("Your password is valid.");
        } else if (pw.length() < 8) {
            System.out.println("Your password is too short.");
        } else { // we don't need an else-if here, since there are no other possible conditions
            System.out.println("Your password is too long.");
        }
    }
}
```

## What's next?
