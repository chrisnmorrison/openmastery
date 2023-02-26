---
sidebar_position: 4.5
---

# String Examples

We've seen some interesting numeric examples in Java, but we've only scratched the surface of the `String` type. Let's dig a bit deeper

Strings are nothing more than a grouping of unicode characters. Each unique number,letter, symbol, and special characters (such as ©), can be represented as a unique unicode sequence.

```java
public class Learn {
    public static void main(String[] args) {
        String hello = "Hello world!";

        System.out.println(hello);
    }
}
```

That's the simplest way to work with Strings. Define a string, then (most likely) output it at some point.

But, there's so much more you can do with Strings! For example, you can combine them.

```java
public class Learn {
    public static void main(String[] args) {
        String hello = "Hello";
        String firstName = "John";
        String lastName = "Smith";

        System.out.println(hello + " " + firstName + " " + lastName + "!"); // Hello John Smith!
    }
}
```

In this example, we combined variables using **concatenation** to create a single String. Concatenation simply means linking things together. In this case, we are linking seperate Strings together to equal one String. Remember, when printing in this format, you have to include `+ " " + ` between variables to create a space, as your variable likely doesn't have a space!

Writing out the pluses and spaces is quite tedious when printing Strings this way. Luckily, Java has a built in shortcut to build Strings much more easily.

```java
public class Learn {
    public static void main(String[] args) {
        String hello = "Hello";
        String firstName = "John";
        String lastName = "Smith";

        //Method 1
        System.out.println(hello + " " + firstName + " " + lastName + "!"); // Hello John Smith!
        //method 2 (easier)
        System.out.printf("Round two: %s %s %s!", hello, firstName,lastName);
    }
}

// Hello John Smith!
// Round two: Hello John Smith!

```

This looks confusing, so let's break it down. We used a different method called `printf()`, which meand **formatted print**. Many programming languages have some form of this. Examples: In Javascript, this is called template literals. In Python, this is called f-strings (but Python also has an older print formatting method as well).

`printf()` prints just like `println()`, but allows you to use placeholders called formatting rules that begin with `%`. Here are the different formatting options in Java:

![Java's printf](./../../../static/img/printf.png "Table of Java printf options")
_Image obtained here: https://runs-on-coffee.blogspot.com/2013/03/14-formatting-output.html_

## What's next?
