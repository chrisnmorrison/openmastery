---
sidebar_position: 4
---

# Generic Collections

Similar to Collections (but, this is a different concept), you can store multiple datatypes in one collection. 

:::danger
This is one of those "It works, but shouldn't do it without a good reason" concepts.

Java is a **typed** language, meaning that variables have types. Typed languages are meant to help you as a developer! You'll have more secure, predictable code.

But, you may see this in the real world, so it's worth covering the topic.
:::

## Generic Collections

In Java, an `ArrayList` is a class that can store a collection of objects, and the type of the objects stored in the `ArrayList` can be specified using a generic type parameter.

For example, to create an `ArrayList` that can store objects of type `String` and `Integer`, you can use the following code:

```java
ArrayList<Object> list = new ArrayList<Object>();
list.add("hello");
list.add(123);
```

In this example, the `ArrayList` is declared with a generic type parameter of `Object`, which means that it can store objects of any type. The `add()` method is used to add a `String` and an `Integer` to the `ArrayList`.

Typically, you will be creating an `ArrayList` that is specific to a certain type of object. For example, to create an `ArrayList` that can store only `Strings`, you can use the following code:

```java
ArrayList<String> list = new ArrayList<String>();
list.add("hello");
list.add("world");
```

In this example, the `ArrayList` is declared with a generic type parameter of `String`, which means that it can store only objects of type `String`. The `add()` method is used to add two `Strings` to the `ArrayList`.

## Should you ever use generic collections?

Most developers will say "No, never. **Typed** languages are **typed** for a reason".

Untyped languages do exist. When you define variables in these languages, you do not need to specify the type.

For example, here's some Python code

```python
# Lists can contain any data types
myList = ["Hello", 123, True, 9000, "male", False]

# variables can be declared with one type, and reassigned to another type
hello = "Hello!"
hello = 42
hello = True
# no errors
```

Python lists can contain any combination of data types by default. This flexibility can be nice, but also problematic! Take a look at this Java code:

```java
ArrayList<Object> myBills = new ArrayList<Object>();
myBills.add(123.00);
myBills.add(55.12);
myBills.add("Rent was 800 dollars")
```

Consider the following:

Should this be allowed? Most likely not. If you're writing an app to keep track of your bills, this will likely result in one of two things:

1. A compile error
2. Incorrect values

You may be able to think of creative used for Generic Collections, but 99.9% of the time, using a Generic Collection shouldn't even cross your mind. Typed languages benefit you, the developer.