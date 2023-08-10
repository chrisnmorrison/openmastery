---
sidebar_position: 1.1
sidebar_label: "Custom String Functions"
---

# Custom String Functions

You will likely create string functions at some point in your Python journey. This will help create a reusable set of instructions that can be used to manipulate strings, collect stats on strings (e.g. character count), and so on.

## Example: Custom String Functions

```python
# Function to count the number of characters in a string
def count_characters(text):
    return len(text)

# Function to reverse a string
def reverse_string(text):
    return text[::-1]

# Function to check if a string is a palindrome
def is_palindrome(text):
    cleaned_text = text.lower().replace(" ", "")
    return cleaned_text == cleaned_text[::-1]

# Function to capitalize the first letter of each word in a sentence
def capitalize_words(sentence):
    words = sentence.split()
    capitalized_words = [word.capitalize() for word in words]
    return " ".join(capitalized_words)

# Function to remove vowels from a string
def remove_vowels(text):
    vowels = "aeiouAEIOU"
    return "".join([char for char in text if char not in vowels])

# Using the defined functions
text = "Hello, World!"
print(f"Number of characters in '{text}': {count_characters(text)}")

reversed_text = reverse_string(text)
print(f"Reversed string: '{reversed_text}'")

palindrome_text = "radar"
print(f"'{palindrome_text}' is a palindrome: {is_palindrome(palindrome_text)}")

sentence = "welcome to the world of programming"
capitalized_sentence = capitalize_words(sentence)
print(f"Capitalized sentence: '{capitalized_sentence}'")

text_with_vowels = "Python is awesome"
text_without_vowels = remove_vowels(text_with_vowels)
print(f"Text without vowels: '{text_without_vowels}'")
```

The sky is the limit! Here are several more advanced functions. Try to read through them, understand what they are doing. For practice, try to write your own functions that do the same thing. Remember, your implementation might be different, but the end result should be the same.

```python
# Function to find the most common character in a string
def most_common_character(text):
    char_count = {}
    for char in text:
        if char.isalpha():
            char = char.lower()
            char_count[char] = char_count.get(char, 0) + 1
    if not char_count:
        return None
    return max(char_count, key=char_count.get)

# Function to count occurrences of a substring in a string
def count_substring_occurrences(text, substring):
    count = 0
    start = 0
    while start < len(text):
        pos = text.find(substring, start)
        if pos != -1:
            count += 1
            start = pos + 1
        else:
            break
    return count

# Function to generate an acronym from a phrase
def generate_acronym(phrase):
    words = phrase.split()
    acronym = "".join([word[0].upper() for word in words])
    return acronym

# Function to replace a substring with another substring
def replace_substring(text, old_substring, new_substring):
    return text.replace(old_substring, new_substring)

    # Function to split a camel-cased string into words
def split_camel_case(text):
    words = []
    current_word = ""
    for char in text:
        if char.isupper():
            if current_word:
                words.append(current_word)
            current_word = char
        else:
            current_word += char
    if current_word:
        words.append(current_word)
    return " ".join(words)

# Function to find the longest common prefix among an array of strings
def longest_common_prefix(strings):
    if not strings:
        return ""
    prefix = strings[0]
    for string in strings[1:]:
        while string.find(prefix) != 0:
            prefix = prefix[:-1]
            if not prefix:
                return ""
    return prefix

# Using the defined functions
text = "Python programming is both fun and powerful"
print(f"Most common character: '{most_common_character(text)}'")

substring = "is"
print(f"Number of occurrences of '{substring}': {count_substring_occurrences(text, substring)}")

phrase = "artificial intelligence"
acronym = generate_acronym(phrase)
print(f"Acronym for '{phrase}': {acronym}")

original_text = "Python is great for scripting"
new_text = replace_substring(original_text, "great", "excellent")
print(f"Replaced text: '{new_text}'")

# we previously used the variable name 'text', so let's use something else to avoid unexpected behaviour
my_text = "babad"
print(f"Longest palindrome substring in '{my_text}': '{longest_palindrome_substring(my_text)}'")

camel_case = "camelCaseIdentifier"
words = split_camel_case(camel_case)
print(f"Words in camel case '{camel_case}': {words}")

string_list = ["flower", "flow", "flight"]
common_prefix = longest_common_prefix(string_list)
print(f"Longest common prefix: '{common_prefix}'")

```

## Challenge

What else can you do with strings? Try to come up with your own ideas and implement them. Here are some ideas to get you started:
- Write a function to check if a string is a pangram (i.e. contains all letters of the alphabet)
- Write a function to check if a string is a valid email address, with regex
- Write a function to check if a string is a valid phone number. As an added challenge, don't use the regex library
- Write a function to check if a string is a valid password (e.g. contains at least one uppercase letter, one lowercase letter, one number, and one special character)