---
sidebar_position: 5
---

# Scanner

In previous lessons, we used `Scanner` to read user input in the console. This is very useful for learning and testing, but `Scanner` is capable of much more!

## Use Scanner to read a file

The `Scanner` class provides an easy way to work with files. More advanced Java programmers will know that it isn't always the right option for working with files (e.g. it's not suitable for reading byte streams, like images), but it's great for learning.

```java
// Java provides great libraries to help us with File I/O
// No need to build a file reader from scratch!
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class FileReader {
    public static void main(String[] args) {
        // Create a File object for the file to be read
        File file = new File("example.txt");

        try {
            // Create a Scanner object to read from the file
            Scanner scanner = new Scanner(file);

            // Read each line from the file and print it to the console
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                System.out.println(line);
            }

            // Close the scanner
            scanner.close();
        } catch (FileNotFoundException e) {
            System.out.println("File not found.");
        }
    }
}
```

This assumes that `example.txt` is in the **same directory** as your `Main` method file.

In this example, we first create a File object that represents the file we want to read. Then, we create a `Scanner` object to read from the file. We use a while loop to read each line from the file, checking that there is another line using the `hasNextLine()` method and then reading the line using the `nextLine()` method. Finally, we close the scanner to release the resources it used.

Note that we wrap the code that reads from the file in a try-catch block to catch the `FileNotFoundException` that might be thrown if the file is not found. We also close the scanner in a finally block to ensure that the resources are released even if an exception occurs.

## When should we use Scanner to read files?

Scanner is great for:

- basic use cases
- small text files
- structured text files

Suppose we have a file with the following content:

```text title=students.txt
John Doe,22,Computer Science
Jane Smith,20,Mathematics
```

We want to read this file, create a `Student` object for each line in the file, and store them in an `ArrayList`.

Here's the code to do that:

```java title=FileReader.java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class FileReader {
    public static void main(String[] args) {
        // Create a File object for the file to be read
        File file = new File("students.txt");

        ArrayList<Student> students = new ArrayList<>();

        try {
            // Create a Scanner object to read from the file
            Scanner scanner = new Scanner(file);

            // Read each line from the file and create a Student object
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                String[] parts = line.split(",");
                String name = parts[0];
                int age = Integer.parseInt(parts[1]);
                String major = parts[2];

                Student student = new Student(name, age, major);
                students.add(student);
            }

            // Close the scanner
            scanner.close();
        } catch (FileNotFoundException e) {
            System.out.println("File not found.");
        }

        // Print the list of students
        for (Student student : students) {
            System.out.println(student.getName() + " " + student.getAge() + " " + student.getMajor());
        }
    }
}
```

In this example, we first create a `File` object that represents the file we want to read. Then, we create an ArrayList of Student objects to store the data from the file. We use a while loop to read each line from the file, checking that there is another line using the `hasNextLine()` method and then reading the line using the `nextLine()` method. We split the line using the `split()` method and assign the values to variables. Finally, we create a `Student` object using these variables and add it to the `ArrayList`.

Note that we wrap the code that reads from the file in a try-catch block to catch the `FileNotFoundException` that might be thrown if the file is not found. We also close the scanner in a finally block to ensure that the resources are released even if an exception occurs. After reading the file and creating the objects, we simply loop through the ArrayList and print the values to the console.

## What's next?
