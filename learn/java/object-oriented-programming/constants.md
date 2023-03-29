---
sidebar_position: 12
---

# Constants (final keyword)

In Java, the `final` keyword is used to denote that a variable, method, or class cannot be changed after it has been initialized or defined. In other words, use the `final` keyword when you want to prevent something from being modified.

`final` can be applied to several different things:

When applied to a variable, `final` indicates that its value cannot be modified once it has been assigned. This can help prevent errors in your code and make it easier to reason about the behavior of your program.

When applied to a method, `final` indicates that the method cannot be overridden by a subclass. This is useful when you want to ensure that a method always behaves the same way, regardless of any changes made by subclasses.

When applied to a class, `final` indicates that the class cannot be subclassed. This can be useful when you want to prevent other developers from extending your class and potentially introducing bugs or unexpected behavior.

:::tip Best practice
When declaring a constant variable, write the variable name in all caps (see example below). You don't have to, but this is considered best practice and convention.

Constant classes or methods can be named normally, with no special convention.
:::

```java
public class SavingsAccount {
    private double balance = 1234.56;
    private final double INTEREST_RATE = .025; // A final variable cannot be reassigned

    public final void giveMeMyInterest() { // A final method cannot be overridden
        this.balance = balance + (balance * INTEREST_RATE)
    }
}
```

In this example, `INTEREST_RATE` will not be able to change during program execution. `giveMeMyInterest()` cannot change either. There are several good reasons to use constants:

- Preventing accidental reassignment: By marking a variable as final, you can ensure that its value is not accidentally changed elsewhere in your code. This can help prevent bugs and make your code more reliable.
- Ensuring method consistency: When you mark a method as final, you are indicating that its behavior should not be changed by any subclasses. This can help ensure that your code behaves consistently and predictably, regardless of how it is used.
- Protecting code integrity: By marking a class as final, you can prevent other developers from subclassing it and potentially introducing bugs or unexpected behavior. This can help ensure that your code remains stable and maintainable over time.
- Improving code readability: When you use the final keyword in your code, you are explicitly indicating to other developers that a variable, method, or class should not be changed. This can make your code easier to understand and maintain, especially for large or complex projects.

By using final appropriately, you can ensure that your variables, methods, and classes behave exactly as intended, and help prevent errors and bugs in your code.
