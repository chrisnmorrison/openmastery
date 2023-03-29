---
sidebar_position: 6
---

# I/O Streams

Java provides two types of streams for I/O operations - byte stream and character stream. Both types of streams are used for reading and writing data to and from various sources, but they differ in how they handle the data. In this article, we will discuss the differences between byte stream and character stream in Java.

## Byte Stream

Byte stream is a stream of raw bytes. It is used for reading and writing binary data, such as image files, audio files, and executable files. The input and output operations in byte stream are performed using the InputStream and OutputStream classes, respectively.

InputStream reads a byte of data from the input source and returns an integer value that represents the byte. The output operations are performed using the OutputStream class, which writes the data byte by byte to the output source. These streams are used to handle raw data that doesn't need any conversion or formatting.

## Character Stream

Character stream is a stream of Unicode characters. It is used for reading and writing text data. The input and output operations in the character stream are performed using the Reader and Writer classes, respectively.

Reader reads a character of data from the input source and returns an integer value that represents the character. The output operations are performed using the Writer class, which writes the data character by character to the output source. These streams are used to handle text data that requires encoding and decoding.

## Differences between Byte Stream and Character Stream

### Data type

Byte stream works with raw binary data, whereas character stream works with Unicode characters. Byte stream is used for reading and writing binary data like image files, audio files, and executable files. Character stream, on the other hand, is used for reading and writing text data.

### Encoding and Decoding

Byte stream does not perform any encoding or decoding of data. The data is read and written as it is, byte by byte. Character stream performs encoding and decoding of data as it reads and writes characters. It converts the character data to byte data for storage and then back to character data when reading.

### Handling Special Characters

Byte stream cannot handle special characters like the new line character ( `\n`, carriage return character, and other special characters that are used in text data. Character stream can handle special characters, as it converts the character data to byte data and then back to character data.

### Performance

Byte stream is faster than character stream because it does not perform any encoding or decoding of data. The data is read and written as it is, byte by byte. Character stream, on the other hand, is slower than byte stream because it has to perform encoding and decoding of data.

## Summary

Both byte stream and character stream have their own advantages and disadvantages. Byte stream is used for handling raw binary data, whereas character stream is used for handling text data. Byte stream is faster than character stream, but character stream can handle special characters and perform encoding and decoding of data. Choosing between byte stream and character stream depends on the type of data you are working with and the requirements of your application.
