# ScreenWise

## Smartphone Addiction Prediction System

ScreenWise is a machine learning-based web application that predicts the risk of smartphone addiction based on a user's smartphone usage patterns, lifestyle, stress level, and academic work impact.

The application uses a trained **XGBoost classification model** and provides an easy-to-use web interface for obtaining predictions.

## Features

- Smartphone addiction prediction
- Risk probability calculation
- Low, Moderate, and High risk classification
- Input validation
- Interactive prediction interface
- FastAPI backend
- Machine learning model integration
- Responsive web interface

## Technologies Used

- Python
- FastAPI
- XGBoost
- Scikit-learn
- Pandas
- NumPy
- HTML
- CSS
- JavaScript

## Input Features

The model uses the following features:

- Age
- Daily Screen Time
- Social Media Hours
- Gaming Hours
- Work/Study Hours
- Sleep Hours
- Notifications Per Day
- App Opens Per Day
- Weekend Screen Time
- Gender
- Stress Level
- Academic Work Impact

## Machine Learning Model

The application uses an **XGBoost classifier** for smartphone addiction prediction.

The trained model and preprocessing pipeline are stored in the `models` directory.

## Project Structure

```text
ScreenWise/
│
├── backend/
│   └── main.py
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── models/
│   ├── final_xgb_model.pkl
│   └── preprocessor.pkl
│
├── requirements.txt
└── .gitignore
