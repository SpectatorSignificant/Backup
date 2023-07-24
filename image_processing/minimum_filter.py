import numpy as np
import cv2
import os

def min_filter(img, kernel_size):
    height, width = img.shape[:2]
    processed_image = np.zeros((height, width), dtype=np.uint8)
    buffer = kernel_size // 2
    for i in range(buffer, height - buffer):
        for j in range(buffer, width - buffer):
    # Extract the pixel values within the kernel
            kernel_values = []
            for m in range(-buffer, buffer + 1):
                for n in range(-buffer, buffer + 1):
                    kernel_values.append(img[i + m, j + n])
            min_value = min(kernel_values)
            processed_image[i, j] = min_value
    return processed_image


files = os.listdir("image_processing/Noisy_Images")

#for filename in files:
#    os.mkdir("./image_processing/processed_images/"+filename[:-4])#image_processing\processed_images

for filename in files:
    img = cv2.imread("./image_processing/Noisy_Images/"+filename, cv2.IMREAD_GRAYSCALE)
    processed_image = min_filter(img, 3)
    cv2.imwrite("./image_processing/processed_images/"+filename[:-4]+"/minimum_filter.png", processed_image)