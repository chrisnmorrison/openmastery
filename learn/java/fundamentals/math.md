---
sidebar_position: 5
---

# Mathematical Functions in Java

Math is pretty simple in Java, as long as you aren't writing complex equations!

Let's go over the core math operators.

```java
int mySum = 1 + 2; //now equals 3
int myDiff = 2 - 1; // now equals 1
int myMult = 2 * 3; // now equals 6
int myDiv = 6 / 3; // now equals 2
```

You can also use variable names instead of the actual numbers.

```java
int num1 = 2;
int num2 = 2;
int sum = num1 + num2 + 10; // 2 + 2 + 10 = 14
```

What about decimals?

```java
int myDiv = 3 / 2 // does it equal 1.5?
```

No, it equals 1, because the `int` type only holds whole numbers, do it will disregard the decimal completely.

```java
double myDiv = 3 / 2 // does this work now?
```

Still no! It would equals `1.0`. This statement still divides two integers, so the result will be an integer.

In order to fix this, at least one number in the equation needs to be represented with a decimal. Your answer will now contain the decimal.

```java
double myDiv = 3.0 / 2;
double myDiv = 3 / 2.0;
double myDiv = 3.0 / 2.0;

//These all give the same result - 1.5
```

What about more complex operations, like square root? Luckily, Java provides built-in functions that will do this for you. You don't have to create the operations yourself!

```java
int squareRoot = Math.sqrt(16); // equals 4
```

The dot (`.`) notation that you see above in `Math.sqrt(x)` is calling a method in the Math class called `sqrt()`. We'll look at functions and classes indepth soon! For now, just notice the syntax to call a method that is part of a class.

Java has a lot of other built in math operations as well. If it's a common math operation, then Java likely has it.

```java
double myNum = Math.tan(2); //returns the tangent of a number
//sin, cos, atan, etc. also exist!

int bigNum = Math.exp(55); //exponential function
```

Remember constants from the last lesson? The Math class also contains a few constants.

```java
//Let's find the circumference of a circle
double radius = 2.5;
double circumference= Math.PI * 2 * radius;
```

Beginner college courses often give assignments that require you to use `Math.PI` or other constants, so remember that they are here for your convenience!

Of course, you can also use your own constants.

```java
final double savingsAccountInterestRate = 2.2;

double balance = 2000.00;

//calculate balance in one month
double newBalance = balance + (balance * (2.2 / 100)); // equals 2044.00

```

It's a bit cumbersome to write `Math.` before every use of the library. We can avoid this by using a static import of the `Math` class.

```java
import static java.lang.Math.*;

double mySquare = sqrt(25);
```

We will discuss imports later, so don't worry too much about it for now. Just be aware that you can use this to write less code and achieve the same result. 

The basics of math in Java are fairly straightforward and intuitive. We all know that math is a tough subject, but luckily, the syntax is fairly straightforward. **Remember**: even by practicing simple math problems, you're practicing Java syntax, and you are one step closer to mastery!

## What's next?

