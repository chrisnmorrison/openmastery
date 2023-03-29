---
sidebar_position: 8
---

# AbstractMap

An AbstractMap is a class that implements the Map interface but doesn't provide a complete implementation of all the methods in the Map interface. Instead, it provides a skeletal implementation that other classes can extend to provide a complete implementation of the Map interface. In this article, we'll discuss what the AbstractMap class is, how it works, and some examples of how to use it in Java.

## What is the AbstractMap Class?

The AbstractMap class is an abstract class that implements the Map interface in Java. It provides a skeletal implementation of the Map interface that other classes can extend to provide a complete implementation of the Map interface. The AbstractMap class provides default implementations for many of the methods in the Map interface, which means that subclasses only need to implement the methods that are specific to their implementation.

## How does the AbstractMap Class Work?

The AbstractMap class provides default implementations for many of the methods in the Map interface. For example, it provides default implementations for the isEmpty(), size(), and containsValue() methods. This means that subclasses only need to implement the methods that are specific to their implementation.

The AbstractMap class also provides two inner classes, SimpleEntry and SimpleImmutableEntry, that implement the Map.Entry interface. These classes can be used to create key-value pairs that can be added to a map. The SimpleEntry class is mutable, which means that the value associated with the key can be changed. The SimpleImmutableEntry class is immutable, which means that the value associated with the key cannot be changed.

## Examples of Using the AbstractMap Class:

Here are some examples of how to use the AbstractMap class in Java:

### Creating a new Map implementation

To create a new implementation of the Map interface, you can extend the AbstractMap class and provide implementations for the methods that are specific to your implementation. For example, to create a map that stores key-value pairs as strings, you can create a new class that extends the AbstractMap class and provides implementations for the put() and get() methods:

```java
public class StringMap extends AbstractMap<String, String> {

    private Map<String, String> backingMap = new HashMap<>();

    @Override
    public Set<Entry<String, String>> entrySet() {
        return backingMap.entrySet();
    }

    @Override
    public String put(String key, String value) {
        return backingMap.put(key, value);
    }

    @Override
    public String get(Object key) {
        return backingMap.get(key);
    }
}
```

This creates a new map implementation that stores key-value pairs as strings and delegates to a HashMap instance for storage.

### Adding key-value pairs to a map

To add a key-value pair to a map, you can create a new SimpleEntry or SimpleImmutableEntry instance and add it to the map:

```java
Map<String, String> stringMap = new HashMap<>();
Map.Entry<String, String> entry = new AbstractMap.SimpleEntry<>("key", "value");
stringMap.put(entry.getKey(), entry.getValue());
```

This adds a new key-value pair to a HashMap instance using a SimpleEntry instance.

### Iterating over a map

To iterate over the key-value pairs in a map, you can use the entrySet() method to get a set of the entries in the map, and then iterate over that set:

```java
Map<String, String> stringMap = new HashMap<>();
stringMap.put("key1", "value1");
stringMap.put("key2", "value2");
for (Map.Entry<String, String> entry : stringMap.entrySet()) {
    System.out.println(entry.getKey() + "=" + entry.getValue());
}
```

This iterates over the key-value pairs in a HashMap instance and prints them to the console.