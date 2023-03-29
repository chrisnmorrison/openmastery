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