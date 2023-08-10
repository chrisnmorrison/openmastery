---
sidebar_position: 1.7
sidebar_label: "Encapsulation"
---

# Encapsulation

Abstraction is the process of simplifying complex reality by modeling classes based on their essential characteristics and behaviors, while hiding irrelevant details. It enables you to focus on what an object does, rather than how it does it. Think of abstraction as creating a high-level overview that captures the fundamental aspects of an object without diving into every intricate detail.

## The Role of Abstraction in OOP

Abstraction plays a pivotal role in achieving modular design and code organization. By abstracting away the implementation details, you create a clear distinction between what an object can do and how it accomplishes it. This separation of concerns not only enhances code readability but also makes it easier to modify, maintain, and extend your programs.

## Applying Abstraction in Python

Python's class and object-oriented capabilities make implementing abstraction straightforward. Here's how you can apply abstraction using Python:

## Abstract Base Classes (ABCs)

Python provides the abc module to create abstract base classes. These classes can't be instantiated directly; instead, they serve as templates for concrete subclasses. Abstract methods within ABCs define required behaviors that subclasses must implement.

```python

from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def calculate_area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def calculate_area(self):
        return 3.14159 * self.radius ** 2

# Creating objects from concrete subclasses
circle = Circle(5)
area = circle.calculate_area()
print(area)  # Output: 78.53975
```

In this example, the Shape class is an abstract base class with an abstract method calculate_area(). The concrete subclass Circle inherits from Shape and implements the required method.

## Using Properties to Abstract Attributes:

Properties in Python allow you to abstract the access and modification of attributes, providing control over how they are accessed or set.

```python
class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature below absolute zero is not possible.")
        self._celsius = value

temp = Temperature(25)
print(temp.celsius)  # Output: 25

temp.celsius = 30
print(temp.celsius)  # Output: 30
```

In this case, the celsius attribute is abstracted using the @property and @celsius.setter decorators, allowing controlled access and validation.

## Benefits of Abstraction:

- Code Modularity: Abstraction allows you to create modular and isolated components, making it easier to manage and modify code.
- Reduced Complexity: By hiding implementation details, you simplify the understanding of how objects interact and behave.
- Flexibility and Extensibility: Changes to the internal implementation of a class won't affect code that relies on its abstract interface, promoting extensibility without breaking existing code.