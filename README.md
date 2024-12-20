## Problem Statement
1. The growing volume of waste in modern societies poses serious environmental and
economic challenges. Efficient waste management is essential to mitigate these impacts, and waste sorting—categorizing waste for proper disposal or recycling—is
a critical component. However, many communities face difficulties with effective
waste sorting due to insufficient awareness, inadequate infrastructure, and complex
sorting procedures.
2. The challenges brought by increasing waste are particularly significant in our college,
GCIT. The high volume of waste generated by students has made proper waste
management a pressing issue.
3. Recognizing the need for a sustainable solution, we are going to develop a waste
sorting assistant system. This initiative aims to streamline waste management

## Aims
To enhance waste sorting accuracy and efficiency by integrating the assistant with
current waste management systems, reducing contamination, and boosting recycling
rates

## Objectives
1. To design and implement a computer vision algorithm capable of identifying and
classifying various waste materials, including plastics, metals, paper, and organic
waste, with high accuracy.
2. To develop a user-friendly interface for the waste sorting assistant that provides
clear instructions, ensuring ease of use and effective interaction with the system.

## System Overview

![image](https://github.com/user-attachments/assets/1cc6d114-9e2d-4665-afb7-be34c951c457)

## Dataset
For this project, we are utilizing an existing dataset sourced from Kaggle. The dataset
was initially organized into four distinct classes: Hazardous, Non-Recyclable, Organic,
and Recyclable. However, for the purposes of our project, we have reclassified the dataset
into two broader categories: Recyclable and Non-Recyclable.
The dataset is structured as follows:
• Recyclable: This class includes images of waste materials that can be recycled,
such as plastics, metals, and paper.
• Non-Recyclable: This class includes images of waste materials that cannot be
recycled, such as certain types of plastics, contaminated items, and hazardous materials.
After reclassification, the dataset now consists of:
• Class Non-Recyclable: 1,580 images
• Class Recyclable: 1,312 images
• Total Images: 2,892 images
The dataset is organized in a standard folder structure where each class has its own
directory containing the respective images. Each image is labeled according to the class
it belongs to.

## Result and Discussions

#### Training and Validation Accuracy

![WhatsApp Image 2024-10-29 at 13 17 58_e4d05832](https://github.com/user-attachments/assets/8540638c-cddc-4c3b-9268-29dd21ed6ef6)

#### Training and Validation Loss
![WhatsApp Image 2024-10-29 at 13 18 14_d12a187a](https://github.com/user-attachments/assets/e05bc045-fed1-414b-bf07-7f54899ecab8)

## Evaluation Metrics
#### Confusion Matrix
![WhatsApp Image 2024-10-29 at 13 18 38_375e83a3](https://github.com/user-attachments/assets/459b2514-e723-4d34-bcf4-52a71a2a8b4e)

#### Classification Report
![WhatsApp Image 2024-10-29 at 13 18 53_6613e057](https://github.com/user-attachments/assets/cfd82512-422c-4bf6-8eef-7b4520d76549)


## Future Recommendations
Model Optimization: Further tuning of the model’s hyperparameters or exploring advanced architectures (e.g., ResNet, EfficientNet) could help improve precision and recall,
particularly in distinguishing more challenging items.
Augmented Dataset: Incorporating a more diverse and larger dataset, possibly including
real-world images of waste in various environments, could help the model generalize better
to different waste types.
Integration with Other Sensors: Combining image-based classification with other data
sources (e.g., sensors for material composition) could further improve accuracy and reliability.
Deployment: Future studies should focus on real-world deployment in waste management
systems, assessing the model’s performance in dynamic and noisy environments, which
would contribute to sustainability efforts by enhancing recycling processes

## Deployed Link
https://waste-sorting.onrender.com/

