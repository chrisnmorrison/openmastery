---
sidebar_position: 7
---

# I'm ready to build real things. Where do I start?

If you feel comfortable enough to try building something real, congratulations!

There are many different things you can build with Java, and the tools you use will depend on your goal.

## Web Applications

Websites with back-end servers are typically called web applications, as they are applications accessed through a web browser. For example, Facebook, Google Docs, and Gmail are web applications. Their content is **dynamically** generated. Open Mastery would not be considered a web application since we are a **statically** generated website! There are no servers dynamically generating content. We'd just be called a website.

Java EE and Spring are two popular frameworks for developing enterprise-level Java web applications. While they share many similarities, there are also some key differences between the two.

Java EE (Enterprise Edition) is a platform that provides a set of APIs and services for developing enterprise-level applications. It includes a wide range of features, including security, transaction management, messaging, and web services. Java EE is an open-source standard developed by the Java Community Process (JCP), which is a collaborative effort of developers, vendors, and other stakeholders in the Java ecosystem.

Spring is a lightweight, open-source framework that provides a wide range of features for developing Java applications. It was initially developed to simplify Java EE development, but it has since evolved into a standalone framework with a strong focus on dependency injection and inversion of control.

Here are some key differences between Java EE and Spring:

- Architecture: Java EE is a more traditional architecture that includes multiple layers, such as presentation, business, and persistence. Spring, on the other hand, uses a simpler, more flexible architecture that is based on the Model-View-Controller (MVC) pattern.
- Configuration: Java EE requires a lot of configuration, both in XML files and through annotations. Spring, on the other hand, uses a more concise and flexible configuration approach, with most configuration done through Java code.
- Dependencies: Java EE has a large number of dependencies and is a complex platform, which can make it more difficult to work with. Spring, on the other hand, has a smaller set of dependencies and is designed to be more lightweight and flexible.
- Development Environment: Java EE requires a full application server, such as Apache Tomcat or JBoss, to run, which can be resource-intensive and slow down development. Spring, on the other hand, can be run on a standalone server or embedded in a web application, which can make development faster and more efficient.
- Community: Both Java EE and Spring have active and supportive communities, but Spring has a larger and more active community with more resources, documentation, and third-party libraries available.

The choice between the two largely depends on your specific needs and preferences. If you need a traditional architecture with a wide range of features, Java EE might be the better choice. If you prefer a more lightweight, flexible, and developer-friendly approach, Spring might be the better choice.

## Android Apps

Java is widely used for mobile application development, particularly for Android mobile devices.

Android mobile applications are developed using Java in conjunction with the Android Software Development Kit (SDK). The Android SDK provides a set of tools and APIs for building Android applications using Java. These tools include an emulator for testing your application on various devices, and a graphical user interface builder for designing your application's user interface.

The Android SDK also provides support for other programming languages such as Kotlin and C++, but Java remains the most widely used language for Android application development.

With Java and the Android SDK, you can create mobile applications that run on a wide range of devices, from smartphones to tablets to wearable devices.

## Desktop Applications

Java has always been popular when it comes to building desktop applications. Although desktop applications are now less favourable to web applications, you can still build a lot of cool desktop apps with Java.

Java Swing and JavaFX are both Java user interface (UI) frameworks used for building desktop applications. They both provide components for creating graphical user interfaces (GUIs), such as buttons, labels, text fields, and more. However, there are some key differences between the two frameworks.

Java Swing is an older UI framework that has been around since the late 1990s. It provides a set of components that are built on top of the Abstract Window Toolkit (AWT), which is the underlying windowing toolkit for Java. Swing applications can be developed using a combination of Java code and XML files, and can be run on any platform that supports Java.

JavaFX is a newer UI framework that was introduced in Java 8 as a replacement for Java Swing. It is a more modern framework that provides a more rich and immersive user experience than Swing. JavaFX uses a scene graph, which is a hierarchical tree structure that defines the layout of the UI components. JavaFX supports a range of media types, including video and audio, and provides support for advanced 2D and 3D graphics.

Here are some of the key differences between Java Swing and JavaFX:

- Look and feel: JavaFX provides a more modern and visually appealing look and feel than Swing.
- Graphics: JavaFX provides more advanced 2D and 3D graphics capabilities than Swing.
- Layout: JavaFX uses a scene graph for layout, while Swing uses a layout manager.
- Animation: JavaFX provides more advanced animation capabilities than Swing.
- Integration with web technologies: JavaFX provides better integration with web technologies such as HTML, CSS, and JavaScript.

If you are starting a new project, it is recommended to use JavaFX, but if you are working with an existing project that uses Swing, it may be more practical to stick with Swing.

## Internet of Things

IoT (Internet of Things) programming in Java involves connecting devices to the internet and enabling them to communicate with each other. Here are some steps to get started with IoT programming in Java:

1. Choose a platform: There are many platforms available for IoT development in Java, including Raspberry Pi, Arduino, and BeagleBone. Choose a platform that suits your project requirements.
2. Install Java: Install the latest version of Java on your IoT device. You can download the Java Development Kit (JDK) from the Oracle website.
3. Choose an IoT protocol: Choose a protocol for your IoT project, such as MQTT, CoAP, or HTTP. MQTT is a popular messaging protocol for IoT devices.
4. Install an IoT library: Install an IoT library for your chosen protocol. There are many open-source libraries available for MQTT, such as Eclipse Paho.
5. Write your program: Write your program in Java using the IoT library. Your program should include code for connecting to the IoT network, sending and receiving messages, and processing data.
6. Test your program: Test your program on your IoT device to ensure that it is working as expected. You can use tools such as Wireshark to monitor network traffic and debug any issues.
7. Deploy your program: Once you have tested your program, deploy it to your IoT device and monitor its performance. You may need to make adjustments to optimize the performance of your program.

IoT programming in Java can be challenging, but there are many resources available to help you get started, including online tutorials, forums, and open-source libraries.

## So much more!

Java is a robust language with many uses. Nowadays, it's primarily used for web and mobile applications, but you'll also see Java used for:

- games (Minecraft runs on Java!)
- networking
- chatbots
- machine learning

##
