---
sidebar_position: 1.3
sidebar_label: "Math Operations"
---

# Math Operations

Python supports all the fundamental arithmetic operations you'd expect from a programming language.

As a developer, you will likely be using math no matter the type of coding you are doing. All you need to get started is a basic understanding of arithmatic.

## Addition

```python
a = 5
b = 3
sum_result = a + b
print("Sum:", sum_result)
```

## Subtraction

```python
x = 10
y = 7
difference = x - y
print("Difference:", difference)
```

## Multiplication

```python
p = 6
q = 4
product = p * q
print("Product:", product)
```

## Division

```python
m = 20
n = 5
quotient = m / n
print("Quotient:", quotient)
```

## Floor Division

```python
c = 17
d = 4
floor_quotient = c // d
print("Floor Quotient:", floor_quotient)
```

## Modulus (Remainder)

The modulus operator often confuses new developers. It simply returns the remainder of a division operation. For example, 23 divided by 6 is 3 with a remainder of 5. The modulus operator returns the remainder, which is 5.

```python
numerator = 23
denominator = 6
remainder = numerator % denominator
print("Remainder:", remainder)
```

## Exponentiation

Python provides the "**" operator for exponentiation.

```python
base = 2
exponent = 3
result = base ** exponent
print("Exponentiation:", result)
```

## Order of Operations

Python follows the standard order of operations, commonly known as PEMDAS: Parentheses, Exponents, Multiplication and Division (from left to right), Addition and Subtraction (from left to right).

```python
expression = 5 + 3 * 2
print("Order of Operations:", expression)
```

## Built-in Math Functions

Python's math module provides a plethora of mathematical functions for more advanced calculations.

```python
import math

# Square root
number = 25
square_root = math.sqrt(number)
print("Square Root:", square_root)

# Trigonometric functions
angle = math.radians(30)  # Convert degrees to radians
sine_value = math.sin(angle)
print("Sine:", sine_value)

# Ceiling and floor
decimal_number = 7.3
# Ceiling rounds up to the nearest whole number
ceiling_value = math.ceil(decimal_number)
# Floor rounds down to the nearest whole number
floor_value = math.floor(decimal_number)
print("Ceiling:", ceiling_value)
print("Floor:", floor_value)
```