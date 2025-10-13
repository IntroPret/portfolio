export const allProjects = [
    {
        id: 1,
        title: 'Glamulus | Smart Glass',
        description: 'A wearable prototype integrating smart glass hardware with IoT and software features. Built to enhance user experience with responsive UI and real-time data feedback.',
        imageUrl: '/glamulus-glass-prototype.jpg',
        tags: ['Azure', 'Ultralytics', 'Hardware Prototype', 'Next.js', 'Embedded Systems'],
        overview: 'Glamulus is an IoT-powered smart glass prototype designed to blend hardware innovation with AI-based real-time analytics. It connects to Azure IoT Hub and displays results via an OLED interface for seamless feedback.',
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
        overview: 'FactGazer helps users identify misinformation by analyzing text using machine learning. It provides confidence-based predictions on whether an article is likely fake or real.',
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
        overview: 'AiSee is an intelligent classroom assistant that integrates IoT sensors and AI vision to enhance transparency and efficiency in student monitoring and attendance.',
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
        overview: 'A comparative study evaluating deep learning and transfer learning models for recognizing static BISINDO sign language gestures from images.',
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
        repoUrl: 'https://github.com/IntroPret/bisindo-research',
      },
];