---
sidebar_position: 18
---

# ArrayList

## What's ArrayList?

Normally, we'd like to cover all of the fundamentals before anything else. While built-in classes are generally for more advanced purposes, `ArrayList` is one of the fundamental ones, like `Scanner`. It's also one of the easiest to understand and use. Let's cover it now, before diving into more complicated topics.

Like we discussed in the `array` lesson, `array` is a powerful data structure, with one limitation: fixed size. What happens if you create an array of length 10, and you want it to add more than 10 values to it? If you try to add anything to the 11th index or higher, simply, your program will crash from `ArrayIndexOutOfBoundsException`. Arrays cannot be resized; rather, you need to create a new array.

Setting a fixed size array has its use-cases, and isn't always a bad thing. For example, if you're calculating top 10 high scores, there's no advantage to having a larger array. In fact, it's a disadvantage, since you're using more memory. When you define the length of your array, your program reserves enough memory to store the requested amount of elements.

But in many cases, it's easier and more intuitive to use an array that resizes automatically based on your program needs.

Say hello to `ArrayList`, a built-in Java class that implements the `List` interface. In it's simpliest form, `ArrayList` can be treated as an array that resizes automatically based on 1) your code, and 2) what actually happens during runtime. If you think that there's even the slightest chance that your array will increase beyond it's size, then you should use `ArrayList` instead (or a different implementation of `List`. But for now, let's just cover the simplest one).

:::tip Important Note about Data Types!
With `arrays`, we can use any data type: primitive or reference. With `ArrayList`, we **must use reference types**. So, how do we use `int` or `double`? We use `Wrapper` classes, which are classes made to use primitive data types as objects / reference types. To use them, simply capitalize the first letter, and write out entire word if it's shortened as a primitive. `int` becomes `Integer`, `char` becomes `Character`, `double` becomes `Double`, and so on. 

This is related to Autoboxing, Boxing, and Unboxing. We'll cover that in a later lesson.
:::

Working with `ArrayList` and other types of list is different than `array`s. Here's the basic syntax.

```java
import java.util.ArrayList; //important! We have to import ArrayList. If you're using a modern IDE, it'll tell you this as well.

public class Learn {
    public static void main(String[] args) {

        String [] stringArr = new String[2];
        stringArr[0] = "Hello";
        stringArr[1] = "World";

        System.out.println(stringArr[0]);
        System.out.println(stringArr[1]);

        ArrayList<String> stringArrayList = new ArrayList<>();

        // stringArrayList[0] .. error, we have to do it differently!
        stringArrayList.add("Array");
        stringArrayList.add("List");

        // if we want to iterate over an entire ArrayList, the for-each loop is very suitable!
        for (String entry : stringArrayList){
            System.out.println(entry);
        }
    }
}
```

To work with `ArrayList`, we have to use built-in methods provided to us. `add()` is one method, that adds a new element to our `ArrayList`. Let's look at more methods at work.

```java
import java.util.ArrayList;

public class Learn {
    public static void main(String[] args) {

        ArrayList<Integer> integers = new ArrayList<>();

        integers.add(12);
        integers.add(24);
        integers.add(36);

        // returns whether the parameter is found in the List
        boolean contains1 = integers.contains(12); //true
        boolean contains2 = integers.contains(99); //false

        // gets the element at the specified index
        integers.get(1); // returns 24

        Integer myInt = 36;
        //removes the element at the given index
        integers.remove(0);
        //or, removes the specified element if an object is passed. Returns a boolean if successful or not.
        integers.remove(myInt);

        //returns the number of elements in the ArrayList
        int size = integers.size();

        for (int i : integers){
            System.out.println(i); //only prints 24, since we removed the other elements
        }
    }
}
```

### ArrayList methods

Here are some examples of the built-in methods of ArrayList in Java. We recommend typing these out by hand, which will help cement your knowledge of Java syntax.

`add()`: Adds an element to the end of the ArrayList.

```java
ArrayList<String> myList = new ArrayList<String>();
myList.add("Apple");
myList.add("Banana");
myList.add("Cherry");
```
`remove()`: Removes the specified element from the ArrayList.

```java
myList.remove("Banana");
```

`get()`: Retrieves the element at the specified position in the ArrayList.

```java
// get the element at index zero - aka the first element
String fruit = myList.get(0);
```
`size()`: Returns the number of elements in the ArrayList.

```java
//returns an integer
int size = myList.size();
```

`contains()`: Returns true if the specified element is present in the ArrayList.

```java
boolean containsCherry = myList.contains("Cherry");
```

`clear()`: Removes all elements from the ArrayList.

```java
myList.clear();
```

`indexOf()`: Returns the index of the first occurrence of the specified element in the ArrayList, or -1 if the element is not found.

```java
int index = myList.indexOf("Cherry");
```

`toArray()`: Returns an array containing all of the elements in the ArrayList.

```java
String[] fruitArray = myList.toArray(new String[0]);
```

### Printing an ArrayList

So, you've created an ArrayList and added items to it. How do you print it?

```java
// Does this work?
System.out.println(myArrayList);
```

No, this does not work. ArrayLists are objects, and objects (aka refereence types) are stored differently than primitive types, which are easy to print. Primitives are stored on the stack, and reference types are stored on the heap. Reference type variables store a memory address to the object on the heap, rather than the actual object. So, calling `System.out.println()` on an object prints the memory address of the object.. not very helpful! 

An extra step is necessary to print an ArrayList, or any object for that matter. But, keep in mind that the method may differ depending on the type of object. The following works for ArrayLists that contain boxed primitive data, or `Strings`.

```java
ArrayList<String> myList = new ArrayList<String>();
myList.add("Apple");
myList.add("Banana");
myList.add("Cherry");

for (String element : myList) {
    System.out.println(element);
}

// Apple
// Banana
// Cherry
```

Alternatively, ArrayList inherits a method from `java.util.AbstractCollection` called `toString()`. This is a built-in method that prints out a String representation of an object. `toString()` can be called on many types of objects, not just ArrayList, so it's output can vary.

```java
System.out.println(myList.toString());

// [Apple, Banana, Cherry]
```

### Final Notes

How do we know these methods exists? You might be asking - do I need to remember all of these methods?

The methods of `ArrayList` (or any Java class, interface, etc.) can always be found at the Oracle Docs, and should be your go-to reference for Java code. As much as tutorial sites like Open Mastery can help you grasp the concepts, the actual Documentation of something is far more comprehensive. As a beginner, you might have trouble understanding some of the jargon in the documentation. Don't worry, that's normal! You should still expose yourself to it early on, and once you have a stronger grasp of Java, chances are you'll be browsing the Oracle Docs more often than you thought you would. [Here's a link to the docs for ArrayList](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html).

:::info Important Tip
One tip we repeat a lot here is: **Don't memorize code. Memorize what code can do**.

There is way too much code to memorize. With practice, you'll commit many things to memory, but it's a futile effort trying to memorize all of a language's code.

Instead, expose yourself to the concepts, and practice writing them. For example, you may forget the syntax of the `ArrayList` method to find the index of a specified element. That's okay. It's much easier to remember that this is possible, and then Google it.

If you need to memorize code for a test, that's different. In industry, Googling is extremely common and encouraged.
:::

## What's next?
