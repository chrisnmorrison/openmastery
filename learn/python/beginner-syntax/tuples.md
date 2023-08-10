---
sidebar_position: 1.95
sidebar_label: "Tuples"
---

# Tuples

A tuple is a collection of ordered elements enclosed in parentheses (). The elements within a tuple can be of any data type – numbers, strings, or even other tuples. One of the standout features of tuples is their immutability. Once a tuple is created, its elements cannot be changed, added, or removed. This property makes tuples ideal for situations where you want to ensure data integrity.

## Creating Tuples

Creating a tuple is simple. You can define a tuple by enclosing comma-separated values within parentheses:

```python
fruits = ("apple", "banana", "orange")
```

Even if you omit the parentheses, Python treats comma-separated values as a tuple:

```python
colors = "red", "green", "blue"
```

## Accessing Tuple Elements

You can access tuple elements using indexing, just like you would with lists:

```python
fruits = ("apple", "banana", "orange")
print(fruits[0])  # Output: apple
print(fruits[2])  # Output: orange
```

## Tuple Unpacking

Tuple unpacking is a nifty feature that allows you to assign elements of a tuple to multiple variables in a single line:

```python
dimensions = (10, 20, 30)
length, width, height = dimensions
print(length)  # Output: 10
print(width)   # Output: 20
print(height)  # Output: 30
```

## Where you may see tuples

If you are returning a group of data items that should not change, tuples are ideal. For example, if you are returning a student record, you may want to return a tuple containing the student's name, age, and grade. Since the data is unlikely to change, at least during the current session of the running program, you can use a tuple to ensure it remains intact.

Even if you don't use tuples in your own code very often, you'll encounter them in many places. For example, the `items()` method of dictionaries returns a list of tuples containing the key-value pairs of the dictionary:

```python
student = {
    "name": "John",
    "age": 20,
    "grades": [80, 85, 90, 95, 100]
}

print(student.items())
```

## Use Cases for Tuples

- Data Integrity: Tuples are useful when you want to ensure that data remains unchanged. For example, representing geographic coordinates (latitude, longitude) as a tuple ensures the pair remains intact.
- Multiple Return Values: Functions can return multiple values as a tuple. This simplifies the process of working with multiple outcomes from a function.
- Dictionary Keys: Tuples can be used as keys in dictionaries, unlike lists, because they are immutable.
- Data Record: Tuples can be employed to represent a single data record, such as student details (name, age, grade) or the results of calculations in linear algebra that returns a spatial location in three dimensions (x, y, z).

## Limitations of Tuples

While tuples offer numerous advantages, they do have some limitations due to their immutability:

- No Modifications: Once a tuple is created, you can't modify its elements. You would need to create a new tuple with the desired changes.
- Less Flexibility: Tuples are not as flexible as lists, making them less suitable for scenarios where data needs to be frequently modified.