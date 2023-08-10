---
sidebar_position: 1.2
sidebar_label: "Contact Book"
---

# Contact Book

As we've mentioned before, the best way to learn is to build something. In this section, we'll be building a contact book application. This application will allow us to store contact information for our friends and family. We'll be able to add new contacts, view existing contacts, and delete contacts we no longer need.

It's a simple application that applies a few concepts: OOP, methods, dictionaries, input, looping, and error handling. Let's get started!

```python
class Contact:
    def __init__(self, name, phone, email):
        self.name = name
        self.phone = phone
        self.email = email

def add_contact(contacts, name, phone, email):
    contact = Contact(name, phone, email)
    contacts[name] = contact
    print(f"Contact '{name}' added successfully.")

def view_contacts(contacts):
    print("Contacts:")
    for name, contact in contacts.items():
        print(f"Name: {contact.name}, Phone: {contact.phone}, Email: {contact.email}")

def search_contact(contacts, name):
    contact = contacts.get(name)
    if contact:
        print(f"Contact found: Name: {contact.name}, Phone: {contact.phone}, Email: {contact.email}")
    else:
        print(f"Contact '{name}' not found.")

def save_contacts_to_file(contacts, filename):
    with open(filename, "w") as file:
        for name, contact in contacts.items():
            file.write(f"{contact.name},{contact.phone},{contact.email}\n")

def load_contacts_from_file(filename):
    contacts = {}
    try:
        with open(filename, "r") as file:
            lines = file.readlines()
            for line in lines:
                name, phone, email = line.strip().split(",")
                contact = Contact(name, phone, email)
                contacts[name] = contact
    except FileNotFoundError:
        pass  # File not found, ignore and return an empty dictionary
    return contacts

class ContactNotFoundError(Exception):
    pass

def search_contact_with_exception(contacts, name):
    contact = contacts.get(name)
    if contact:
        return contact
    else:
        raise ContactNotFoundError(f"Contact '{name}' not found.")

def main():
    filename = "contacts.txt"
    contacts = load_contacts_from_file(filename)

    while True:
        print("\nAddress Book Menu:")
        print("1. Add Contact")
        print("2. View Contacts")
        print("3. Search Contact")
        print("4. Quit")

        choice = input("Enter your choice: ")

        if choice == "1":
            name = input("Enter name: ")
            phone = input("Enter phone number: ")
            email = input("Enter email address: ")
            add_contact(contacts, name, phone, email)
            save_contacts_to_file(contacts, filename)
        elif choice == "2":
            view_contacts(contacts)
        elif choice == "3":
            name = input("Enter name to search: ")
            try:
                contact = search_contact_with_exception(contacts, name)
                print(f"Contact found: Name: {contact.name}, Phone: {contact.phone}, Email: {contact.email}")
            except ContactNotFoundError as e:
                print(e)
        elif choice == "4":
            print("Exiting Address Book.")
            break
        else:
            print("Invalid choice. Please select again.")

if __name__ == "__main__":
    main()

```