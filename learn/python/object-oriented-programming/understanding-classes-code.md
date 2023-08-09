---
sidebar_position: 1.2
sidebar_label: "Classes (Code)"
---

# Classes (Code)

A class serves as a blueprint or template for creating objects. It encapsulates attributes (data) and methods (functions) that define the properties and behavior of objects. Think of a class as a master plan for constructing objects with consistent attributes and functionalities.

We'll focus on attributes for now, and look at methods in the next lesson.

```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

# Creating objects from the class
dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)
```

In the above example, we define a Dog class with attributes name and age. We then create two Dog objects, each with its own unique data.

Beginners often ask, what is `__init__` and `self` and why do we write it? The `__init__` method is a special method used to initialize objects when they are created from a class. It is often referred to as the **constructor** because it sets up the initial state of the object by assigning values to its attributes. The `__init__` method is automatically called when a new object is created, allowing you to ensure that the object starts with the **desired** attributes and data.

Is it necessary? No, it is not. You should only add it if you want things to happen automatically to your object when it is instantiated, such as setting initial values.

The `self` keyword is also confusing to beginners. The `self` keyword is used to refer to the instance of a class within its own methods. It acts as a reference to the specific object that the method is being called on. The `self` keyword essentially binds the instance to the method, enabling you to work with the unique data associated with that instance. It helps prevent ambiguity when dealing with multiple objects of the same class, ensuring that methods can operate on the correct instance's data.

## Attributes: Defining Properties

Attributes are variables within a class that store data associated with objects. They represent the characteristics or properties an object can have.

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

# Creating objects with attributes
student1 = Student("Alice", 20)
student2 = Student("Bob", 22)

print(student1.name)  # Output: "Alice"
```

In this instance, the Student class contains attributes name and age. When objects are created, they inherit these attributes.

## Creating Objects: Instances of Classes

Objects are instances created from a class. They embody the attributes defined in the class and represent actual entities within your program.

```python
class Fruit:
    def __init__(self, name, color):
        self.name = name
        self.color = color

# Creating objects with attributes
apple = Fruit("Apple", "Red")
banana = Fruit("Banana", "Yellow")

print(banana.color)  # Output: "Yellow"
```

Here, the Fruit class defines attributes name and color, and objects created from this class inherit these attributes. You may create as many objects as you'd like from a class, and in your programming journey, you likely will. 

Remember, a class is a blueprint for something that contains information that makes sense to group together, and an object is a thing created from this blueprint.