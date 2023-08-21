---
sidebar_position: 4.5
---

# Big-O Notation

Big O notation is a mathematical notation that is used to describe the time complexity and space complexity of algorithms. It is an important tool for analyzing the performance of algorithms and for choosing the best algorithm for a given problem.

In this article, we will discuss what Big O notation is, how it is used, and some common examples of time and space complexity.

## What is Big O Notation?

Big O notation is a mathematical notation that describes the upper bound of an algorithm's time complexity or space complexity in terms of the input size. It is a way of measuring the efficiency of an algorithm, regardless of the specific details of its implementation.

The notation itself consists of the letter O followed by a function that describes the algorithm's time or space complexity. For example, O(1), O(n), and O(n^2) are common notations used to describe different types of complexity.

## How is Big O Notation Used?

Big O notation is used to analyze the performance of algorithms and to choose the best algorithm for a given problem. By analyzing the time and space complexity of an algorithm, you can determine how well it will scale with increasing input sizes and how much memory it will consume.

When analyzing the time complexity of an algorithm, the goal is to determine how the running time of the algorithm grows as the input size grows. For example, an algorithm with a time complexity of O(n) will take longer to run as the input size increases, but the running time will increase proportionally to the input size. An algorithm with a time complexity of O(n^2) will take significantly longer to run as the input size increases, since the running time will increase exponentially with the input size.

When analyzing the space complexity of an algorithm, the goal is to determine how much memory the algorithm will use as the input size increases. For example, an algorithm with a space complexity of O(1) will use a fixed amount of memory regardless of the input size, while an algorithm with a space complexity of O(n) will use more memory as the input size increases.

## Common Examples of Time and Space Complexity:

Here are some common examples of time and space complexity, along with some examples of algorithms that have these complexities:

- O(1) - Constant Time Complexity: Algorithms with O(1) time complexity take a constant amount of time to run, regardless of the input size. For example, accessing an element in an array using its index has O(1) time complexity, since the time it takes to access an element is the same, regardless of the size of the array.
- O(log n) - Logarithmic Time Complexity: Algorithms with O(log n) time complexity take longer to run as the input size increases, but the running time grows logarithmically with the input size. For example, binary search has O(log n) time complexity, since it divides the search space in half with each iteration.
- O(n) - Linear Time Complexity: Algorithms with O(n) time complexity take longer to run as the input size increases, and the running time grows linearly with the input size. For example, iterating over all the elements in an array has O(n) time complexity, since the time it takes to iterate over the array grows linearly with the size of the array.
- O(n log n) - Linearithmic Time Complexity: Algorithms with O(n log n) time complexity take longer to run as the input size increases, and the running time grows at a rate between linear and exponential. For example, quicksort and mergesort have O(n log n) time complexity.
- O(n^2) - Quadratic Time Complexity: Algorithms with O(n^2) time complexity take significantly longer to run as the input size increases

## Big O Notation Examples

### Finding the Maximum Element in an Array

```java
public static int findMax(int[] array) {
    int max = array[0];
    for (int num : array) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
```

**Big O Notation: O(n)**

In this example, the function iterates through the entire array once to find the maximum element. The time complexity is linear because the time taken grows linearly with the size of the input array (n).

### Checking if an Array Contains Duplicates

```java
public static boolean hasDuplicates(int[] array) {
    Set<Integer> seen = new HashSet<>();
    for (int num : array) {
        if (seen.contains(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}
```

**Big O Notation: O(n)**

In this example, the function iterates through the entire array once while maintaining a hash set of seen elements. The time complexity is again linear, as it depends on the size of the input array.

### Bubble Sort

```java
public static void bubbleSort(int[] array) {
    int n = array.length;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                int temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
```

**Big O Notation: O(n^2)**

Bubble sort involves nested loops. In the worst case, it needs to compare and possibly swap every pair of elements. The time complexity is quadratic because the number of operations grows with the square of the input size.

### Binary Search in a Sorted Array

```java
public static int binarySearch(int[] array, int target) {
    int left = 0;
    int right = array.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (array[mid] == target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
```

**Big O Notation: O(log n)**

Binary search works by repeatedly halving the search space. With each iteration, the number of remaining elements is roughly halved. This results in a logarithmic time complexity, which is very efficient for large datasets.

O(log n) is one of the fastest time complexities for searching algorithms. It is much faster than linear search (O(n)) and quadratic search (O(n^2)), and is a sught-after time complexity for many search algorithms.

The only faster time complexity is O(1), which is achieved by algorithms that have constant time complexity. However, these algorithms are limited in what they can do, and are not possible for many problems.

### Merge Sort

Merge Sort is a sorting algorithm that divides the input array into smaller halves, recursively sorts them, and then merges them back together in sorted order.

```java
public static void mergeSort(int[] array, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(array, left, mid);
        mergeSort(array, mid + 1, right);
        merge(array, left, mid, right);
    }
}

public static void merge(int[] array, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    int[] leftArray = new int[n1];
    int[] rightArray = new int[n2];

    for (int i = 0; i < n1; i++) {
        leftArray[i] = array[left + i];
    }
    for (int j = 0; j < n2; j++) {
        rightArray[j] = array[mid + 1 + j];
    }

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (leftArray[i] <= rightArray[j]) {
            array[k] = leftArray[i];
            i++;
        } else {
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        array[k] = leftArray[i];
        i++;
        k++;
    }

    while (j < n2) {
        array[k] = rightArray[j];
        j++;
        k++;
    }
}
```

**Big O Notation: O(n log n)**

Merge Sort divides the input array into halves in each recursive call and then merges them in a way that ensures a sorted array. The recurrence relation for Merge Sort leads to a time complexity of O(n log n), which is considered very efficient for sorting large datasets.

## Is O(1) Possible?

O(1) is the fastest time complexity possible for an algorithm. It means that the algorithm takes a constant amount of time to run, regardless of the input size. This is only possible for algorithms that have a fixed number of operations, such as accessing an element in an array or performing a single arithmetic operation.

For example, the following function has O(1) time complexity because it performs a single arithmetic operation:

```java
public static int add(int a, int b) {
    return a + b;
}
```

The following function has O(1) time complexity because it accesses an element in an array using its index:

```java
public static int getElement(int[] array, int index) {
    return array[index];
}
```

These are simple operations with predicatable running times, so they have O(1) time complexity. However, most algorithms are more complex and have a time complexity that depends on the input size and the number of operations. Therefore, O(1) time complexity is not possible for most complex algorithms, otherwise we'd all be using them!