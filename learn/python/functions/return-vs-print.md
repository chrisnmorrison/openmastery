---
sidebar_position: 1.6
sidebar_label: "Return vs Print"
---

# Return vs Print

In Python, the return statement is used to exit a function and return a value. The print() function is used to display output to the console. While they may seem similar, they are not interchangeable. Let's look at an example:

```python
def add(a, b):
    print(a + b)
```

This function takes two numbers as arguments and prints their sum. If you call the function, it will print the result to the console:

```python
add(2, 3)  # Output: 5
```

However, if you try to use the result of the function in another expression, you'll find that it doesn't work:

```python
result = add(2, 3)
print(result)  # Output: None
```

This is because the function does not return a value. It simply prints the result to the console. If you want to use the result in another expression, you need to use the return statement:

```python
def add(a, b):
    return a + b

result = add(2, 3)
print(result)  # Output: 5
```

Now the function returns the result instead of printing it. This allows you to use the result in other expressions.

Remember that printing is simply that - printing. It prints a value to the console. Returning a value from a function allows you to save that value in a variable, pass the value to new functions, or use that value in other expressions.

Let's look at a longer example:

```python
def calculate_discounted_price(original_price, discount_percentage):
    if discount_percentage < 0 or discount_percentage > 100:
        return "Invalid discount percentage"
    
    discount_amount = original_price * (discount_percentage / 100)
    discounted_price = original_price - discount_amount
    
    return discounted_price

def display_product_info(product_name, original_price, discount_percentage):
    # calling this function gives us the discounted price, and stores it in a variable
    discounted_price = calculate_discounted_price(original_price, discount_percentage)
    
    if type(discounted_price) == str:
        print("Error:", discounted_price)
    else:
        print("Product:", product_name)
        print("Original Price:", original_price)
        print("Discount Percentage:", discount_percentage, "%")
        print("Discounted Price:", discounted_price)

product_name = "Example Product"
original_price = 100
discount_percentage = 20

display_product_info(product_name, original_price, discount_percentage)
```

In this example, there are two functions: `calculate_discounted_price` and `display_product_info`.

The `calculate_discounted_price` function takes two arguments: `original_price` and `discount_percentage`. It first checks if the discount percentage is within a valid range. If it's not valid, the function returns an error message using the `return` statement. Otherwise, it calculates the discounted price, subtracts the discount amount from the original price, and returns the discounted price.

The `display_product_info` function takes the product's name, original price, and discount percentage as arguments. It then calls the `calculate_discounted_price` function to get the discounted price. If the returned value is a string (indicating an error), it displays the error message. Otherwise, it displays the product information, original price, discount percentage, and discounted price.

When you run this code, you'll get output similar to:

```python
Product: Example Product
Original Price: 100
Discount Percentage: 20 %
Discounted Price: 80.0
```