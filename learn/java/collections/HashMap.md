---
sidebar_position: 9
---

# HashMap

HashMap is a data structure in Java that allows the storage and retrieval of key-value pairs. It is a part of the Java Collections Framework and is one of the most commonly used collections in Java. It is based on the hash table data structure and provides fast access to the values associated with a key.
Creating a HashMap

To create a new HashMap in Java, you can use the following syntax:

```java
Map<KeyType, ValueType> map = new HashMap<>();
```

The KeyType and ValueType parameters should be replaced with the types of the keys and values you want to store in the map.

For example, to create a HashMap that stores strings as keys and integers as values, you can use the following code:

```java
Map<String, Integer> map = new HashMap<>();
```

## Adding and Retrieving Values from a HashMap

To add a key-value pair to a HashMap, you can use the put() method:

```java
map.put("apple", 1);
```

This will add the key-value pair "apple" and 1 to the map.

To retrieve a value from a HashMap, you can use the get() method:

```java
int value = map.get("apple");
```
This will retrieve the value associated with the key "apple" and assign it to the variable value.

If the key does not exist in the map, the get() method will return null.

```java
int value = map.get("banana");
```

In this case, value will be null.

## Iterating over a HashMap

To iterate over the key-value pairs in a HashMap, you can use the entrySet() method to get a set of the entries in the map, and then iterate over that set:

```java
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    String key = entry.getKey();
    int value = entry.getValue();
    System.out.println(key + ": " + value);
}
```

This will iterate over the key-value pairs in the map and print them to the console.

## Removing a Key-Value Pair from a HashMap

To remove a key-value pair from a HashMap, you can use the remove() method:

```java
map.remove("apple");
```

This will remove the key-value pair with the key "apple" from the map.