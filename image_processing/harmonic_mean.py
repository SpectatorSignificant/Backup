import numpy as np
import cv2
import os
def harmonic_mean(image, kernel_size):
    height, width = image.shape[:2]
    filtered_image = np.zeros((height, width), dtype=np.uint8)

    buffer = kernel_size // 2
    for i in range(buffer, height - buffer):
        for j in range(buffer, width - buffer):

            sum_pix= 0
            for m in range(-buffer, buffer + 1):
                for n in range(-buffer, buffer + 1):
                    sum_pix+= 1/(image[i + m, j + n]+1e-8)

            harmonic_mean = int(kernel_size**2/sum_pix)
            filtered_image[i, j] =harmonic_mean

    return filtered_image

files = os.listdir("image_processing/Noisy_Images")

#for filename in files:
#    os.mkdir("./image_processing/processed_images/"+filename[:-4])#image_processing\processed_images

for filename in files:
    img = cv2.imread("./image_processing/Noisy_Images/"+filename, cv2.IMREAD_GRAYSCALE)
    processed_image = harmonic_mean(img, 3)
    cv2.imwrite("./image_processing/processed_images/"+filename[:-4]+"/harmonic_mean.png", processed_image)