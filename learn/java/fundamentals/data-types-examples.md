---
sidebar_position: 4
---

# Data Types Examples

We've looked at very basic examples of variables and datatypes, so let's look at a few more examples to better understand the subject.

```java

// I want to create a lot of variables at once! 
int i,j,k;

//I want to initialize them too!
//Do these work?
int i,j,k = 20;

//No, this will not work, it will only initialize k to equal 20. You have to initialize them all separately!
int i = 10, k = 20;
//this works
```

If you want to create a variable that will never change, you can use the `final` keyword. For example, if you work for a bank, you probably don't want the interest rates to change without manually changing the code! Otherwise, other code could modify interest rates, either intentionally or unintentionally.

```java
final double interestRate = 2.1;
//now, this does not work
interestRate = 0.1;
```

## What's next?

