---
sidebar_position: 1.45
sidebar_label: "Casting"
---

# Casting

Casting involves changing the data type of a variable, allowing you to perform operations that might not be possible in its original type. Python provides several built-in functions and methods to facilitate this conversion.

## Basic Data Type Casting

### String to Integer

```python
string_num = "42"
int_num = int(string_num)
print("Integer:", int_num)
```

### Integer to String

```python
integer = 123
str_integer = str(integer)
print("String:", str_integer)
```

### String to Float

```python
string_float = "3.14"
float_num = float(string_float)
print("Float:", float_num)
```

### Float to Integer

```python
float_num = 7.8
int_from_float = int(float_num)
print("Integer from Float:", int_from_float)
```

### Handling Exceptions

Casting between certain data types may lead to errors, especially when converting to or from incompatible types. For example, converting a non-numeric string to an integer will raise a ValueError. 

In a later article, we'll provide a more indepth explanation of exception handling.

To handle these situations, use try-except blocks:

```python
string_num = "hello"
try:
    int_num = int(string_num)
    print("Integer:", int_num)
except ValueError:
    print("Conversion failed.")
```