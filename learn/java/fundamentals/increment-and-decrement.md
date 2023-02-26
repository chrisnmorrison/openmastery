---
sidebar_position: 7
---

# Increment and Decrement

If you want to add or subtract 1 from a variable (which is a very common operation in Java!), you could write

```java
int myNum = 5;
myNum += 1; // = 6
```

This adds 1 to the value of `myNum`.

But since this is such a common operation, there's an even shorter way to write this!

```java
int i = 5;
i++; // = 6

int b = 2;
b--; // = 1
```

`++` is the increment operator, and `--` is the decrement operator. They can add or subtract 1 from a variable.

It's important to note that these operators **change the value** of a variable.

```java
int i = 2;
i++; // i now equals 3
i++; // i now equals 4
i--; // i now equals 3
i++; // i now equals 4
```

Now, let's make things a little more confusing. The above operator used the postfix form, but there's another form: prefix.

```java
int myNum = 2;
++myNum; // = 3
```

This does the same thing, right? Sometimes, yes. In other cases, no. If you're just incrementing/decrementing a variable on one line, it does the same thing. 

But, things get tricky when you increment/decrement within expressions (i.e. more than one calculation). `++myNum` performs the addition **before** using the value in a calculation, and `--myNum` uses the **initial** value of `myNum` in the calculation, then adds 1.

Let's look at a few examples

```java
int x = 5;
int y = 5;
int one = 5 + ++x;
int two = 5 + y++;

System.out.println("one = " + one); // one = 11
System.out.println("two = " + two); // two = 10
```

Different results! Why was `one` higher? Because the value of `x` was incremented **before** performing adding x to 5.

If you're confused by this, don't worry too much about it. Good developers don't write confusing code like this. Good developers write code that can easily be deciphered.

If you're in college/university, you may have to complete labs and assignments with confusing postfix/prefix problems. 

For example, what does this print?

```java
int x = 61;
int y = 13;
int confusing = -4 + x++ - --y + --x;
```

If you're having trouble figuring this out.. we are too. The only way to solve it is to sit down and take your time. Just for fun, let's expand this code and solve it.

```java
int x = 61;
int y = 13;

// we want to rewrite:
// int confusing = -4 + x++ - --y + --x;

int z = -4;
z += x++ 
// add 61 to z, then increment x by 1 to equal 62 .. z = 57
z -= --y 
// decrement y by 1 to equal 12, then subtract 12 from 57 .. z = 45
z += --x 
// decrement x by 1 to equal 61, then add 61 to 45 .. z = 106
```

You will never (well, extremely rarely) see things like this in real world coding. Think of these types of expressions as a problem-solving test, rather than a real world solution. If your coworker has to read and/or edit your code, they should be able to figure out your code easily. Avoid cryptic code!

## What's next?

