---
sidebar_position: 5
---

# Data Types Conversions

What happens if you define an `int`, but later on you may want to represent the value with decimal points? Is all hope lost?

All hope is **not** lost, because you can convert between numeric data types! Conversions are quite easy, but there are a few things to keep in mind before converting between data types.

- Converting from smaller to larger data types (e.g. byte to int) is a legal, and easy conversion.
- But, converting from larger to smaller data types is **not valid**. One of two things will happen. First, you may get a **compiler error**, stating that the conversion is not valid. Second, you may not get an error, but you will (typically) get **unintended results**.

```java
//completely valid, since you're converting from a smaller to larger data type
byte myNum = 23;
int myNewNum = myNum; // = 23

//will work, but you no longer have the decimal point
float f = 5.23;
int i = f; // = 5
```

Another way to reassign variables is by type casting. The syntax is very simple:

```java
short sh = 45;
int i = (int) sh; // = 45
```

In this example, you converted a short to an int, and stored it in a new variable. While these examples are simply, casting is a very important concept, especially once you begin object-oriented programming.
