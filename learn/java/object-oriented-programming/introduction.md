---
sidebar_position: 1
---

# Introduction to OOP

Object Oriented Programming (commonly called OOP, which we'll often use) is a paradigm shift from other types of programming. It's more than just remembering code syntax. It's a way of thinking, and requires a complete change in how you write and structure code in order to fully grasp it.

But, don't be overwhelmed. OOP isn't learned in a day. It can take months, even years to master OOP, and there are 1000+ page textbooks just on OOP.

Again, don't be overwhelmed! Take your time, and practice writing a lot of code. Once you understand it, you'll be happy that you do.

## What is OOP?

Many older programming languages are procedural programming languages, such as Fortran or COBOL. You code your instructions step-by-step and your program does something. There's nothing inherently wrong with this style of code, and it's still very popular today (e.g. writing scripts). But, imagine you have a program that consists of 5000 files, each with 2000 lines of code. Imagine how difficult it would be to track down errors, or remember how all your code interacts.

Object-oriented languages solve this problem (and several other problems), and add a ton of additional functionality. They allow you to group together different parts of your code, organize the parts, define information security, and so much more.

## Pillars of Object-Oriented Programming

OOP has four main benefits / use-cases, which are sometimes called the _pillars of OOP_. Although none of them are actually necessary to write OOP code, using them brings significant advantages, and any expert OOP programmer will use them without question. In reality, they are essentially necessary to write organized, large applications.

:::tip
It can be difficult to understand the 4 pillars without actually seeing code. Don't worry, we'll give plenty of examples as we go along. For now, aim for a high level understanding of these concepts.
:::

### Abstraction

In OOP, abstraction is the process of hiding the details of how a particular piece of software works and exposing a simplified interface to the user. It allows developers to focus on the big picture by hiding the underlying complexity of the system and only showing the essential details that are relevant to the user.

Abstraction is achieved in OOP through the use of abstract classes and interfaces. An abstract class is a class that cannot be instantiated and is used as a blueprint for one or more derived classes. An interface is a set of related methods with empty bodies that a class can implement.

By using abstract classes and interfaces, developers can create a flexible and modular design for their software, which makes it easier to maintain and extend. It also helps to reduce the risk of errors and makes the code more reusable.

### Encapsulation

Encapsulation is a concept in OOP that refers to the bundling of data and methods that operate on that data within a single unit or object.

The main goal of encapsulation is to protect the internal data of an object from external access and modification, which can help to prevent unintended changes to the data and maintain the integrity of the object. Encapsulation is achieved in OOP through the use of access modifiers, such as public, private, and protected, which control the visibility and accessibility of the object's data and methods.

By encapsulating the data and methods of an object, developers can create a self-contained and modular design for their software, which makes it easier to maintain and extend. It also helps to reduce the risk of errors and makes the code more reusable.

### Inheritance

Inheritance is a concept in OOP that allows a class to inherit properties and methods from a parent class.

The main goal of inheritance is to promote code reuse and modularity in software development. By creating a hierarchy of classes, developers can define a base set of functionality in a parent class and then extend or modify that functionality in one or more child classes. This allows developers to create a flexible and modular design for their software, which makes it easier to maintain and extend.

To implement inheritance in OOP, a child class is defined using the extends keyword, followed by the name of the parent class. The child class then has access to all of the public and protected properties and methods of the parent class, and can override or extend those methods as needed.

Inheritance is a powerful tool for code reuse and modularity, but it should be used with caution, as it can also introduce complexity and create tight coupling between classes.

### Polymorphism

Polymorphism is a concept in OOP that allows a single interface to be used for multiple forms of an object.

The main goal of polymorphism is to allow developers to write code that is more flexible and modular, by creating a single interface that can be used with multiple different types of objects. This allows developers to write code that is more general and reusable, and reduces the need for repetitive and error-prone conditional statements.

There are two main types of polymorphism in OOP: static polymorphism and dynamic polymorphism. Static polymorphism is achieved through method overloading, which allows a class to have multiple methods with the same name but different parameter lists. Dynamic polymorphism is achieved through method overriding, which allows a child class to override and extend the behavior of a method inherited from a parent class.

Polymorphism is a powerful tool for code reuse and modularity, but it should be used with caution, as it can also introduce complexity and make it more difficult to understand the behavior of a system.

## Class vs Object

In Java, a class is a **blueprint** for creating objects that has both state and behavior.

An object is an **instance** of a class that has both state and behavior. 

You use classes to define something that models a real-world thing - an animal, vehicle, anything. This allows you to define what state and behaviour your class has, and create objects that also have state and behaviour. For example, a `Vehicle` class may have a `make` and `model` state, or a `currentSpeed` among other things, such as an `accelerate` or `turnOn` behaviour. You use the class to create objects such as a `HondaCivic` object.

These states and behaviours can apply to more than a `HondaCivic` object. They can apply to any car. So, we define these things in a class blueprint, then create objects based on our class blueprint.

Another example: a customer may have the following characteristics:

 - States: name, address, phone number, Gold Member, etc.
 - Behaviour: set address, get address, display info, upgrade to Platinum Member, 

A class defines the structure and behavior of an object by specifying its data fields (state) and methods (behavior). Before we can create objects in Java, we must first define a class that specifies the structure and behavior of those objects.

Okay, enough repeating ourselves. OOP is an abstract concept, so let's look at a few examples to cement these ideas.

## What's next?
