---
sidebar_position: 6
---

# Combining Assignments with Operators

We looked at simple math operations, but did you know that you can use a variable in it's own expression? For example,

```java
int i = 2;
i = i + 4; // = 6
```

These are common operations, so Java provides an easy shortcut to write this more compactly!

```java
int myNum = 5;
myNum += 10; // = 15

//the above line is the same as writing
myNum = myNum + 10;
```

We're essentially saying "take the value of myNum, add 10, and store the new value in myNum".

While addition is a common operation here, you can use any of the elementary math operations

```java
int i = 5;
i += 2;
i -= 3;
i *= 4;
i /= 3;
```

For these examples, it may or may not matter what you write. Either option is easy to read. 

Just imagine you were scanning a method that had 1000 lines of code. Wouldn't it be much easier to read a line of code that contains half of the characters? That would certainly help you decipher the method faster.

The only downside of this shortcut is that you can't chain operators on the same line.

```java
int i = 5;
i += 2 *= 4; // ERROR

// you would need to write
i += 2;
i *= 4;
```

## What's next?

