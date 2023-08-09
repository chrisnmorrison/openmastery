---
sidebar_position: 1.9
sidebar_label: "Try-Except-Finally"
---

# Try-Except-Finally

The try block is where we put the code that might cause trouble, just like the part of the recipe where we mix all the ingredients. Python tries to execute the code inside the try block. If everything goes smoothly, it's party time – no errors, no worries!

```python
try:
    # Your risky code goes here
    result = 10 / 2
    print("Everything's fine!")
except:
    # If something goes wrong, this is what we do
    print("Oops, something went wrong!")
```

## The Except Block: Handling Mishaps

Now, imagine you're mixing ingredients, and suddenly you spill some milk. You don't just stop and cry; you clean up the mess. In programming, if something goes wrong in the try block, Python jumps into the except block. Here, we can clean up the mess or figure out what went wrong.

```python
try:
    result = 10 / 0  # Uh-oh, division by zero!
except ZeroDivisionError:
    print("You can't divide by zero!")
```

You see, we told Python what to do when it encounters a "division by zero" problem. It's like saying, "Hey, if you see a mess, clean it up this way."

## The Finally Block: Cleanup Time

Okay, let's say you're baking, and no matter what, you have to wash the mixing bowl and spoon when you're done. In programming, the finally block is like that – it's where you put code that you want to run, no matter what, whether there was an error or not.

```python
try:
    file = open("my_file.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("Oops, the file doesn't exist!")
finally:
    if file:
        file.close()  # Close the file no matter what
```

## Putting it All Together

Imagine you're baking again, and you're trying a new recipe. You follow the steps, but what if the recipe doesn't make sense? Maybe it asks for "negative eggs." That's silly, right? Similarly, in programming, you can make mistakes, and your code might not make sense to Python. But with the try-except-finally magic, you can tell Python how to handle these confusing moments and keep your program running smoothly.