---
sidebar_position: 1.6
sidebar_label: "Inheritance"
---

# Inheritance

Inheritance is a mechanism by which a new class, known as a derived class or subclass, can inherit attributes and methods from an existing class, referred to as a base class or superclass. This promotes code reuse and allows you to model a hierarchy of classes that share common characteristics while also having unique features.

## Benefits of Inheritance

Inheritance offers several key benefits in object-oriented programming:

- Code Reusability: Inheritance allows you to create new classes by reusing the attributes and behaviors of existing classes, reducing the need to rewrite similar code.
- Hierarchy and Organization: Inheritance enables you to create a clear hierarchy of classes, reflecting real-world relationships and simplifying the understanding of your codebase.
- Overriding and Polymorphism: Subclasses can override methods from the superclass to provide specialized implementations. This fosters polymorphism, where different classes can be used interchangeably based on their shared interface.

## Types of Inheritance

Python supports different types of inheritance:

- Single Inheritance: A subclass inherits from a single superclass.
- Multiple Inheritance: A subclass inherits from multiple superclasses. This can lead to the "diamond problem," where ambiguity arises due to shared methods and attributes from multiple paths.
- Multilevel Inheritance: A class derives from another class, which in turn inherits from another class. This creates a hierarchy of classes.
- Hierarchical Inheritance: Multiple subclasses inherit from a single superclass.

## Method Resolution Order (MRO)

In Python, the Method Resolution Order (MRO) defines the sequence in which methods are searched for in a class hierarchy. It ensures that methods are inherited and overridden in a consistent and predictable manner. The C3 Linearization algorithm is used to determine the MRO, following the C3 superclass linearization rules.

Don't worry too much about the inner workings, rather, focus on the practical implementation. If you have the same method in a parent class and child class, and you create an object of type child class and call the method, which method will be called? The answer is the method in the child class. This is because the child class overrides the method in the parent class.

## Practical Implementation

Let's illustrate inheritance with a practical example:

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

# Creating instances
dog = Dog("Buddy")
cat = Cat("Kitty")

print(dog.speak())  # Output: Buddy says Woof!
print(cat.speak())  # Output: Kitty says Meow!
```

In this example, the `Animal` class is the base class, and the `Dog` and `Cat` classes are subclasses that inherit from `Animal`. Each subclass overrides the speak method to provide its own implementation.