---
sidebar_position: 10
---

# TreeMap

TreeMap is a data structure in Java that provides a way to store key-value pairs in a sorted order. It is a part of the Java Collections Framework and is based on the red-black tree data structure. TreeMap is similar to HashMap, but it maintains the keys in a sorted order, which makes it useful for certain applications where data needs to be stored in a specific order.
Creating a TreeMap

To create a new TreeMap in Java, you can use the following syntax:

```java
Map<KeyType, ValueType> map = new TreeMap<>();
```

The KeyType and ValueType parameters should be replaced with the types of the keys and values you want to store in the map.

For example, to create a TreeMap that stores strings as keys and integers as values, you can use the following code:

```java
Map<String, Integer> map = new TreeMap<>();
```

## Adding and Retrieving Values from a TreeMap

To add a key-value pair to a TreeMap, you can use the put() method:

```java
map.put("apple", 1);
```

This will add the key-value pair "apple" and 1 to the map.

To retrieve a value from a TreeMap, you can use the get() method:

```java
int value = map.get("apple");
```

This will retrieve the value associated with the key "apple" and assign it to the variable value.

If the key does not exist in the map, the get() method will return null.

```java
int value = map.get("banana");
```
In this case, value will be null.

## Iterating over a TreeMap

To iterate over the key-value pairs in a TreeMap, you can use the entrySet() method to get a set of the entries in the map, and then iterate over that set:

```java
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    String key = entry.getKey();
    int value = entry.getValue();
    System.out.println(key + ": " + value);
}
```

This will iterate over the key-value pairs in the map and print them to the console in sorted order based on the keys.

## Removing a Key-Value Pair from a TreeMap

To remove a key-value pair from a TreeMap, you can use the remove() method:

```java
map.remove("apple");
```

This will remove the key-value pair with the key "apple" from the map.