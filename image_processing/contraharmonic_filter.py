import numpy as np
import cv2
import os

def contraharmonic_mean(img, kernel_size):
    height, width = img.shape[:2]
    processed_image = np.zeros((height, width), dtype=np.uint8)
    buffer = kernel_size // 2
    q=2
    for i in range(buffer, height - buffer):
        for j in range(buffer, width - buffer):
            sum_pix= 0
            for m in range(-buffer, buffer + 1):
                for n in range(-buffer, buffer + 1):
                    sum_pix+= img[i + m, j + n]
            contraharmonic_mean=(sum_pix**(q+1))/(sum_pix**q)
            processed_image[i, j] = contraharmonic_mean
    return processed_image

files = os.listdir("image_processing/Noisy_Images")

#for filename in files:
#    os.mkdir("./image_processing/processed_images/"+filename[:-4])#image_processing\processed_images

for filename in files:
    img = cv2.imread("./image_processing/Noisy_Images/"+filename, cv2.IMREAD_GRAYSCALE)
    processed_image = contraharmonic_mean(img, 3)
    cv2.imwrite("./image_processing/processed_images/"+filename[:-4]+"/contraharmonic_mean.png", processed_image)