---
sidebar_position: 3
sidebar_label: "if __name__ == '__main__'"
---

# if __name == "__main__"

In Python, "name" is a built-in variable that holds the name of the current module or script. When a Python script or module is executed, Python assigns the value "main" to the "name" variable of the script that serves as the entry point for the program. This provides a way to distinguish between whether the script is being run as the main program or being imported as a module in another script.

## Conditional Execution with "name == 'main'"

The magic happens when "name" is combined with the comparison "main". The expression "name == 'main'" acts as a conditional statement that evaluates to "True" only when the script is executed as the main program. This condition is commonly used to separate code that should only be executed when the script is run directly from code that should not run when the script is imported as a module.

## Benefits and Use Cases

- Modularization: This construct allows you to write modular and reusable code. When you create a script with sections of code under the "name == 'main'" block, those sections will only execute when the script is run directly. This keeps the code clean and organized, with separate functionalities segregated into different scripts or modules.
- Testing: By isolating executable code under the "name == 'main'" condition, you make it easier to write unit tests for individual functions or classes. This ensures that your code is well-tested while avoiding unintended side effects when importing the script in other programs.
- Preventing Unintended Execution: When you import a Python script into another script, the code outside the "name == 'main'" block won't be executed. This is particularly useful when creating libraries or modules that are meant to be reused across different projects.

## Example Usage

Consider a simple Python script that defines a few utility functions and also includes a few lines of code for testing those functions. By encapsulating the testing code within an "name == 'main'" block, you ensure that the tests are only run when the script is executed directly.

```python
def greet(name):
    return f"Hello, {name}!"

def main():
    user = input("Enter your name: ")
    print(greet(user))

if __name__ == '__main__':
    main()
```