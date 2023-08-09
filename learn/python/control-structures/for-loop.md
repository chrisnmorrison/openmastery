---
sidebar_position: 2.1
sidebar_label: "For Loops"
---

# For Loops

A `for` loop is designed to iterate over a sequence of elements, executing a block of code for each element in the sequence. This construct excels at handling scenarios where you need to process multiple items, such as elements in a list, characters in a string, or numbers within a range.

Let's first break down the syntax:

```python
numbers = [1, 2, 3, 4, 5]

total = 0
for num in numbers:
    total += num

print(f"The sum of numbers is: {total}")
```

There are a few moving pieces here.

**numbers**: A list that can be iterated over. Anything that can be iterated over can be used in a `for` loop.

**total**: Stores the final result. Not always necessary.

**num**: A variable name represents the current item in the iterable that *can be anything you want*, as long as it adheres to variable naming requirements. You could write `for appleorangepear in numbers:` and it would still iterate over the numbers list.

**total += num**: Each time the loop iterates, it adds the current value of `num` to `total`.

A very simplified way of representing of what is happening in the loop would be:

1. Add current num to numbers. (0 + 1 = 1)
2. Are there still items in numbers?
3. If yes, move on to next value.
4. Add current num to numbers. (1 + 2 = 3)
5. Are there still items in numbers?
6. If yes, move on to next value.
7. Add current num to numbers. (3 + 3 = 6)
8. Are there still items in numbers?
9. If yes, move on to next value.
10. Repeat, until entire iterable is iterated over.



## Code Examples

### Example 1: Iterating Through a List of Names

```python
names = ["Alice", "Bob", "Charlie", "David"]

print("Greetings:")
for name in names:
    print(f"Hello, {name}!")
```

### Example 2: Calculating the Sum of Numbers

```python
numbers = [1, 2, 3, 4, 5]

total = 0
for num in numbers:
    total += num

print(f"The sum of numbers is: {total}")
```

### Example 3: Printing Patterns

```python
rows = 5

for i in range(1, rows + 1):
    print("*" * i)
```

### Example 4: Iterating Through a String

```python
sentence = "Python is amazing!"

for char in sentence:
    if char != " ":
        print(char)
```