---
sidebar_position: 1.2
sidebar_label: "Installing Python"
---

# Installing Python

As a beginner, you probably just want to learn how to code without a huge background course. No problem - Python is an easy language to get started in, and it's easier to learn the finer details once you are able to run your code.

:::info What's the best IDE?
An Integrated Development Environment (IDE) is essentially a text editor software that helps you write and run your code, and contains useful tools when writing code.

For a beginner, there is no "best". Choose any, learn to code, and make an informed decision on your favourite IDE when you're ready.
:::

## Downloading and Installing Python:

To install Python, follow these steps:

1. Visit the official Python website at python.org.
2. Navigate to the Downloads section and select the version of Python appropriate for your operating system (Windows, macOS, or Linux).
3. Click on the download link to start the installation file.
4. Run the installation file and follow the prompts to install Python on your computer.
5. Make sure to check the box to add Python to the system PATH during the installation process. This allows you to run Python from the command line or terminal with ease.

## Verifying the Installation

Once the installation is complete, you can verify that Python is installed correctly by opening a command prompt or terminal and typing `python --version` or `python3 --version` (depending on your system). This command will display the installed Python version, confirming that the installation was successful.

## Installing Visual Studio Code and Python Extension

:::info Why Visual Studio Code?
VS Code is the most popular IDE out there (as of 2023), and allows you to write code in almost any language with the help of extrnsive features and plugins. We recommend you start with it.

Why? It's popular, it's easy, and you'll likely be programming in other languages in addition to Python. VS Code is in our opinion the best "jack of all trades" IDE, and it's very easy to get started with.
:::

To begin, you will need to install Visual Studio Code on your operating system. Visit the official Visual Studio Code website (https://code.visualstudio.com/) and follow the instructions to download and install the editor. Once installed, open Visual Studio Code and navigate to the Extensions tab. Search for the "Python" extension by Microsoft and click on the "Install" button to add Python support to your editor.

## Configuring Python Interpreter

After installing the Python extension, it's important to configure the Python interpreter in Visual Studio Code. This step ensures that the editor recognizes and uses the correct Python environment for your projects. To configure the interpreter, open the Command Palette (View -> Command Palette or press Ctrl+Shift+P), type "Python: Select Interpreter," and choose the desired Python interpreter from the list. You can select a system-wide installation, a virtual environment, or a conda environment depending on your requirements.

## Creating a Python Project

In Visual Studio Code, creating a Python project helps you organize your code and manage dependencies effectively. To create a new project, create a new folder on your computer and open it in Visual Studio Code. Use the File menu to create new Python files within the project folder, or simply drag and drop existing Python files into the editor. Organize your files into folders to maintain a clean project structure.

## Running Python Scripts

Visual Studio Code provides multiple ways to run Python scripts. You can use the built-in integrated terminal to execute Python commands or scripts directly. Alternatively, you can use the Run and Debug functionality to run your scripts. To run a script, open the script file in the editor, right-click, and choose "Run Python File in Terminal" or use the corresponding keyboard shortcut (Ctrl+Shift+F10). You can also configure launch configurations for more advanced debugging and execution options.

## Debugging Python Code

Visual Studio Code offers powerful debugging capabilities for Python code. To start debugging, set breakpoints in your code by clicking in the gutter area next to the line numbers. Use the "Start Debugging" button in the Debug view or press F5 to launch the debugger. You can step through your code, inspect variables, and view the call stack. Utilize the debugging toolbar and the Debug Console for an interactive debugging experience.
