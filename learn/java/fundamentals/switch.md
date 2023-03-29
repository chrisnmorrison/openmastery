---
sidebar_position: 14
---

# Switch Statement

The `switch` statement has almost identical functionality to an `if-else` block, but looks much cleaner.

```java
switch(expression) {
  case value:
    // run some code
    break; //optional, but typically used
  case value:
    // run some code
    break;
  default:
    // run some code
}
```

The syntax can seem weird at first, but let's break it down piece by piece.

`switch` and `case` are reserved words, and are always there. You can have as many cases as you want.

`expression` is a variable or expression that will be checked by your cases.

`value` is a unique value for each `case`. It can be any data type, (e.g. `"Hello"` or `12` are both fine), but are usually the same data type in a case block.

`break` is optional, but you should almost always include it. If `expression` matches a case, the code in the appropriate `case` will run. If `break` is present, it's on the last line before the next `case`. It will **break** out of the switch block. If `break` is not present, rather than breaking out of the block, the next `case` will run (until the end, or until a `break` is reached). Usually, you don't want any code to run except a single case, but there are exceptions.

`default` runs if no cases are matched. Think of it as equivalent to `else`.

:::tip
A key difference between `if-else` and `switch` is that if-else can take more complex conditions, while `switch` can only take specific cases.

For example, you can use `if (myVar >= 3 && myVar <= 100)` in an `if`/`else` block.

But, you **cannot** use `(myVar >= 3 && myVar <= 100)` in a `switch` block.
:::

To reiterate, a `case` label can be:

- a string literal (e.g. `"Hello"`)
- a constant expression, such as a character (`'E'`), integer (`int`, `short`, etc.)
- these may either be typed directly as a case label, or they may be a variable

Let's compare an `if-else` block with an equivalent `switch` block. Both will do the exact same thing.

```java
public class Learn {
    public static void main(String[] args) {
        String car = "BMW";

        if (car.equals("Honda")) {
            System.out.println("Nice Honda!");
        } else if (car.equals("BMW")) {
            System.out.println("Cool BMW!");
        } else if (car.equals("Ford")) {
            System.out.println("That's a chonky Ford!");
        } else {
            System.out.println("What kind of car do you drive?");
        }

        // Now, let's rework the above code as a switch statement

        switch (car) {
            case "Honda":
                System.out.println("Nice Honda!");
                break;
            case "BMW":
                System.out.println("Cool BMW!");
                break;
            case "Ford":
                System.out.println("That's a chonky Ford!");
                break;
            default:
                System.out.println("What kind of car do you drive?");
        }
    }
}
```

```text
Cool BMW!
Cool BMW!
```

Awesome, they do the same thing! In order to cement your understanding, try two things:

- change the value of `car` to another make on the list, or another make that's not on the list.
- Remove all `break;`s from the `switch` block. What happens? Do you understand why you should have `break` as the last line in each `case`?

In summary, `switch` is essentially a cleaner looking version of `if-else`. It has it's limitations, but overall, we prefer to use it when comparing specific values rather than complex conditionals.

### Switch Example

If you're a college/university student, chances are you've been given an assignment where you have to create a mock program for a bank, store, etc. that has a menu of options.

A menu of options is where the `switch` statement excels. We recommend you use it to create clean, readable decision code that fits these requirements:

- the decisions are simple words, numbers, or other choices (e.g. `1`, `2`, `3`, etc.)
- there are a lot of options, and giant `if-else` blocks would look messy (you can have short `switch` statements too. mainly focus on the first requirement above)

```java
import java.util.Scanner;

public class Learn {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.println("$$$ Welcome to the Open Mastery Bank $$$");
        System.out.println("Please select your option: ");
        System.out.println("1: Deposit");
        System.out.println("2: Withdraw");
        System.out.println("3: See Balance");
        System.out.println("4: Exit");
        System.out.print("> ");
        int choice = in.nextInt();

        switch (choice) {
            case 1:
                // do something
                break;
            case 2:
                // do something
                break;
            case 3:
                // do something
                break;
            case 4:
                System.out.println("Exiting...");
                // do something
                break;
            default:
                System.out.println("Invalid option");
        }
    }
}
```
