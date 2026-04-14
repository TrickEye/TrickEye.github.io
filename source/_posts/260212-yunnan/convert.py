from PIL import Image
import os

input_dir = "."
output_dir = "output"

os.makedirs(output_dir, exist_ok=True)

for file in os.listdir(input_dir):
    if file.lower().endswith(".jpg"):
        img = Image.open(os.path.join(input_dir, file))
        img.save(
            os.path.join(output_dir, file),
            "JPEG",
            quality=85,
            optimize=True,
            progressive=True
        )