---
sidebar_position: 1.3
sidebar_label: "Methods"
---

# Methods

Methods are functions defined within a class. They encapsulate actions or behaviors that objects of that class can perform. Just as functions enable you to group code into reusable blocks, methods provide a way to bundle related actions and behaviors within a class.

```python
class Circle:
    def __init__(self, radius):
        self.radius = radius

    def calculate_area(self):
        area = 3.14159 * self.radius ** 2
        return area

# Creating an object and calling a method
circle1 = Circle(5)
area1 = circle1.calculate_area()
print(area1)  # Output: 78.53975
```

In the example above, the Circle class defines a method calculate_area(), which computes the area of a circle based on its radius. An object of the class is created, and the method is called to calculate and display the area.

## Instance Methods: Working with Object Data

Instance methods are the most common type of methods in Python. They operate on instance-specific data (attributes) and have access to the object's state through the self parameter.

```python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def calculate_area(self):
        area = self.width * self.height
        return area

# Creating an object and calling a method
rect = Rectangle(4, 6)
area = rect.calculate_area()
print(area)  # Output: 24
```

In this case, the Rectangle class has an instance method calculate_area() that computes the area based on the width and height attributes of the object.

## Static Methods: Utility at the Class Level

Static methods are defined using the @staticmethod decorator. They are independent of both instance and class data and provide utility functions within a class's namespace.

```python
class MathUtility:
    @staticmethod
    def square(x):
        return x * x

result = MathUtility.square(4)
print(result)  # Output: 16
```

The square() static method within the MathUtility class is an example of a utility function that doesn't rely on instance or class data. You can call static functions without instantiating an object.