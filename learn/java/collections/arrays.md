---
sidebar_position: 2
---

# Arrays

:::info Revisiting Arrays
We [covered arrays in a previous lesson](../fundamentals/arrays), so this is a review lesson. If you have a solid understanding of arrays, feel free to skip this article and move to the next lesson!
:::

Java has many built in Collections (ways to store lists)

In Java, an array is a data structure that stores a fixed-size sequence of elements of the same type. The elements of an array can be accessed and manipulated using an index, which is a non-negative integer value that represents the position of an element in the array.

To declare an array in Java, you use the syntax:

```java
type[] arrayName;

int[] myArr1; //this is the preferred and recommended array syntax.
int [] myArr2;
int myArr3[];
int myArr4 [];
```

where `type` is the data type of the elements in the array, and `myArr_` is the name of the array variable.

In order to use an array, you must initialize it with a specified size:

```java
int[] numbers = new int[5];

int size = 5;
int[] numbers2 = new int[size];
```

You can also initialize an array at the time of declaration using the following syntax:

```java
type[] arrayName = {value1, value2, ..., valueN};
```

where `value1`, `value2`, ..., `valueN` are the initial values of the elements in the array. The size of the array is determined automatically.

To access an element of an array, you use the index of the element enclosed in square brackets, like this:

```java
type element = arrayName[index];
```

To modify the value of an element in an array, you use the index and assignment operator, like this:

```java
arrayName[index] = value;
```

Arrays in Java have a fixed size, which means that once you create an array, you cannot change its size. However, you can create a new array with a different size and copy the elements of the original array into the new array.

Java also provides some useful methods for working with arrays, such as:
 
- `Arrays.toString(myArray)`, which returns a string representation of the array
- `Arrays.sort(myArray)`, which sorts the elements of an array in ascending order.

Arrays are a fundamental data structure in Java and are used extensively in Java programs. They are commonly used to store collections of data, such as lists of numbers or strings, and are also used in algorithms and data structures such as stacks, queues, and hash tables.



## What's next?
