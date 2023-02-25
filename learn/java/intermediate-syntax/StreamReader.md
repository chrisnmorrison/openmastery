---
sidebar_position: 7
---

# InputStreamReader and OutputStreamReader

Suppose we have a file called example.txt with the following content:

```text title=example.txt
Hello, World!
```

We want to read this file using `InputStreamReader` and write the content to a new file called `output.txt` using `OutputStreamReader`. Here's the code to do that:

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class CharacterStreamExample {
    public static void main(String[] args) {
        try {
             FileInputStream inputStream = new FileInputStream("example.txt");
             InputStreamReader reader = new InputStreamReader(inputStream);
             FileOutputStream outputStream = new FileOutputStream("output.txt");
             OutputStreamWriter writer = new OutputStreamWriter(outputStream)

            // Read the data from the file using InputStreamReader
            StringBuilder data = new StringBuilder();
            int c;
            while ((c = reader.read()) != -1) {
                data.append((char) c);
            }

            // Write the data to the output file using OutputStreamWriter
            String output = data.toString();
            writer.write(output);

            System.out.println("Data has been written to output.txt.");

        } catch (IOException e) {
            System.out.println("An error occurred while reading or writing the file.");
            e.printStackTrace();
        }
    }
}
```

We use a `StringBuilder` to store the data read from the file. We read the data from the file using the `read()` method of the input stream reader in a loop, and append each character to the `StringBuilder` until the end of the stream is reached.

Finally, we convert the `StringBuilder` to a String using the `toString()` method and write it to the output file using the `write()` method of the output stream writer.

Note that we catch the `IOException` that might be thrown if there is an error while reading or writing the file and print the stack trace to help us debug the problem.

## This is a lot of code. Is there an easier way?

:::info java.io
We went over `InputStreamReader` and `InputStreamWriter`, but there are other libraries as well! We'll cover a new library in the next lesson.

Keep in mind, there are several libraries that do very similar, almost identical things. Not all situations will have a "best" option, so when choosing which library to use, choose one you know and are comfortable with.
:::

To answer the above question, yes, you can use the `Files` utility class from the Java NIO (New Input/Output) package to read and write file contents with less code.

However, note that it requires a **minimum version of Java 11**. If you're working with an earlier version of Java, you'll need to use the traditional I/O classes we discussed earlier.

Here's an example of how to read a file and write its content to another file using `Files`:

```java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class FilesExample {
    public static void main(String[] args) {
        try {
            Path sourcePath = Paths.get("example.txt");
            Path targetPath = Paths.get("output.txt");

            // Read the content of the source file
            String content = Files.readString(sourcePath);

            // Write the content to the target file
            Files.writeString(targetPath, content);

            System.out.println("Data has been written to output.txt.");

        } catch (IOException e) {
            System.out.println("An error occurred while reading or writing the file.");
            e.printStackTrace();
        }
    }
}
```

In this example, we use the `Paths.get()` method to create `Path` objects for the source and target files. We then use the `Files.readString()` method to read the content of the source file into a `String` variable, and the `Files.writeString()` method to write the content to the target file.

Note that we catch the IOException that might be thrown if there is an error while reading or writing the file and print the stack trace to help us debug the problem.

Using the Files class can simplify file I/O operations and reduce the amount of code you need to write. However, note that it requires a minimum version of Java 11. If you're working with an earlier version of Java, you'll need to use the traditional I/O classes we discussed earlier.

## What's next?
