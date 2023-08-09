---
sidebar_position: 1.22
sidebar_label: "Data Types"
---

# Data Types

From numbers and strings to more complex structures, understanding Python's data types is fundamental to writing effective and robust code.

## The Building Blocks of Data Types

Data types in Python categorize the types of values that variables can hold. These types influence how the values can be stored, manipulated, and interacted with. 

Unlike many other programming languages, python does not require specifying the datatype. Depending on the value you create within the variable, Python will automatically figure out the data type.

```python
my_num = 3
```

```java
// in languages like Java or C, you must specify the data type
// this could be Java or C code, not Python!
int myNum = 3;
```

Python's data types are broadly classified into two categories: built-in data types and user-defined data types.

### Built-in Data Types

1. **Numeric Types:**
   - Integers (`int`): Whole numbers without decimal points.
   - Floating-Point Numbers (`float`): Numbers with decimal points.
   - Complex Numbers (`complex`): Numbers with both real and imaginary components.

2. **Text Type:**
   - Strings (`str`): Sequences of characters enclosed in single or double quotes.

3. **Boolean Type:**
   - Boolean (`bool`): Represents the truth values `True` or `False`.

4. **Sequence Types:**
   - Lists (`list`): Ordered, mutable collections of elements.
   - Tuples (`tuple`): Ordered, immutable collections of elements.
   - Range (`range`): Represents a sequence of numbers.

5. **Mapping Type:**
   - Dictionary (`dict`): Unordered collections of key-value pairs.

6. **Set Types:**
   - Set (`set`): Unordered collections of unique elements.
   - Frozen Set (`frozenset`): Immutable version of a set.

### Understanding Data Type Characteristics

1. **Mutability:**
   Some data types, like lists and dictionaries, are mutable, meaning their values can be changed after creation. Others, like strings and tuples, are immutable.

2. **Ordering:**
   Sequences like lists, tuples, and strings maintain the order of their elements. Sets and dictionaries, however, are unordered collections.

3. **Uniqueness:**
   Sets and dictionaries enforce unique elements or keys, respectively, while lists and tuples can contain duplicate values.

4. **Indexing and Slicing:**
   Indexing and slicing are common operations for sequences like strings, lists, and tuples, allowing you to access and manipulate specific elements.