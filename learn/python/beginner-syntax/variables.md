---
sidebar_position: 1.21
sidebar_label: "Variables"
---

# Variables

A variable in Python is essentially a named storage location that holds a value. It provides a way to refer to and manipulate data throughout the execution of a program. Variables act as placeholders for various types of data, enabling programmers to create dynamic and adaptable code.

## Declaring and Assigning Values to Variables

In Python, declaring and assigning values to variables is a straightforward process. You can create a variable by assigning a value to it using the assignment operator "=".

```python
name = "John"
age = 30
```

Here, we have created two variables, "name" and "age", and assigned the values "John" and 30 to them, respectively.

## Variable Names and Conventions

Python variable names must adhere to certain rules and conventions:

- Variable names can only contain letters, numbers, and underscores (_).
- They must start with a letter or an underscore.
- Variable names are case-sensitive, so "name" and "Name" would be considered different variables.
- Meaningful and descriptive variable names improve code readability.

## Why use Variables?

- Data Storage: Variables enable programmers to store values such as numbers, strings, and more complex data types for use throughout the program's execution.
- Dynamic Behavior: As Python is dynamically typed, variables can change types during the course of the program. This flexibility contributes to creating versatile and adaptable code. However, keep in mind that this flexibility can also lead to errors.
- Readability: Well-named variables enhance code readability and convey the purpose of the stored values, making the code easier to understand for both the programmer and collaborators.
- Interactive Programming: Variables make interactive programming more effective, allowing you to store and reuse values as you experiment with different code snippets.
- Modular Code: Variables facilitate modular code design by allowing you to assign values in one part of the program and use them in another, enhancing code organization and maintainability.

## Examples of Variable Use

Storing User Input:

```python
name = input("Enter your name: ")
print(f"Hello, {name}!")
```

Performing Calculations:

```python
radius = 5
pi = 3.14159
area = pi * radius ** 2
print(f"The area of the circle is: {area}")
```

## Counting and Looping:

```python
total = 0
for i in range(1, 6):
    total += i
print(f"The sum of numbers from 1 to 5 is: {total}")
```