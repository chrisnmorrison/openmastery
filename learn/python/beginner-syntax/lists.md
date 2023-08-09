---
sidebar_position: 1.5
sidebar_label: "Lists"
---

# Lists

At its core, a list is an ordered collection of items, enclosed within square brackets [ ]. Each item, known as an element, can be of any data type, and they are separated by commas. Lists can contain duplicate elements, making them suitable for storing data where order and repetition matter.

## Creating Lists

Creating a list is as simple as enclosing elements within square brackets.

```python
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed_types = [10, "hello", 3.14, True]
```

## Basic List Operations

### Accessing Elements

Elements in a list are accessed using index positions, starting from 0.

```python
fruits = ["apple", "banana", "orange"]
first_fruit = fruits[0]  # Accesses "apple"
second_fruit = fruits[1]  # Accesses "banana"
```

### Modifying Elements

List elements can be modified by assigning new values to them.

```python
numbers = [1, 2, 3, 4, 5]
numbers[2] = 10  # Changes the third element to 10
```

### Slicing

Slicing allows you to extract a portion of a list.

```python
numbers = [1, 2, 3, 4, 5]
subset = numbers[1:4]  # Creates a new list [2, 3, 4]
```

## List Methods

Python provides a plethora of built-in methods for manipulating lists.

### Adding Elements

- append(): Adds an element to the end of the list.
- insert(): Inserts an element at a specific index.
- extend(): Appends elements from another iterable.

Removing Elements

- remove(): Removes the first occurrence of a specific value.
- pop(): Removes an element at a specific index and returns its value.
- clear(): Removes all elements from the list.

Searching and Counting

- index(): Returns the index of the first occurrence of a value.
- count(): Returns the number of occurrences of a value.

## List Comprehensions

List comprehensions offer a concise way to create lists based on existing lists.

```python
numbers = [1, 2, 3, 4, 5]

# Output Expression: Square each even number
squared_even_numbers = [x ** 2 for x in numbers if x % 2 == 0]

# Iteration: Loop through each element (x) in the iterable (numbers)
# Iterable: The existing list "numbers"
# Condition: Include only elements (x) that are even (x % 2 == 0)

print(squared_even_numbers)  # Output: [4, 16]
```

:::warning
List comprehension syntax is confusing for beginners, so don't worry if it looks jumbled and hard to read.

You can always use a regular for loop instead. Both do the same thing - experienced Python developers may prefer list comprehensions for their conciseness.
:::