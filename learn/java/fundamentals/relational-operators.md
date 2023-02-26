---
sidebar_position: 9
---

# Relational & Boolean Operators

An important aspect of development is determining if things are equal, or if/how they differ. Java is packed with all the relational operators you will ever need!

Relational operators test the equality or difference of values. Relation is incredibly important, and I'd argue that every single Java application contains huge amounts of relational operators.

Here are a few situations where you would find relational operators:

- A bank ATM checking whether you have enough balance to withdraw $1000 in cash
- A program that validates your password before letting you into your account
- A sensor that automatically turns on your Air Conditioning when it's above 23 Celsius

And so much more. Give us the time, and we could come up with thousands of ideas. Let's look at each relational operator. Pay attention to how your write them!

:::tip
While not necessary, you'll typically use these operators with if and if-else blocks, where you test the conditions of two or more operators to make a decision. Don't worry about this for now, we'll cover this soon!
:::

## == and !=

The first two is easy. Does one value equal another? When comparing values with the equality operator, you must use a double equals sign, not single! Use `==`, not `=`.

Opposite to the equality operator is the inequality operator. Does one value **not** equal another? To perform this comparison, we use `!=`. The `!` can essentially be read as "not".

```java
public class Learn {
    public static void main(String[] args) {
        boolean hello = 3 == 7; // is 3 equal to 7?
                       // ^^ TWO equals signs are here! The font we use
                       // combines them into a single, long symbol. 
        boolean glorious = 6 != 6; // is 6 not equal to 6?
        boolean world = "hello" == "hello"; //do the two strings equal each other?

        System.out.println(hello); //false
        System.out.println(glorious); // false
        System.out.println(world); // true
    }
}
```

As you can see, we are comparing values. The program figures out the response to our comparison, and in this case, we store the results in boolean variables.

:::danger Don't use the equality operator (`==`) with Strings!

You'll get false negatives on some occasions. Instead of `==`, use `StringOne.equals(StringTwo)`. 

We'll elaborate in the next lesson.

:::


## > , >= , < , <=

These symbols likely look familiar from math class. In the order above, these perform the following comparisons: **greater than**, **greater than or equal**, **less than**, **less than or equal**. 

```java
public class Learn {
    public static void main(String[] args) {
        boolean one = 5 > 5;
        boolean two = 66 >= 66;
        boolean three = 6 < 2;
        boolean four = 99 <= 99;

        System.out.println(one); // false ... but why?
        System.out.println(two); // true
        System.out.println(three); // false
        System.out.println(four); // true
    }
}
```

Why does `5 < 5` output as `false`? This comparison asks `is 5 greater than 5`? Nope, it's the same! When two values are equal to each other, it'll only return true when there is an equals sign in the comparison. For example, `66 >= 66` asks `is 66 greater than or equal to 66`? Yes, it's greater than or equal, so it's `true`!

### !

Quick but important note. A single exclamation mark in front of a variable or an expression negates it. It turns false to true, or true to false.

```java
public class Learn {
    public static void main(String[] args) {
        boolean one = 6 < 5;
        boolean two = !(6 < 5);
        
        boolean three = true;
        three = !three;

        System.out.println(one);
        System.out.println(two);
        System.out.println(three);

    }
}
```

:::info
Keep in mind that these simple examples may not fully describe the true power of these operators. The simple examples are mainly for your understanding. For now, just know how they work. Keep following our course, and we'll dive into much more practical examples!
:::

## && and ||

These operators are used to chain different comparisons. 

`&&` means AND. All AND conditions must be true for the result to be true. Use AND if you need to check if every condition is true.

`||` means OR. Only one OR condition has to be true for the result to be true. Use OR if you only want to determine if as few as one condition is true.

```java
public class Learn {
    public static void main(String[] args) {
        boolean one = 6 < 5 || 2 < 3;
        boolean two = 66 >= 66 && 5 > 3 && 77 == 77;
        boolean three = 43 >= 88 && 5 > 3 && 77 == 77;
        boolean four = ((6 < 2) && (2 == 44) && (1 < -2)) || (5 == 5);
        //confusing? You could also write it like this. But, brackets aren't necessary
        four = ((6 < 2) && (2 == 44) && (1 < -2)) || (5 == 5);

        System.out.println(one); // true
        System.out.println(two); // true
        System.out.println(three); // false
        System.out.println(four); // true

    }
}
```

### Operator Precedence

You may or may not have noticed, but there's an extra set of brackets around all of the AND comparisons above.

Like we mentioned, brackets aren't necessary in operations like this, but the extra brackets are there to outline operator precedence in Java. Say you have an operation that has over 20 operators, like `++`, `||`, `!(false)`, and `<=` somehow mixed in together in a confusing jumble of code. How does Java decode the jumble and reach a solution?

Here is [an excellent writeup of operator precedence in Java](https://introcs.cs.princeton.edu/java/11precedence/), that we highly suggest you read. No need to memorize the table, but be aware of how it works. If you write a jumble of operators and you aren't getting the desired outcome, operator precedence may explain it.

## What's next?
