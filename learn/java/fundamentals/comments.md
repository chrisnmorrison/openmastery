---
sidebar_position: 1.5
---

# Comments

Most programming languages support comments, which are parts of your code that do not run at execution time. Before we dive deeper into more Java code, let's quickly look at Java comments.

```java
int myNum = 5; //This is a comment, and this comment does nothing

/*
This is a multi-line comment.
If you need to document something, or write a long description, 
you'll probably use a multi-line comment
*/
public int complicatedFunction(){
    return 2 + 2;
}

// Alternatively, you can just write a
// single line comment on 
//each line

/**
If you see a comment with two asterisks after the first slash, it's a Javadoc comment used to generate documentation.

For now, don't worry about it. We'll cover Javadoc another time!
*/
String hello = "Hello world";
}
```

In most IDEs (integrated development environment. aka, where you write code), your actual code is highlighted with colors that distinguish different parts of your code, while comments are typically all the same color, often gray.

As a beginner, you may not see a need for comments. The truth is, as a beginner, you don't really need to document your code. It's often simply enough so that comments aren't needed.

However, you should still comment your code as a beginner, no matter how simple it is. Why?

- You're writing down what your code does, and this helps cement your coding knowledge
- If you come back to your code later, your comments will help remind you what your code does.
- You'll get into the habit of documenting your code. In the real world, only bad programmers don't document their code. 
- Comments help other developers understand your code without having to use a great deal of brainpower reading it line by line

Another cool use of comments (that's often under-used in the real world) is using code to drive and prioritize tasks. You can create your own system of comments that'll help you work through big projects. 

```java
//  TODO: Fix this error
myMethod(){
    // what am i missing...
}

// CAUTION: This method uses a lot of memory. Use otherMethod() instead
public void myMethod(){
    //code to repeat something ten billion times
}

// DANGER: Works, but not production ready. Test for more bugs
public void buggyMethod(){
    /// ...
}

```

We haven't covered methods yet, so if you don't understand them, just focus on the comments. If you're working on a project with 1 million lines of code, having comments like this can help speed up your workflow. For example, you could search for all `TODO` instances with `CTRL+F`.

## What's next?

