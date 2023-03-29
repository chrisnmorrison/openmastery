---
sidebar_position: 6
---

# LinkedList

LinkedList is a data structure that is used to store a collection of elements. It's a part of the Java Collections Framework and is available in the java.util package. LinkedList is a doubly linked list implementation, which means that each element in the list points to the next and the previous element.

To use LinkedList, you must first import the java.util.LinkedList package. The syntax to create a LinkedList is as follows:

```java
LinkedList<Type> linkedListName = new LinkedList<Type>();
```

Here, Type refers to the type of the elements that you want to store in the LinkedList. For example, if you want to store a collection of strings, you would create a LinkedList as follows:

```java
LinkedList<String> names = new LinkedList<String>();
```

You can also specify the initial capacity of the LinkedList by passing an integer value to the LinkedList constructor. For example:

```java
LinkedList<Integer> numbers = new LinkedList<Integer>();
```

This creates a LinkedList of integers with an initial capacity of 10 elements.

You can add elements to the LinkedList using the add() method. For example:

```java
names.add("John");
names.add("Mary");
names.add("Bob");
```

This adds the strings "John", "Mary", and "Bob" to the names LinkedList.

You can access elements in the LinkedList using the get() method. For example:

```java
String firstPerson = names.get(0);
```

This gets the first element of the LinkedList (which is "John") and assigns it to the variable firstPerson.

You can also remove elements from the LinkedList using the remove() method. For example:

```java
names.remove(0);
```

This removes the first element (which is "John") from the LinkedList.

LinkedList provides a number of advantages over other data structures like ArrayList. One of the biggest advantages is that it's a dynamic data structure, which means that it can grow or shrink in size as elements are added or removed. This makes LinkedList more efficient than other data structures for inserting and deleting elements in the middle of the list.

LinkedList also provides an iterator, which allows you to traverse the elements of the list in a forward or backward direction. For example:

```java
Iterator<String> iterator = names.iterator();

while(iterator.hasNext()) {
  String name = iterator.next();
  System.out.println(name);
}
```

This code creates an iterator for the names LinkedList and then prints each name to the console.

In addition to the add() and remove() methods, LinkedList also provides a number of other methods for manipulating the list, such as addFirst(), addLast(), removeFirst(), and removeLast(). These methods allow you to add or remove elements from the beginning or end of the list.

LinkedList is a powerful data structure in Java that allows you to store a collection of elements. It's part of the Java Collections Framework, which provides a set of interfaces and classes for storing and manipulating groups of objects. Understanding LinkedList can be useful when you need to work with a data structure that requires efficient insertion and deletion of elements.