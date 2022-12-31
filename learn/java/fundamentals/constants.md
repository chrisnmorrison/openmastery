---
sidebar_position: 4.1
---

# Constants

We've seen code examples where variables change. For example, `x = x + 12` will take the initial value of x, and add 12. What if we don't want to change our variable? There are several reasons why we would want to do this.

- We want to set a value that will never change, at least **during program execution**. For example, the interest rate attached to your Savings Account.
- Additionally, we want to prevent other code from changing a constant by accident.
- Or, we want to prevent malicious code from changing our code.

In Java, we use the keyword `final` to ensure a variable will not change after it's set.

```java
public class Learn {
public static void main(String[] args) {
// final must appear before the variable type!
final int speedOfLightInAVacuum = 299792458;

speedOfLightInAVacuum = speedOfLightInAVacuum + 2; // error!
    }
}
```

Essentially, the only way to change our `final` variables is to actually edit the actual Java code! After our program compiles, we can't change constants without editing the code and re-compiling.

It's good practice to use constants whenever you are 100% sure that a variable will not change. Many teachers will tell you that this can lead to problems from hackers. While that's true, defining constants also protects your code from yourself, or your co-workers! If you're writing a massive program, you may accidentally re-define a variable, or try to change a variable without realizing that it's constant! By defining a `final` variable, your compilation process will tell you that you can't change a constant, saving you a debugging headache.

Some programming languages have even adapted to a constant-first approach. For example, good Javascript developers [encourage others to always use constants, unless you know your variable will change during program execution](https://stackoverflow.com/questions/41086633/why-most-of-the-time-should-i-use-const-instead-of-let-in-javascript).

While I don't see as much discussion on this topic in Java, it's important nonetheless. If y

## What's next?
