---
sidebar_position: 1.7
sidebar_label: "Polymorphism"
---

# Polymorphism

At its core, polymorphism allows different classes to be treated as instances of a shared base class. This means that objects belonging to various classes can respond to the same method calls in a way that's appropriate for their specific class. Polymorphism fosters code flexibility and extensibility, enabling developers to write more generic and reusable code.

## Types of Polymorphism

Python supports two main types of polymorphism:

- Compile-Time (Static) Polymorphism: Also known as method overloading, this involves using the same method name but with different parameters in the same class. Python doesn't natively support method overloading, but you can achieve similar effects using default parameters.
- Run-Time (Dynamic) Polymorphism: Also known as method overriding, this occurs when a subclass provides a specific implementation for a method defined in its superclass. This allows objects of different classes to respond to the same method call in a way that's relevant to their class.

## Benefits of Polymorphism

Polymorphism provides several important benefits in OOP:

- Code Reusability: Polymorphism promotes the reuse of code by allowing objects of different classes to share a common interface.
- Simplicity: By treating different objects as instances of the same base class, you can write code that's more concise and easier to understand.
- Extensibility: Polymorphism enables you to add new classes that conform to the same interface without affecting the existing codebase.
- Reduced Coupling: Polymorphism reduces the dependency between classes, allowing for more modular and maintainable code.

## Practical Application

Let's demonstrate polymorphism through a practical example:

```python
class Shape:
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14 * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

# Creating instances
circle = Circle(5)
rectangle = Rectangle(4, 6)

# Using polymorphism to calculate areas
shapes = [circle, rectangle]
for shape in shapes:
    print("Area:", shape.area())
```
In this example, the `Shape` class serves as the base class, and both `Circle` and `Rectangle` inherit from it. Each subclass provides its own implementation of the area method. By treating both `Circle` and `Rectangle` objects as instances of the `Shape` class, we achieve polymorphism. The same method call `shape.area()` invokes different implementations based on the actual class of the object.