---
sidebar_position: 1.5
sidebar_label: "Function Syntax"
---

# Function Syntax

To define a function in Python, you use the def keyword followed by the function's name and a pair of parentheses. The name should be descriptive and convey the purpose of the function. The parentheses may contain parameters, which are placeholders for values that the function can receive.

Here's the basic syntax of a function definition:

```python
def function_name(parameters):
    # Function body: where you write the code for the task
    # Indented code block
    # ...
```

## Parameters and Arguments

Parameters act as placeholders within a function's definition, representing the values that the function expects to receive when it's called. Arguments, on the other hand, are the actual values that are passed to the function during its invocation.

Let's look at an example of a function with parameters:

```python
def greet(name):
    print(f"Hello, {name}!")
```
In this case, name is the parameter. When you call the function and provide a value, that value becomes the argument for the name parameter:

```python
greet("Alice")  # Output: Hello, Alice!
greet("Bob")    # Output: Hello, Bob!
```

## Calling a Function

What does this code print?

```python
def hello():
    print("Hello!")

def bye():
    print("Bye!")

print("Blah blah blah")
```

Does it print `Hello!` or `Bye!`? Neither! It prints `Blah blah blah` because the functions are never called. A function is simply a piece of reusable code that you can optionally pass parameters to. It doesn't do anything until you call it.

Calling a function involves using its name followed by a pair of parentheses. If the function takes arguments, you provide them within the parentheses.

```python
function_name(arguments)
```
For instance:

```python
greet("Charlie")   # Output: Hello, Charlie!
```

## Return Statement

Functions can also return values. This is done using the return statement within the function's body. The value you want the function to return follows the return keyword.

Consider this example of a function that calculates the square of a number and returns the result:

```python
def square(number):
    return number ** 2

result = square(5)
print(result)  # Output: 25
```

## Default Parameters

Python also supports default parameter values. These values are used if the caller does not provide corresponding arguments. Default parameters are specified within the function's parameter list during definition.

```python
def repeat(message, times=3):
    print(message * times)

repeat("Hi!")       # Output: Hi!Hi!Hi!
repeat("Hey!", 2)   # Output: Hey!Hey!
```