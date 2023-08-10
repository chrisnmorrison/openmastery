---
sidebar_position: 1.7
sidebar_label: "Lambda"
---

# Lambda

A lambda function in Python is a small, unnamed function that can have any number of arguments but can only have one expression. Unlike traditional functions created using the def keyword, lambda functions are not defined using a separate block of code; instead, they are written inline as part of an expression.

## Syntax of Lambda Functions

The syntax of a lambda function is concise and consists of the lambda keyword followed by the parameters (arguments), a colon, and the expression to be evaluated. The expression's result becomes the return value of the lambda function.

Here's the basic structure of a lambda function:

```python
lambda arguments: expression
```
For instance, a simple lambda function that adds two numbers together would look like this:

```python
add = lambda x, y: x + y
```

## Lambdas vs `def`

Lambdas are simply a way to create shorter, more succinct functions for simple tasks. They are not a replacement for regular functions, which are still required for more complex operations.

Some functions can be defined using either a lambda or a regular function. For instance, the following two functions are equivalent:

```python
def add(x, y):
    return x + y
```

```python
add = lambda x, y: x + y
```

These are also equivalent:

```python
# Defining a function using 'def'
def square(x):
    return x ** 2

# Using the function
result = square(5)
print(result)  # Output: 25
```

```python
# Defining a lambda function
square_lambda = lambda x: x ** 2

# Using the lambda function
result_lambda = square_lambda(5)
print(result_lambda)  # Output: 25
```

## Benefits and Applications

Lambda functions offer several advantages and are commonly used in various scenarios:

- Conciseness: Lambda functions allow you to define functions in a compact manner, which can be especially useful for short, one-time operations.
- Functional Programming: Lambda functions are frequently used in functional programming paradigms, enabling operations like mapping, filtering, and reducing elements within collections.
- Anonymous Functions: Since lambda functions don't have a formal name, they are often employed for small tasks where a full function definition might be excessive.
- Readability: Lambda functions can enhance code readability by keeping operations concise and reducing the need for auxiliary functions.

## Use Cases

Lambda functions find application in a range of scenarios:

- Mapping: Transforming each element of a collection using a given operation.
- Filtering: Selecting specific elements from a collection based on a certain condition.
- Sorting: Providing custom sorting functions for complex data structures.
- Callbacks: Using them as arguments in functions that expect functions as parameters, such as sorted() or max().

## Use Cases Example

You may end up using lambdas for simple functions, like math operations. However, there are many other use cases for lambdas as we previously mentioned, like filtering and sorting data. Let's look at a real example of when you might want to use a lambda function.

Filtering data is a common task in programming. For example, you may have a list of numbers and want to filter out all the even numbers. You could do this with a for loop, but Python provides a built-in function called filter() that can do this for you. The filter() function takes two arguments: a function and a list. It returns a new list containing only the elements for which the function returns True.

Here's an example of filtering strings that contain a certain keyword:

```python
# List of strings
sentences = [
    "I like apples.",
    "Bananas are delicious.",
    "Grapes and oranges are juicy.",
    "Kiwi is a unique fruit.",
    "Pear is sweet."
]

word_to_find = "fruit"

# Using lambda to filter sentences containing the word "fruit"
fruit_sentences = list(filter(lambda sentence: word_to_find in sentence, sentences))

print("Sentences containing 'fruit':", fruit_sentences)
```

Lambdas are also great for sorting.

```python
# List of tuples containing name and age
people = [("Alice", 28), ("Bob", 22), ("Eve", 30), ("David", 25)]

# Sorting the list based on age using lambda
sorted_people = sorted(people, key=lambda person: person[1])

print("Sorted people:", sorted_people)
```
Here, we have a list of tuples representing people's names and ages. We want to sort this list based on age using the `sorted()` function and a lambda function as the sorting key. The lambda function `lambda person: person[1]` extracts the age (`person[1]`) from each tuple and uses it as the sorting criterion.

## Limitations

While lambda functions are versatile, they do have limitations:

- Single Expression: Lambda functions can only consist of a single expression, limiting their complexity compared to regular functions.
- No Statements: Lambda functions cannot contain statements or multiple expressions, like assignments or loops.
- Limited Readability: Complex lambda expressions can reduce code readability, especially if they become overly intricate.

## To Summarize

Regular functions are more suited for complex operations that require multiple statements or expressions. Lambda functions are best used for simple, one-time operations that don't require a full function definition. 

Keep in mind that lambda expressions are simply concise syntax, not a replacement for regular functions. They don't have any powers that regular functions don't have. They are just a way to make your code more concise and readable.