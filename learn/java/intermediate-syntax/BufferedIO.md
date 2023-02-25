---
sidebar_position: 8
---

# BufferedReader and BufferedWriter

The `BufferedReader` and `BufferedWriter` classes are part of the Java I/O (Input/Output) API, which provides a standard way to read and write data in Java. The Java I/O API consists of many classes that can be used to read and write data in different formats, including bytes, characters, and objects. The `BufferedReader` and `BufferedWriter` classes are specifically designed for reading and writing characters efficiently, by buffering the data in memory.

:::info Why another I/O class?
The code for these classes are a bit more verbose, so why use them? These classes are suitable when reading large amounts of data, and will reduce the number of I/O operations performed. 

For simplier file reads, such as reading small text files, the basic I/O classes discussed in previous tutorials are often more than suitable.
:::

## BufferedReader

The `BufferedReader` class is used to read characters from a file efficiently, by buffering the data in memory. It is a subclass of the Reader class and provides additional methods for reading lines of text, instead of individual characters. The `BufferedReader` class is commonly used in Java applications to read large text files, as it reduces the number of system calls required to read data from the file, and can significantly improve performance.

## Reading from a File

To read from a file using `BufferedReader`, we first need to create an instance of the `BufferedReader` class, and pass an instance of a `Reader` class that is connected to the input source (e.g., a file) as an argument. We can use the FileReader class to create a Reader instance that is connected to a file, as shown in the example below:


```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BufferedReaderExample {
    public static void main(String[] args) {
        try {
            FileReader fileReader = new FileReader("example.txt");
            BufferedReader bufferedReader = new BufferedReader(fileReader)

            String line;
            while ((line = bufferedReader.readLine()) != null) {
                System.out.println(line);
            }

        } catch (IOException e) {
            System.out.println("An error occurred while reading the file.");
            e.printStackTrace();
        }
    }
}
```

In this example, we create a FileReader instance that is connected to the file "example.txt", and pass it to the constructor of the BufferedReader class. We then use the readLine() method of the BufferedReader class to read each line of text from the file, and print it to the console.

Note that we wrap the FileReader and BufferedReader instances in a try-with-resources block, to ensure that the resources are closed automatically after use.

The BufferedReader class is not designed for writing to a file. Instead, we can use the BufferedWriter class for writing characters to a file efficiently.

## BufferedWriter

BufferedWriter is used to write characters to a file or output stream with better performance than the other alternatives.

BufferedWriter in Java is a character stream class that is used to handle the writing of characters to an output stream or file. It's part of the java.io package and is used to improve the performance of writing to a file or output stream.

When writing data to a file using BufferedWriter, it writes the data to a buffer first, and then the buffer is flushed to the output stream or file. This allows BufferedWriter to write data more efficiently by reducing the number of writes that are made to the output stream or file.

Here's an example of how to use BufferedWriter to write data to a file:

```java
import java.io.*;

public class BufferedWriterExample {

   public static void main(String[] args) {
      try {
         BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"));
         writer.write("Hello, world!");
         writer.newLine();
         writer.write("This is an example of using BufferedWriter.");
         writer.close();
      } catch (IOException e) {
         e.printStackTrace();
      }
   }
}
```

In this example, we create an instance of `BufferedWriter` using the `FileWriter` constructor to specify the output file. We then write the string "Hello, world!" to the file using the `write()` method, followed by a new line using the `newLine()` method. Finally, we close the writer using the `close()` method.

One important thing to note about `BufferedWriter` is that it needs to be closed using the `close()` method after writing to the file. This is important because it flushes any remaining data from the buffer to the file, and ensures that the file is closed properly.

## Summary

`BufferedReader` and `BufferedWriter` are two classes in Java that are commonly used to handle input and output operations. Both classes are part of the `java.io` package and provide improved performance when reading from or writing to a file or stream.

`BufferedReader` is a character stream class that reads text from a character-input stream with buffering to provide efficient reading of characters, while `BufferedWriter` is a character stream class that writes text to a character-output stream with buffering to provide efficient writing of characters. Both classes can be used to improve the performance of reading and writing large amounts of data to and from files or streams, making them essential tools for Java developers.

The use of `BufferedReader` and `BufferedWriter` can significantly improve the efficiency of handling input and output operations in Java. By reducing the number of reads and writes made to a file or stream, developers can achieve better performance and optimize their application's efficiency. Thus, these classes are essential for developers who need to handle large amounts of data efficiently.

## What's next?
