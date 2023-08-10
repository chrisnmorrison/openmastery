---
sidebar_position: 1.2
sidebar_label: "Image Manipulation"
---

# Image Manipulation

Yes, it's possible to manipulate images without opening MS Paint or Photoshop!

There's a handy module named Pillow (PIL) that allows you to perform various operations on images. You can install it using pip:

```bash
pip install Pillow
```

Here are a few operations you can use to automate your image editing tasks:

```python
from PIL import Image, ImageFilter

# Opening an image
image_path = "sample.jpg"
image = Image.open(image_path)

# Display basic image information
print("Image Format:", image.format)
print("Image Size:", image.size)
print("Image Mode:", image.mode)

# Display the image
image.show()

# Creating a thumbnail
thumbnail_size = (100, 100)
thumbnail = image.copy()
thumbnail.thumbnail(thumbnail_size)
thumbnail.show()

# Applying a filter (blurring)
blurred_image = image.filter(ImageFilter.GaussianBlur(radius=5))
blurred_image.show()

# Cropping an image
box = (100, 100, 300, 300)  # Left, Upper, Right, Lower
cropped_image = image.crop(box)
cropped_image.show()

# Rotating an image
rotated_image = image.rotate(45)
rotated_image.show()

# Saving the manipulated image
thumbnail.save("thumbnail.jpg")
blurred_image.save("blurred.jpg")
cropped_image.save("cropped.jpg")
rotated_image.save("rotated.jpg")

# Closing the image
image.close()
```

Pillow has a lot of functionality that you can find in their documentation

## Real example: Image Resizer

What if you are photographer, and your camera takes images at a huge scale. Wouldn't it be nice to scale them to a smaller value before putting them on your website? Loading a 500kB image is much easier than >50Mb.

You can use the Pillow and os modules to find all photos in a directory and resize them to a smaller size. In this example, we specified jpg and png, but you could change to any file type you'd like. You can also change the target size to whatever you'd like. This example will resize all images to 1920x1080 pixels.

```python
from PIL import Image
import os

def resize_image(image_path, output_path, size):
    try:
        image = Image.open(image_path)
        resized_image = image.resize(size, Image.ANTIALIAS)
        resized_image.save(output_path)
        print(f"Resized {image_path} and saved to {output_path}")
    except Exception as e:
        print(f"Error resizing {image_path}: {e}")

def process_images(directory, output_directory, size):
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    for filename in os.listdir(directory):
        if filename.lower().endswith(('.jpg', '.png')):
            input_path = os.path.join(directory, filename)
            output_path = os.path.join(output_directory, filename)
            resize_image(input_path, output_path, size)

if __name__ == "__main__":
    input_directory = "images"
    output_directory = "resized_images"
    target_size = (1920, 1080)

    process_images(input_directory, output_directory, target_size)

```