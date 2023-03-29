---
sidebar_position: 12
---

# User Input

What if we want to prompt the user to enter something? For example, prompt the user to enter their name, and print a welcome message.

To achieve this, we use a class called `Scanner`. First, you create an instance of `Scanner` using its constructor (we'll dive into constructors once we get to object-oriented programming) then pass an argument `System.in()`. Your beginner Java journey will involve a lot of this, so get used to it!

Here's a basic example:

```java
import java.util.Scanner;

public class Learn {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.print("Please enter your name: ");
        String name = in.nextLine();
        System.out.printf("Hello %s!", name);
    }
}
```

```

Please enter your name: John
Hello John!              ^^ we typed in 'John' here
```

In this example, we entered the name 'John' into the console, saved it into a variable called `name` using a built-in method `nextLine()`, then printed it.

:::info
`nextLine()` is used to take Strings as input. There are several other methods for other types, like `nextInt()`, `nextDouble()`, and so on. However, these differ from `nextLine()`, and we'll go over that soon.
:::

`Scanner(System.in)` is Java's one-size-fits-all solution for reading from `stdin`. Although there are better solutions for reading other streams, such as files, `Scanner` can read files as well.

### nextLine() vs next()

There's an important distinction to be made here. `nextLine()` reads an entire line that you entered into the console. For example, typing `Hello world` is one line. However, there is a method called `next()` that reads one item at a time, seperated by a delimiter. By default, the delimiter is a space. Using `next()` on `Hello world` will only read `Hello`, and you'll have to call `next()` again to read `world`.

```java
import java.util.Scanner;

public class Learn {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.print("Please enter your first and last name: ");
        String fName = in.next();
        String lName = in.next();

        System.out.printf("Hello %s %s", fName,lName);
    }
}

```

```
Please enter your first and last name: John Smith
Hello John Smith
```

`next()` reads Strings, and there are other methods to read other data types: `nextDouble()`, `nextInt()`, and so on..

`Scanner.in()` can read any primitive data type, but remember that Java is a typed language. You must specify the type of your variables. When reading different data types, always ensure that you're assigning them to the proper type!

```java
Scanner in = new Scanner(System.in);

        int myNum = in.nextInt();
        double myDouble = in.nextDouble();
        byte myByte = in.nextByte();
        int wrong = in.nextDouble(); // error
```

### Reading Multiple Values

What if you want to read a first and last name at once, for example?

By passing in multiple different tokens separated by spaces, you can use the `next()` method to assign one token at a time.

This has significant use cases. Two of our favourite are: reading structured files, and reading command line arguments. These topics are advanced, so for now, let's quickly go over a very simple example that represents reading a file.

Let's say you have a file that stores customer info. Each line looks something like this: `John Smith 23 john@email.com`. Each line takes the form `firstName lastName age email`. You can read this information in the following way:

```java
import java.util.Scanner;

public class Learn {
    public static void main(String[] args) {
        System.out.println("Enter your first name, last name, age, and email: ");
        Scanner in = new Scanner(System.in);

        String fName = in.next();
        String lName = in.next();
        int age = in.nextInt();
        String email = in.next();

        System.out.printf("Your line was: %s %s %d %s", fName,lName, age, email);
    }
}
```

```
Enter your first name, last name, age, and email:
John Smith 23 john@email.com
Your line was: John Smith 23 john@email.com
```

Note that we didn't actually read a file, we just entered the information seperated by spaces. File-reading is a bit more advanced, and there are other things that you should learn first.

This example just illustrated how you can read multiple pieces of information at once.
