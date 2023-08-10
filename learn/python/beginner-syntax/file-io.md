---
sidebar_position: 2.1
sidebar_label: "File I/O"
---

# File I/O

File handling involves performing various operations on files, such as reading, writing, and modifying their contents. Python provides built-in functions and methods to work with files efficiently.

## Opening and Closing Files

```python
# Opening a file in read mode
file = open("example.txt", "r")

# Opening a file in write mode
file = open("output.txt", "w")

# Opening a file in append mode
file = open("data.txt", "a")

# Closing a file
file.close()
```

## Reading Data from Files

```python
# Reading the entire file content
with open("example.txt", "r") as file:
    content = file.read()

# Reading line by line
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())
```

## Writing Data to Files

```python
# Writing to a file
with open("output.txt", "w") as file:
    file.write("Hello, World!")

# Writing multiple lines
lines = ["Line 1", "Line 2", "Line 3"]
with open("output.txt", "w") as file:
    file.writelines(lines)
```

## Appending Data to Files

```python
# Appending to a file
with open("data.txt", "a") as file:
    file.write("New data")
```

## Working with Text and Binary Modes

```python
# Reading a binary file
with open("image.jpg", "rb") as file:
    binary_data = file.read()

# Writing binary data to a file
with open("new_image.jpg", "wb") as file:
    file.write(binary_data)
```

## Using with Statements for File Handling

```python
# Using 'with' statement for automatic file closing
with open("example.txt", "r") as file:
    content = file.read()
```

## Handling Exceptions with Files

```python
try:
    with open("missing_file.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("File not found.")
```

## File Iteration

```python
with open("example.txt", "r") as file:
    lines = file.readlines()
for line in lines:
    print(line.strip())
```

## File Seek and Tell

```python
with open("example.txt", "r") as file:
    content = file.read(10)  # Read the first 10 characters
    position = file.tell()   # Get the current file pointer position
    file.seek(0)             # Move the file pointer to the beginning
```

## Working with Directories

```python
import os

# List all files and directories in a directory
contents = os.listdir("/path/to/directory")

# Create a new directory
os.mkdir("/path/to/new_directory")

# Remove a file or directory
os.remove("file.txt")
os.rmdir("empty_directory")
```

## Practical Examples

- CSV File Handling: Reading and writing data in CSV files.
- JSON File Handling: Reading and writing data in JSON files.
- Log File Handling: Writing logs to a file for debugging.
- Image Manipulation: Reading, editing, and saving image files.