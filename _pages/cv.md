---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
header:
  overlay_color: transparent
---

{% include base_path %}

Education
======
* **Ph.D. Student** in Reasoning and Learning Lab (ReaL), Linköping University, Sweden (December 2023 - November 2027, planned)
* **Master in Machine Intelligence**, African Master in Machine Intelligence (AMMI), University of Ghana, Ghana (March 2021)
  * Master thesis: Deep Reinforcement Learning from Variance-Reduced Policy-Dependent Human Feedback
* **Electronic and Telecommunication Engineer**, Gaston Berger University, Senegal (November 2014)

Work experience
======
* **Machine Learning Engineer** at OlliTrip (Remote), April 2022 - June 2024
  * Built an AI-based travel recommendation engine
  * Built recommendation system for hotels using Kafka, Spark, and Elasticsearch
  * Implemented a deep learning-based attraction recommendation system using Restricted Boltzmann Machine
  * Implemented data pipeline and ML pipeline using Apache Airflow
  * Deployed models in AWS (Sagemaker, EC2, S3, etc.)

* **Machine Learning Fellow** at Fellowship.ai (Remote), October 2022 - January 2023
  * Worked on competitor analysis using Machine Learning
  * Built data cleaning pipeline for CSV data and image data loader for shoe images
  * Built model pipeline using CLIP
  * Implemented text and image embedding to fit into the CLIP model
  * Used cosine similarity metric to get similar products
  * Built a frontend application using Streamlit

* **Reinforcement Learning Researcher** at Intelligent Robot Learning Lab, Alberta/Canada, June 2020 - January 2022
  * Implemented four Human-in-the-Loop Reinforcement Learning (HCRL) algorithms using TensorFlow: TAMER, COACH, DEEP-TAMER, DEEP-COACH
  * Built a new HCLR algorithm, Variance-Reduce COACH (VR-COACH) which interprets human feedback as reward and applies variance reduction technique on policy gradient
  * Experimented with VR-COACH in classic MountainCar environment and DEEP VR-COACH in Goal navigation task (Malmo Minecraft)

Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  
Teaching
======
* **Linköping University**, Linköping, Sweden
  * **TDDE78 - Reinforcement Learning** (Lab Responsible), 2024
  * **TDDE13 - Multiagent Systems** (Teaching Assistant), 2024

* **Dakar Institute of Technology (DIT)**, Dakar, Senegal
  * **Reinforcement Learning course** (Master2 class), 2023-2024
  * **Computer Vision course** (Master1 class), 2023
  
Skills
======
* **Machine Learning & Deep Learning**: TensorFlow, PyTorch, Reinforcement Learning, Human-in-the-Loop RL, CLIP, Diffusion Models, LLMs
* **MLOps & Cloud**: AWS (Sagemaker, EC2, S3, Amplify), Apache Airflow, Kafka, Spark, Elasticsearch
* **Software Development**: Python, Flask, Gunicorn, React, Streamlit
* **Data Engineering**: Data pipelines, ETL processes, Data cleaning and preprocessing
* **Telecommunications**: Radio Access Network (RAN), 3G/4G network maintenance, Network KPI monitoring
