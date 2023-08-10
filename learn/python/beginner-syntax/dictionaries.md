---
sidebar_position: 1.8
sidebar_label: "Dictionaries"
---

# Dictionaries

Dictionaries are unordered collections of key-value pairs. They are commonly used to store and retrieve data based on some unique identifier, known as a key. Keys are used to identify and access values in a dictionary, but unlike lists, they are not used to define order.

Creating a dictionary is simple. Enclose key-value pairs in curly braces `{}` separated by colons `:`

```python
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}
```

## Accessing and Modifying Values

You can access a value by providing its key in square brackets.

```python
name = person["name"]
# this accesses the value 'Alice'
```

To modify a value, access the key and assign a new value.

```python
person["age"] = 26
```

## Dictionary Methods

Python provides various methods to manipulate dictionaries.

### Adding and Updating Elements

`dict[key] = value` : Adds a new key-value pair or updates an existing one.
`dict.update(another_dict)` : Updates the dictionary with elements from another dictionary.

## Removing Elements

`del dict[key]` : Removes the specified key-value pair.
`dict.pop(key)` : Removes and returns the value associated with the key.

## Retrieving Values Safely

`dict.get(key)` : Retrieves the value for the specified key. Returns None if the key doesn't exist.

## Iterating Through Keys and Values

```python

for key in person:
    print(key, person[key])
```

### Other Useful Methods

`dict.keys()` : Returns a list of keys.
`dict.values()` : Returns a list of values.
`dict.items()` : Returns a list of key-value pairs.

## Use Cases of Dictionaries

Dictionaries find applications in various scenarios:

- Storing Configuration Settings: Dictionaries are great for storing settings with descriptive keys.
- Counting Occurrences: Count the frequency of words in a text by using words as keys and counts as values.
- Data Organization: Organize data retrieved from databases or APIs with meaningful keys.
- Caching: Store computed results for efficient retrieval.
- JSON-like Structures: Dictionaries are the basis of JSON data format.