---
sidebar_position: 4
---

# Data Types Differences

You may have a few questions about data types. Why are there so many? Why would I use a `byte`, when I can just use an `int` for all of my numbers?

The short answer: you can do whatever you want, as long as you aren't trying to store a number above the size limit (e.g. you can't store `1111112222` as a `byte`). But, you can store the number `5` as a `byte`, `short`, `int`, or `long`. **But, doing whatever you want may not adhere to best practices.**

The long answer: The numeric data type matters A LOT for large applications. If your Java professor asks you to write 20 lines of code that perform math operations, the type doesn't really matter. But, what matters is that you understand when to use certain data types. You should get into the habit of using the best data type for the situation. Let's dive into this a bit by running some code.

```java
System.out.println("Size of byte: " + (Byte.SIZE/8) + " bytes.");
System.out.println("Size of short: " + (Short.SIZE/8) + " bytes.");
System.out.println("Size of int: " + (Integer.SIZE/8) + " bytes.");
System.out.println("Size of long: " + (Long.SIZE/8) + " bytes.");
System.out.println("Size of char: " + (Character.SIZE/8) + " bytes.");
System.out.println("Size of float: " + (Float.SIZE/8) + " bytes.");
System.out.println("Size of double: " + (Double.SIZE/8) + " bytes.");

```

```
// Output:

Size of byte: 1 bytes.
Size of short: 2 bytes.
Size of int: 4 bytes.
Size of long: 8 bytes.
Size of char: 2 bytes.
Size of float: 4 bytes.
Size of double: 8 bytes.
```

A few things happened here. Let's break it down.

Why did we use, for example, `Integer` instead of `int`? In Java, remember that `int` is a primitive type. `Integer` is what's called a wrapper class, and it allows us to treat an integer value as an `object`. If you don't understand objects yet, don't worry. This allows us to provide additional functionality to variables by attaching `methods` and `attributes` to objects. Here, `Integer.SIZE` looks for an attribute called SIZE, which is a pre-defined attribute in the JDK. `.SIZE` is the size of the object in RAM (random access memory) in **bits**.

Since the `.SIZE` is in bits, and there are 8 bits in a byte, we divide by 8 (e.g. `Long.SIZE/8`). RAM is not measured in bits. Rather, it is measured in bytes (e.g. kilobytes, gigabytes).

So, dividing by 8 gives us a size we can understand! Let's look at why we would choose certain data types over others.

Imagine that you're a developer at a movie ratings website, and you're writing a program that calculates average movie ratings for EVERY movie on the site. There are a lot of movies, and there are a lot of ratings. You'll be performing **millions, maybe billions** of operations. Modern computers are powerful, but we don't want to waste precious resources, and we want our results as fast as possible. Especially if we want to regularly update our calculations with new reviews!

:::info
Optimization is incredibly important in the real world. If your company hosts their services on a cloud platform, non-optimized code can result in much higher costs and worse customer experience.
:::

We know that on our movie rating platform, ratings go from 1 to 10. Should we assign ratings as an `int`?

You can, but you shouldn't. Since we know that `int` uses `4 bytes`, and `byte` uses `1 byte`.. now which one should we use?

If you guessed `byte`, you're correct! Remember, `byte` is the smallest numeric data type, and can hold values from -128 to 127. Since ratings will never be higher than 10, there's no reason to use a larger data type in this situation. Why use an `int`, which uses 4x the memory? It's simply a waste of resources, and efficiency is key.

Quick note: If we are averaging movie ratings, `byte` would not be appropriate for our `sum` variable, or for the `average` calculation. We would want more appropriate values for these, such as `long` for our `sum` variable and `float` for our `average` variable.

Take a moment to think of numbers you may want to store in a program, and which data type you should use. Here are some of our ideas:

- `long` can be used to store Jeff Bezos' wealth
- `byte` can be used to store someone's age (assuming they aren't older than 127!)
- `float` can be used instead of `double` to double check your math homework, since you likely aren't rounding to 6-7 decimal places!

The key takeaway from this lesson is that different data types have different sizes, and sometimes it's unnecessary to use larger data types. If you're a full-time developer, **you must understand this topic**. We've only scratched the surface, but remember: you should always be looking for ways to optimize your code.
