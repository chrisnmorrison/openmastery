---
sidebar_position: 12
---

# Stack

A stack is a collection of elements that can be accessed in Last-In-First-Out (LIFO) order. It is a linear data structure that allows you to add or remove elements from the top of the stack. The operations supported by a stack are:

- Push: This operation adds an element to the top of the stack.
- Pop: This operation removes the top element from the stack.
- Peek: This operation returns the top element without removing it from the stack.
- Empty: This operation checks whether the stack is empty or not.

## Java Stack Class

Java provides the Stack class to implement the stack data structure. The Stack class extends the Vector class and provides all the stack operations like push, pop, peek, and empty. Here is the syntax for creating a Stack object in Java:

```java
Stack <data_type> stack = new Stack<>();
```

Here, data_type is the type of data that you want to store in the stack. For example, if you want to store integers in the stack, you can create a stack object as follows:

```java
Stack<Integer> stack = new Stack<>();
```

## Using the Stack Class

Let's see how we can use the Stack class to implement a simple stack in Java. Consider the following example:

```java
Stack<String> stack = new Stack<>();

// Adding elements to the stack
stack.push("First");
stack.push("Second");
stack.push("Third");

// Removing elements from the stack
String topElement = stack.pop();
System.out.println("Popped element: " + topElement);

// Getting the top element without removing it
String peekElement = stack.peek();
System.out.println("Peeked element: " + peekElement);

// Checking if the stack is empty
boolean isEmpty = stack.empty();
System.out.println("Is the stack empty? " + isEmpty);
```

In the above example, we created a stack of type String and added three elements to it using the push operation. We then removed the top element from the stack using the pop operation and printed it. Next, we used the peek operation to get the top element without removing it from the stack and printed it. Finally, we checked if the stack was empty using the empty operation and printed the result.

## Real-World Applications of Stack

Stacks are widely used in computer science and programming. Here are a few real-world applications of the stack data structure:

- Parentheses Matching: Stacks can be used to match opening and closing parentheses in programming languages like Java, Python, etc.
- Expression Evaluation: Stacks can be used to evaluate expressions in mathematical calculations.
- Browser History: The back and forward buttons in a web browser can be implemented using a stack to keep track of the visited pages.
- Function Calls: In many programming languages, function calls are implemented using a stack. When a function is called, its parameters and return address are pushed onto the stack. When the function returns, the parameters and return address are popped off the stack.
