---
sidebar_position: 7
---

# List Interface

the List interface is part of the Java Collections Framework and is used to implement an ordered collection of elements. In this article, we will discuss what the List interface is, its features, and some examples of how to use it in Java.

## What is the List Interface?

The List interface is part of the Java Collections Framework and provides a way to store an ordered collection of elements. Elements in a list are accessed using an index, and the list interface provides methods to add, remove, and modify elements in the list.

The List interface extends the Collection interface and adds several methods to manipulate the list, such as add, remove, and get. It also provides methods to search for elements in the list and to sort the list.

## Features of the List Interface:

Here are some key features of the List interface:

- Ordered Collection: The List interface stores elements in the order in which they were added to the list.
- Index-Based Access: Elements in a list can be accessed using an index, starting at 0.
- Duplicate Elements: A list can contain duplicate elements.
- Dynamic Size: A list can grow or shrink in size as elements are added or removed.
- Random Access: Elements in a list can be accessed quickly using an index.

## Examples of Using the List Interface:

Here are some examples of how to use the List interface in Java:

### Creating a List

To create a new list, you can use one of the implementations of the List interface, such as ArrayList or LinkedList:

```java
List<String> names = new ArrayList<>();
```

This creates a new ArrayList that can store String elements.

### Adding Elements to a List:

To add elements to a list, you can use the add() method:

```java
names.add("Alice");
names.add("Bob");
names.add("Charlie");
```

This adds three String elements to the names list.

### Accessing Elements in a List

To access an element in a list, you can use the get() method:

```java
String first = names.get(0);
```

This gets the first element in the names list and assigns it to the variable first.

### Removing Elements from a List:

To remove an element from a list, you can use the remove() method:

```java
names.remove(1);
```

This removes the second element (index 1) from the names list.

### Searching for Elements in a List

To search for an element in a list, you can use the indexOf() method:

```java
int index = names.indexOf("Charlie");
```

This searches for the element "Charlie" in the names list and returns its index.

### Sorting a List

To sort a list, you can use the sort() method:

```java
Collections.sort(names);
```

This sorts the names list in alphabetical order.