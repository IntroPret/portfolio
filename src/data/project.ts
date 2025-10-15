export const allProjects = [
    {
        id: 1,
        title: 'Glamulus | Smart Glass',
        description: 'A wearable prototype integrating smart glass hardware with IoT and software features. Built to enhance user experience with responsive UI and real-time data feedback.',
        imageUrl: '/glamulus-glass-prototype.jpg',
        tags: ['Azure', 'Ultralytics', 'Hardware Prototype', 'Next.js', 'Embedded Systems'],
        overview: 'Glamulus is a pair of intelligent glasses built to empower the deaf and hard-of-hearing community through seamless communication. Equipped with an ESP32 microcontroller, microphone, OV2640 camera, and OLED display, these glasses convert spoken language into real-time subtitles directly in the wearer’s view. Beyond transcription, Glamulus also enables live translation between foreign languages and Bahasa Indonesia, and supports both SIBI and BISINDO sign language recognition to foster inclusive, two-way conversations. All interactions are synced to a smart dashboard, developed with Next.js, Python, Ultralytics, and Azure services, where conversations are automatically organized into accessible notes using Azure OpenAI. By merging IoT hardware with AI-driven software, Glamulus offers a new level of independence and confidence for individuals with hearing impairments.',
        features: [
          'ESP32-CAM integration for image capture',
          'Real-time object detection using YOLOv8 model',
          'Azure Function for serverless AI inference',
          'Live data visualization via Next.js web interface',
          'OLED user feedback display through SSD1306 module'
        ],
        techStack: ['ESP32-CAM', 'Azure IoT Hub', 'Next.js', 'YOLOv8', 'Node.js', 'SSD1306 OLED'],
        challenges: [
          'Optimizing image processing on low-power IoT hardware',
          'Establishing reliable communication between the ESP32 and Azure cloud',
          'Balancing latency and inference accuracy in real-time object detection'
        ],
        learnings: [
          'Deepened understanding of hardware–software integration',
          'Improved skills in serverless cloud functions and IoT message routing',
          'Gained experience in deploying ML models for edge devices'
        ],
        repoUrl: 'https://github.com/IntroPret/glamulus',
      },
      {
        id: 2,
        title: 'FactGazer | AI Fake News Detection',
        description: 'A fact-checking web app powered by machine learning to detect and flag potential fake news. Built with a custom stacking model for high accuracy and deployed on a web interface.',
        imageUrl: '/factgazer.jpg',
        tags: ['Python', 'Machine Learning', 'Flask', 'HTML/CSS/JS'],
        overview: 'FactGazer is a machine learning–driven web application created to identify and flag misleading or potentially fake news. It analyzes text content using a custom stacking model that combines multiple classifiers to deliver highly accurate predictions. Users can submit articles through an interactive web interface and instantly view the system’s confidence score along with supporting insights. The project integrates data preprocessing, model evaluation, and user-facing visualization in one streamlined workflow. Built with Python, Flask, and Scikit-learn, FactGazer demonstrates how machine learning can support media literacy by helping people critically evaluate the credibility of online information.',
        features: [
          'Stacking model combining Naive Bayes, Logistic Regression, and Random Forest',
          'Interactive web interface for user-submitted news articles',
          'Confidence score visualization',
          'Dataset preprocessing and model evaluation tools'
        ],
        techStack: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'HTML/CSS/JS'],
        challenges: [
          'Managing data imbalance between fake and real news samples',
          'Improving accuracy through ensemble methods',
          'Designing a lightweight, user-friendly interface'
        ],
        learnings: [
          'Understanding ensemble learning techniques for NLP',
          'Building a complete ML workflow from data to deployment',
          'Applying model evaluation and interpretability in practice'
        ],
        repoUrl: 'https://github.com/IntroPret/FakeNewsDetection',
      },
      {
        id: 3,
        title: 'AiSee | IoT Smart Classroom System',
        description: 'An IoT + AI camera prototype that detects cheating behavior and automates student attendance, with real-time monitoring via Ubidots dashboard and MongoDB integration.',
        imageUrl: '/aisee-prototype.jpg',
        tags: ['Streamlit', 'MicroPython', 'Ubidots', 'OpenCV', 'Firebase', 'IoT'],
        overview: 'AiSee is an intelligent system designed to automate attendance tracking and detect cheating behavior in classrooms and examinations. Developed as part of the Samsung Innovation Campus program, it integrates computer vision, IoT devices, and a web-based interface to provide real-time student monitoring. The system uses facial recognition to record attendance, continuous identity verification to prevent impersonation, and object detection to flag suspicious activity. Built with Python, Streamlit, OpenCV, Firebase, and Cloudinary, AiSee features dedicated branches for both web deployment and IoT implementation, ensuring smooth coordination between devices and the monitoring platform.',
        features: [
          'Automatic attendance tracking using facial recognition',
          'Cheating detection based on real-time camera input',
          'Data logging to MongoDB and Ubidots dashboard',
          'Web dashboard for teachers built with Streamlit'
        ],
        techStack: ['ESP32-CAM', 'Raspberry Pi', 'OpenCV', 'Ubidots', 'MongoDB', 'Streamlit'],
        challenges: [
          'Ensuring consistent video feed under classroom lighting',
          'Minimizing false positives in cheating detection',
          'Synchronizing IoT data across different platforms'
        ],
        learnings: [
          'IoT–AI pipeline integration with cloud dashboards',
          'MicroPython and API-based data transfer to Ubidots',
          'Edge AI techniques for real-time detection on limited hardware'
        ],
        repoUrl: 'https://github.com/IntroPret/AiSee',
      },
      {
        id: 4,
        title: 'BISINDO Sign Language Recognition',
        description: 'A research project comparing transfer learning models (VGG19, MobileNetV2, YOLOv8) for Indonesian sign language classification. Dataset preprocessing, model training, and evaluation included.',
        imageUrl: '/research-bisindo.png',
        tags: ['Deep Learning', 'Transfer Learning', 'TensorFlow', 'YOLOv8', 'Python'],
        overview: 'The BISINDO Sign Language Recognition project explores how transfer learning can be applied to recognize Indonesian sign language gestures from still images. It compares the performance of several pre-trained deep learning models, including VGG19, MobileNetV2, and YOLOv8, to determine which architecture offers the best accuracy and efficiency. The project covers dataset preprocessing, model training, and evaluation through metrics and confusion matrix analysis. Built with TensorFlow, Keras, and Python, this work contributes to accessibility technology by advancing automated sign language interpretation, making communication more inclusive for the Indonesian deaf community.',
        features: [
          'Dataset preprocessing and augmentation',
          'Model training using VGG19, MobileNetV2, and YOLOv8',
          'Performance evaluation and confusion matrix analysis',
          'Research report using IEEE format for conference submission'
        ],
        techStack: ['TensorFlow', 'Keras', 'YOLOv8', 'Python', 'Google Colab'],
        challenges: [
          'Handling limited dataset availability for BISINDO',
          'Optimizing model hyperparameters for each architecture',
          'Ensuring fair comparison across architectures'
        ],
        learnings: [
          'Improved understanding of transfer learning techniques',
          'Experience with model evaluation and visualization',
          'Research documentation and academic writing for publication'
        ],
        repoUrl: 'https://github.com/IntroPret/BISINDO-Sign-Language-Recognition.git',
      },
];