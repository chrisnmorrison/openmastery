---
sidebar_position: 1
---

# Autoboxing, Boxing, and Unboxing

Autoboxing is a feature in Java that automatically converts a primitive data type (like an `int` or a `double`) into its corresponding wrapper class object (like an `Integer` or a `Double`) when needed.

So, when you use a primitive value in a context where an object is required (for example, when adding a primitive value to a collection like an ArrayList), Java will automatically convert the primitive value to an object of the corresponding wrapper class, without you having to write any explicit code to do the conversion. This process is called autoboxing.

The opposite process, where an object is automatically converted back into its corresponding primitive value, is called unboxing. Together, autoboxing and unboxing make it easier to write Java code that works with both primitive values and objects.

## Autoboxing

Autoboxing is the automatic process of converting a primitive data type into its corresponding wrapper class object automatically. For example:

```java
int num = 10;
Integer numObject = num; // autoboxing
```

In this example, the value of the primitive int variable num is automatically converted to an Integer object through autoboxing.

## Boxing

Boxing is the process of explicitly converting a primitive data type into its corresponding wrapper class object. For example:

```java
double d = 3.14;
Double dObject = Double.valueOf(d); // boxing
```

In this example, we explicitly converted the value of the primitive double variable d to a Double object through boxing.

## Unboxing

Unboxing is the process of extracting the value of a primitive data type from its corresponding wrapper class object. For example:

```java
Integer numObject = 20;
int num = numObject.intValue(); // unboxing
```

In this example, the value of the Integer object numObject is extracted as a primitive int value through unboxing.

Note that Java compiler automatically performs autoboxing and unboxing, we explicitly perform boxing using a wrapper class constructor or factory method. Also, autoboxing and unboxing can lead to performance overhead and should be used with caution in performance-critical code.

You should use boxing and unboxing if there is a reason to convert a primitive to an Object, or vice versa. Otherwise, there is no need.
