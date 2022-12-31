---
sidebar_position: 4.2
---

# Arrays

## What are Arrays?

An array is a type of collection (also called data structure) that stores a fixed-length group of values of the same type. For example, an `int` array of length 10 is a reserved location in memory that can store up to 10 integers.

Let's dive into the syntax.

```java
public class Learn {
    public static void main(String[] args) {

        //all of these declare array variables. All are valid and do the same thing.
        int[] myArr1; //this is the preferred and recommended array syntax.
        int [] myArr2;
        int myArr3[];
        int myArr4 [];

        //this is an array variable declaration AND initialization.
        //reserves memory for a length 10 array of ints
        int[] myArr5 = new int[10];

        // you can also pass variables as the length
        int myNum = 5;
        int[] myArr6 = new int[myNum];
    }
}
```

Arrays are quite simply a collection of data, and are the simpliest data structure. They have a few key characteristics that you must remember:

- they have a fixed size, which you define. If you want to resize an array, you will have to create a new array and copy the previous data into it
- their indices start at zero. The first element is the 0th index, the second element is the 1st index, etc.
- all elements must have the same data type (there are exceptions with OOP polymorphism, which we'll cover later)

## Default Values

When you declare and initialize an array, let's say of size 5, each of the 5 values will have a default value that depends on the data type.

```java
    int [] intArr = new int[5]; // or short, long, etc.
    double [] doubleArr = new double[5];
    boolean [] boolArr = new boolean[5];
    String [] stringArr = new String[5];

    System.out.println("int array default value: " + intArr[0]);
    System.out.println("double array default value: " + doubleArr[0]);
    System.out.println("boolean array default value: " + boolArr[0]);
    System.out.println("String array default value: " + stringArr[0]);
```

```text
int array default value: 0
double array default value: 0.0
boolean array default value: false
String array default value: null
```

See what we did? We initialized a few different array types, and printed the value of the 0th index. You could have also used indices 1-4 (anything else would cause an error).

Pay attention to how `String` defaults to `null`. This is because `String` is an object (formally called reference data type), not a primitive data type. If you recall, a primitive data type is one that cannot be broken down into smaller pieces. For example, an `int` is just a number, and it cannot be broken down. A `boolean` is either `true` or `false`, and cannot be broken down. But, a `String` can be broken down into individual `char` values! So, it's an object / reference type.

We are mentioning this because all reference data types default to `null` when you create an array. This includes built-in classes like `String`, and also classes that you write.

## array.length

Later on, we'll discuss iterating over the content of arrays. For now, let's simply look at a very common property of arrays: `.length`. When appended to an array variable name, it will return the length of the array.

```java
public class Learn {
    public static void main(String[] args) {

        int [] intArr = new int[5];
        intArr[0] = 3;


        System.out.println("int array length: " + intArr.length);
        System.out.println("int array last index is intArr[" + (intArr.length - 1) + "]");

        System.out.println(intArr[0]);
        System.out.println(intArr[1]);
    }
}


```

```text
int array length: 5
int array last index is intArr[4]
3
0
```

We recommend copying this code into your IDE, and playing around with it; primarily the numbers in square brackets (e.g. `[5]`). What causes different output? What causes compilation errors?

## Populating arrays

We've covered creating arrays **(declaration)**. Now, let's assign some values to our arrays! **(initialization)**

Let's work with a simply array that holds `5` integers.

```java
public class Learn {
    public static void main(String[] args) {

        int[] arr = new int[5];
        arr[0] = 1;
        arr[1] = 2;
        // ... and so on
    }
}
```

For example, writing `arr[1]` means _i want the 1st index_, and `= 2` means _store the value `2` at that index_.

Easy enough, but there are a few things to consider

- we've mentioned that indices are zero based, and we're going to mention it again. Never forget this. `[0]` is the first index, `[1]` is the second index, `[2]` is the third index, etc.
- This method is useful for grasping beginner concepts, but doesn't really translate well to real-world code. It's also tedious to write. Imagine assigning 1000 array values using this method. Later on, we'll look at how you can use [for loops](./loops.md) to effectively populate an array.

```java
public class Learn {
    public static void main(String[] args) {

        int[] arr = new int[5];
        for (int i = 0; i < arr.length; i++){
            arr[i] = i;
        }

        // prints the values of the array, seperated by spaces
        for (int i : arr){
            System.out.print(i + " ");
        }
    }
}
```

In addition to this method, Java has a handy shortcut to populate arrays if you know what values they're going to store from the beginning.

```java
public class Learn {
    public static void main(String[] args) {

        int[] arr = {1,2,3,4,5};

        // our array is [1,2,3,4,5]

    }
}
```

With this method, the program automatically calculates the size for you, given the values you provided.

This lesson covers the most basic array syntax, and in order to fully grasp the power of arrays, you'll need to know loops. Stick around, and we'll cover that soon.

## What's next?
