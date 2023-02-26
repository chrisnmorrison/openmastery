---
sidebar_position: 1
---

# Syntax Introduction

One of the most interesting things about Java is the jargony introduction to every program - the `main` method.

Java programs may be composed of one, or many different files. Some files may define `classes`, `interfaces`, `enums`, etc. (more on that later!). Some files may simply contain helper functions, placed there so that they do not cram other files.

The common theme of any Java program is one and only one `main` method. Why only one? Because the main method is the entry point to the program. If you defined two entry points and ran your program, how would it know what to run?

So, let's define one, and only one main method.

At the very least, you will need to write:

```java
public class Main {
  public static void main(String[] args) {
    // Your code goes here!
  }
}
```

This is probably one of the most confusing things for beginners. Why do you need so much code just to get started? And what does it mean?

Let's break down each part of the above code. As a beginner, **don't expect to understand what this means yet**. It's hard to understand, and you aren't alone. Let this serve as an introduction, and as you progress in your Java journey, this will make more sense.

`public` means that the code is available to all outside code. Essentially, other files can access it. We'll learn about access modifiers soon.

`class` means that `Main` is a class, and for example, not an `enum`. This keyword is less important to understand at this point, so we'll look at classes later.

`Main` is the name of our class. In Java, this is also the name of our file. So a class named `MyClassName` will be in the file `MyClassName.java`.

According to Java naming conventions, class names are CamelCase. [Learn about other naming conventions](#).

`static` is a tricky concept for beginners to learn, and you won't understand it without understanding classes. Put as simply as possible, the `static` keyword means you will only have one instance of the thing in question (in this case, the `main()` method). If you created a static method of a class, that static method is not attached to any given instance of the class, rather, it's attached to the class itself. If you don't understand `static` right now, don't worry. You can find an explanation of classes and static [here](#).

`void` means that the method returns nothing. What does `return` mean? Put simply, a function may 'return' data to the program after it runs. An addition method may return an `int`, and a division method may return a `double` or `float`, which are decimal point numbers.

`main` is simply the name of the main method! Don't overthink it.

`String[] args` is strange looking, and as a beginner, it's not really important to you. Just make sure you write it. Essentially, it is used for command line arguments for Java programs, if you run your program on the command line. `String[]` means that your command line arguments are stored in a String array (kind of like a list of alphanumeric values. More on this later) called `args`.

As a simple example, if you run `java MyJavaProgram hello world` on the command line, you will end up with

```java
public static void main(String [] args) {
    String one = args[0]; //equal to "hello"
    String two = args[1]; //equal to "world"
}
```

Some of these concepts are hard to grasp (I'm looking at you, `public static void main(String [] args)`), so if you're having difficulty, don't worry. Continue with the course, and come back to this later.
Some of these concepts are hard to grasp (I'm looking at you, `public static void main(String [] args)`), so if you're having difficulty, don't worry. Continue with the course, and come back to this later.

I repeat - if you don't understand this now, **don't worry!** Continue learning, and you will gradually understand it. It's difficult to understand abstract concepts when you don't have the foundational knowledge to grasp it yet.

Once you reach the beginner-intermediate stage, the above code will make sense.

## What's next?
