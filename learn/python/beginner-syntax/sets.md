---
sidebar_position: 1.9
sidebar_label: "Sets"
---

# Sets

A set in Python is defined using curly braces `{}` or the built-in `set()` constructor. Unlike lists or tuples, sets do not allow duplicate values. This characteristic makes sets ideal for scenarios where you need to store and process a collection of distinct items.

```python
# Creating a set
fruits = {'apple', 'banana', 'orange'}
```

## Key Features and Methods

### 1. Adding and Removing Elements

Elements can be added to a set using the add() method, and removed using the remove() or discard() methods. The difference between remove() and discard() is that remove() raises an error if the element is not present, while discard() does not.

python

fruits.add('grape')
fruits.remove('banana')

### 2. Set Operations

Sets support various mathematical set operations, such as union, intersection, difference, and symmetric difference.

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}

union = set1 | set2         # Union: {1, 2, 3, 4, 5}
intersection = set1 & set2  # Intersection: {3}
difference = set1 - set2    # Difference: {1, 2}
symmetric_diff = set1 ^ set2 # Symmetric Difference: {1, 2, 4, 5}
```

### 3. Checking Membership

You can check if an element is present in a set using the in keyword.

```python
if 'apple' in fruits:
    print("An apple is in the set!")
```

### 4. Set Comprehensions

Similar to list comprehensions, you can use set comprehensions to create sets in a concise manner.

```python
even_numbers = {x for x in range(10) if x % 2 == 0}
```

## Use Cases for Python Sets

- Removing Duplicates: Sets automatically remove duplicate elements, making them handy for tasks like deduplication.
- Membership Testing: Sets offer fast membership testing. Checking for existence of an item in a set is significantly faster than in a list.
- Counting Unique Elements: Sets are useful for counting the number of unique elements in a dataset.
- Filtering Data: You can use sets to filter out unwanted data by comparing against another set of valid values.