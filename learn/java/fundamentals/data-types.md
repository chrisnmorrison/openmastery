---
sidebar_position: 2
---

# Variables & Data Types

All programming languages allow you to store data of all different forms. Sentences, numbers, sentences, numbers, and whatever else can be represented by 1’s and 0’s, bundled together as separate values (hint: one use of objects!) can all be stored in variables.

Java has two categories of data types. Let's start with the simplest, which are **primitive variables**. Primitive variables cannot be broken down into smaller pieces. This will make more sense after you learn the second data type category. Examples of primitive data types:

```java
byte smallNum = 5;    // Whole number that must be in the range -128 to 127
short shortNum = 123;    // Whole number that must be in the range -32,768 to 32,767
int num = 5000000;    // Whole number that must be in the range -2,147,483,648 to 2,147,483,647
long longNum = 8223372036854775808;     // Whole number that must be in the range -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807

// What about decimal numbers?
float decimalNum = 12.123; //accurate to about 6-7 decimal digits
double anotherDecimalNum = 55.173268762; //accurate to about 15 decimal digits

```

Note that while `long`, `float`, and `double` will work like this, good practice is to prefix your number with a suffix. This helps the compiler understand the numbers you're working with, and may prevent errors.

```java
long myLong = 123l;
float myFloat = 3.333f;
double myDouble = 234.22544444d;
```

The above numbers use the standard, well-known base 10 decimal number system (i.e. the numbers we use every day!). You can also represent numbers in hexadecimal, octal, and binary. As a beginner, don't worry about this. These are for special situations, e.g. you may prefer hexadecimal when doing embedded programming.

```java
int binary = 0b01001; // base 2
int octal = 010; //base 8. Confusing, so just avoid this system.
int hex = 0x3A4E; //base 16
```

As mentioned, these are only for special situations, and you likely won't use these. Just know that they exist!

What about non-numbers?

```java
char letter = 'c';
```

The `char` data type may look simple, but it's actually quite complicated. `char` is encoded using Unicode, which is an encoding scheme that translates codes (e.g. `\uo022`) into characters. Chars take up two bytes of memory, which allow up to 65,536 different unicodes. How are more complicated languages, all with thousands of distinct characters, represented in Unicode?

There's no short explanation, so you can read more about it [here](https://en.wikipedia.org/wiki/Japanese_language_and_computers). Typically, you **should not** use `char` to represent more complicated alphabets, and instead use `String`. For now, I wouldn't be too worried about this topic, but just be aware that it can be an issue when working with data in written/spoken languages with complex alphabets.

Any other data types?

```java
boolean valid = false;
```

Booleans are used to denote something as `true` or `false`, and are used in logic decisions. Don't overthink booleans, they are very simple. They can become tricky when working with complicated decision trees, but for now, think of them as a way to control program flow. We'll cover program flow much more in-depth in later sections.

Why so many different types? When should you use one over the other?

We'll cover that in the [next section](./comparing-data-types). For now, let's look at the next category - non-primitive data types: `String`, `arrays`, and `objects`.

```java
//Strings are 'strings' of letters, numbers, and symbols. Most often, they represent words or sentences
String sentence = "Hello world! We love Java";
String word = "Hello";
String number = "123"; // Is this an integer? (no, this is a string!)
```

Arrays, in their simplest form, can be viewed as a group of items from a specific data type, grouped together. They are the simplest data structure.

Note how they are declared, and that you need to write [] when declaring arrays. There are two ways of creating arrays.

First, by declaring (creating the variable) and initializing (setting values) all at the same time

```java
int[] numbers = {1,2,3};
//also valid, but typically not done this way:
int numbers[] = {1,2,3};

//Second, by declaring (creating the variable) first, without initializing (setting values)
String[] words;
words = new String[3];
//or, in one line
String[] words = new String[3];
```

This lesson will just cover arrays briefly, and we'll dive into it more thoroughly later.

Last, let's introduce objects. Objects are an incredibly important part of Java, which is an object-oriented programming language. They deserve their own section (which the have, later on in the course), so let's keep it very brief for now.

Objects are complex data types that represent a **thing**. By a thing, we literally mean anything that can be described by attributes or actions. This "thing" can be physical, virtual, or imaginary.

For example, a savings account. What are the attributes of a savings account?

- balance
- interest rate
- account holder's name

Now, what about actions?

- withdraw
- deposit
- transfer to a different account

I'm sure we could come up with more, but let's keep it short.

It's important to note that there are no set guidelines for defining attributes and actions. Three considerations mainly guided these: **knowledge of the thing**, **common sense**, and **program requirements**.

We'll dive into many more examples later on in the course, so for now, let's look at what the code might look like for a very basic savings account.

Pay attention to the naming convention for classes. Class names should be nouns, should be in mixed case with each word capitalized, and no underscores or dashes. See below.

```java
public class SavingsAccount {
    // these are ATTRIBUTES
    private balance;
    private interest;
    private accHolder;

    // these are our actions
    // which are called METHODS
  public void withdraw() {
    // do something
  }

  public void deposit() {
    // do something
  }

  public void transfer() {
    // do something
  }
```
