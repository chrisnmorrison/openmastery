---
sidebar_position: 5
---

# ArrayList

ArrayList is a dynamic array that allows you to store a collection of elements. It's a part of the Java Collections Framework and is available in the java.util package. Unlike arrays, ArrayList is resizable and can dynamically grow and shrink its size based on the number of elements that it contains.

To use ArrayList, you must first import the java.util.ArrayList package. The syntax to create an ArrayList is as follows:

```java
ArrayList<Type> arrayListName = new ArrayList<Type>();
```

Here, Type refers to the type of the elements that you want to store in the ArrayList. For example, if you want to store a collection of integers, you would create an ArrayList as follows:

```java
ArrayList<Integer> numbers = new ArrayList<Integer>();
```

You can also specify the initial capacity of the ArrayList by passing an integer value to the ArrayList constructor. For example:

```java
ArrayList<String> names = new ArrayList<String>(10);
```

This creates an ArrayList of strings with an initial capacity of 10 elements.

You can add elements to the ArrayList using the add() method. For example:

```java
numbers.add(1);
numbers.add(2);
numbers.add(3);
```

This adds the integers 1, 2, and 3 to the numbers ArrayList.

You can access elements in the ArrayList using the get() method. For example:

```java
int firstNumber = numbers.get(0);
```

This gets the first element of the ArrayList (which is 1) and assigns it to the variable firstNumber.

You can also remove elements from the ArrayList using the remove() method. For example:

```java
numbers.remove(0);
```

This removes the first element (which is 1) from the ArrayList.

## Java Collections Framework - Quick Introduction

The Java Collections Framework is a set of classes and interfaces that provide a way to store and manipulate groups of objects. It includes the following core interfaces: List, Set, Queue, and Map.

The List interface is implemented by ArrayList and provides an ordered collection of elements. The elements in a List can be accessed by their index. ArrayList is a resizable array and is the most commonly used implementation of the List interface.

The Set interface is implemented by HashSet and provides an unordered collection of unique elements. Elements in a Set can't be duplicated and are usually used to check whether an element exists in the collection or not.

The Queue interface is implemented by LinkedList and provides a collection of elements that can be accessed in a specific order. Elements are usually added to the end of the Queue and removed from the beginning.

The Map interface is implemented by HashMap and provides a collection of key-value pairs. The keys in a Map are unique, and each key is associated with a value. HashMap is the most commonly used implementation of the Map interface.

In addition to the core interfaces, the Java Collections Framework also includes other useful classes and interfaces, such as TreeSet, TreeMap, and PriorityQueue.

The Collections class provides a set of methods that can be used to manipulate collections, such as sorting, shuffling, and searching. For example, you can sort an ArrayList of integers using the sort() method in the Collections class:

```java
ArrayList<Integer> numbers = new ArrayList<Integer>();
numbers.add(3);
numbers.add(1);
numbers.add(2);

Collections.sort(numbers);
```

After calling the sort() method, the numbers ArrayList will contain the integers in sorted order (1, 2, 3).

ArrayList is a powerful data structure in Java that allows you to store a collection of elements. It's part of the Java Collections Framework, which provides a set of interfaces and classes for storing and manipulating groups of objects. Understanding the Java Collections