---
sidebar_position: 17
---

# Iterating through 2D arrays

As promised in our 2D array lesson, we're now going to cover how to iterate over 2D arrays using loops.

## For Loop

Iterating across 2D arrays has trickier syntax, but it's very simple. Let's look at an example:

```java {9,10,21,22}
public class Learn {
    public static void main(String[] args) throws InterruptedException {

        int[][] arr = new int[3][6]; // 3x6.
        // Can be viewed as 3 rows and 6 columns
        // Or, 3 sets of data that contain 6 data entries

        System.out.println("Let's assign some values...");
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                arr[i][j] = j;
            }
        }

        // totally optional. Just makes output a little cooler!
        // This tells the program to 'sleep' for a number of milliseconds
        // In this example, 1000 millis, which is 1 second.
        Thread.sleep(1000);

        System.out.println("Elements are:");
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.println(i + " " + arr[i][j]);
            }
        }
    }
}
```

We've highlighted the lines that you should pay attention to. Remember how we used `i` to iterate over an array? Since it's just a variable name, you can name it whatever you want. `i` is just convention. For **inner loops**, or loops inside loops, we need a different variable name, since they will be iterating differently.

Here's the output of the above code. See if you can understand what it.

```text
Let's assign some values...
Elements are:
0 0
0 1
0 2
0 3
0 4
0 5

1 0
1 1
1 2
1 3
1 4
1 5

2 0
2 1
2 2
2 3
2 4
2 5
```

The output tells us what the value of `i` and `j` are during each iteration. Essentially, the inner loop runs completely for every value of `i`. Once the inner loop reaches the end, `i` increases by 1, and the inner loop iterates again. And so on, until the outer loop is complete. That's why the second number (`j`) changes with every print, but the first number (`i`) changes only when the inner loop completes.

## For-each loop

`for-each` syntax is a bit different when iterating over 2D arrays. Let's look at a very short example and break it down. Rather than declare then initialize an array, we'll do it on the same line, which makes our explanation easier to understand.

```java
public class Learn {
    public static void main(String[] args){

        int[][] arr = {{1,2,3}, {7,8,9}};

        for (int[] i: arr) {
            for (int j: i) {
                System.out.print(j + " ");
            }
        }
    }
}
```

Let's break this down line by line.

`int[][] arr = {{1,2,3}, {7,8,9}};` declares and initializes a 2D array on the same line

`int[] i: arr` accesses element `i` of `arr`, where the type of `i` is an integer array, or `int[]`. Looking at the above line, we see that each element of the outer array is also an array, so this makes sense.

`int j: i` accesses element `i` of the array `i`, where the type of `j` is an integer. Why not type `int[]` like above? Simply because we are not looking at the elements of the inner arrays, which are simply `int`s.

Using `for-each` with 2D arrays is confusing for some, so it's okay to stick with regular `for` loops. But, if you understand how to write them, we recommend it. The syntax is much more succinct and readable.

## Simple method to print 2D array

If you don't want to write out a loop, and simply want to print the values of your 2D array, there's a built-in method to help you with this.

```java
import java.util.Arrays;

public class Learn {
    public static void main(String[] args){

        int[][] arr = {{1,2,3}, {7,8,9}};

        System.out.println(Arrays.deepToString(arr));
    }
}

// [[1, 2, 3], [7, 8, 9]]
```

`.deepToString(arrName)` is a quick and easy way to print the values of your 2D array. However, it's much less flexible that looping, and is only useful if you want a preformatted list of your array values.

## What's next?
