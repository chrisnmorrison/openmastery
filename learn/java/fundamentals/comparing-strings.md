---
sidebar_position: 10
---

# Comparing Strings (important!)

We quickly mentioned in the last lesson that you should not use `==` with Strings. Let's discuss why.

The `==` operator tests if two Strings are **stored in the same memory location**.

```java
public class Learn {
    public static void main(String[] args) {
        String one = new String("hello");
        String two = new String("hello");

        if (one == two) {
            System.out.println("Equal!");
        } else {
            System.out.println("Not equal!");
        }
    }
}
```

This outputs `Not equal!`, because we created two different String objects which are stored at different memory locations. When we compare using `==`, we are **comparing memory locations**, so this comparison returns false.

:::info Avoid `==` with Strings
While you won't always get this error, it's best to avoid it altogether.
:::

### What do I do instead?

Instead of `==` for Strings, we use a built-in String method called `.equals()`. Here's a demo with the same example as above.

```java
public class Learn {
    public static void main(String[] args) {
        String one = new String("hello");
        String two = new String("hello");

        if (one.equals(two)) {
            System.out.println("Equal!");
        } else {
            System.out.println("Not equal!");
        }
    }
}
```

This outputs `Equal!`, as it should.

This is a common beginner mistake, and it's especially frustrating because `==` with Strings will only sometimes give false negatives. Primarily, it's when you've created two String variables that have equal values, since they are stored in different memory locations.

Like we said, avoid `==` **with Strings** altogether. You can use it for other data types, but **not** with Strings.

### Other String Comparison methods

We saw that `.equals()` is the go-to for String comparisons. Depending on your use-case of comparisons, you may want to just compare words, and not have to worry about case sensitivity. For example, using `.equals()` on `"Hello"` and `"hello"` returns false. This is because one is capitalized and one is not, therefore they aren't equal.

If you need to compare Strings but want to ignore case sensitivity, you can use `.equalsIgnoreCase()`. For example,

```java
public class Learn {
    public static void main(String[] args) {
        String one = new String("hELlO");
        String two = new String("hello");

        if (one.equalsIgnoreCase(two)) {
            System.out.println("Equal!");
        } else {
            System.out.println("Not equal!");
        }
    }
}
```

Since we are ignoring case, this prints `Equal!`.
