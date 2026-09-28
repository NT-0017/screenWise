# ScreenWise 📱

## Smartphone Addiction Prediction System

ScreenWise is a machine learning-based web application that predicts the risk of smartphone addiction based on a user's smartphone usage patterns, lifestyle factors, stress level, and academic work impact.

The application uses a trained **XGBoost classification model**, a **FastAPI backend**, and a **web-based frontend** to provide real-time predictions.

---

## 🚀 Live Demo

[**Visit ScreenWise →**](https://screenwise-cn11.onrender.com)

---

## 🎯 Project Objective

The objective of ScreenWise is to use machine learning to analyze smartphone usage behavior and estimate whether a user is likely to be classified as:

- **Addicted**
- **Not Addicted**

The application also provides a **risk probability** and classifies the predicted risk into:

- 🟢 **Low Risk**
- 🟠 **Moderate Risk**
- 🔴 **High Risk**

---

## 🏗️ Project Architecture

ScreenWise follows an end-to-end machine learning architecture connecting the user interface, FastAPI backend, preprocessing pipeline, and trained XGBoost model.

```text
                    ┌──────────────────────────┐
                    │          User            │
                    │                          │
                    │ Enters smartphone usage  │
                    │ and lifestyle details    │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │        Frontend          │
                    │                          │
                    │     HTML / CSS / JS      │
                    │                          │
                    │ • Input Form             │
                    │ • Input Validation       │
                    │ • Prediction Request     │
                    │ • Result Visualization   │
                    └────────────┬─────────────┘
                                 │
                           POST /predict
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │     FastAPI Backend      │
                    │                          │
                    │     backend/main.py      │
                    │                          │
                    │ • Receives user input    │
                    │ • Creates DataFrame      │
                    │ • Applies preprocessing  │
                    │ • Generates prediction   │
                    └────────────┬─────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
          ┌───────────────────┐     ┌───────────────────┐
          │   Preprocessor    │     │   XGBoost Model   │
          │                   │     │                   │
          │ preprocessor.pkl  │     │ final_xgb_model   │
          │                   │     │      .pkl         │
          └─────────┬─────────┘     └─────────┬─────────┘
                    │                         │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │       Prediction         │
                    │                          │
                    │ • Addicted / Not Addicted│
                    │ • Risk Probability       │
                    │ • Risk Level             │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │     Web Interface        │
                    │                          │
                    │ Displays prediction,     │
                    │ risk level and probability│
                    └──────────────────────────┘
```

---

## ✨ Features

- 📱 Smartphone addiction prediction
- 🤖 XGBoost machine learning model
- 📊 Risk probability calculation
- 🚦 Low, Moderate, and High risk classification
- ✅ Input validation
- 🌐 Interactive web interface
- ⚡ FastAPI backend
- 🔄 Machine learning preprocessing pipeline
- 🎯 Real-time prediction
- 📈 User-friendly result visualization
- ☁️ Deployed web application

---

## 📊 Input Features

The model uses the following **12 input features**:

| No. | Feature |
|---:|---|
| 1 | Age |
| 2 | Daily Screen Time (hours) |
| 3 | Social Media Hours |
| 4 | Gaming Hours |
| 5 | Work/Study Hours |
| 6 | Sleep Hours |
| 7 | Notifications Per Day |
| 8 | App Opens Per Day |
| 9 | Weekend Screen Time (hours) |
| 10 | Gender |
| 11 | Stress Level |
| 12 | Academic Work Impact |

---

## 🤖 Machine Learning Model

The application uses **XGBoost** for smartphone addiction classification.

The trained model and preprocessing pipeline are stored in the `models` directory.

### Model Files

| File | Description |
|---|---|
| `final_xgb_model.pkl` | Trained XGBoost classification model |
| `preprocessor.pkl` | Machine learning preprocessing pipeline |

---

## 🔄 How It Works

The prediction process follows these steps:

1. The user enters smartphone usage and lifestyle information.
2. The frontend validates the input values.
3. The frontend sends the input data to the FastAPI `/predict` endpoint.
4. The FastAPI backend receives the request.
5. The preprocessing pipeline transforms the input data.
6. The XGBoost model generates the prediction.
7. The application calculates the prediction probability.
8. The probability is classified into a risk level.
9. The prediction and risk information are displayed on the frontend.

---

## 🚦 Risk Classification

ScreenWise classifies the predicted probability into three risk levels:

| Risk Level | Probability |
|---|---:|
| 🟢 Low Risk | Below 40% |
| 🟠 Moderate Risk | 40% – 69.99% |
| 🔴 High Risk | 70% and above |

---

## 🛠️ Technologies Used

### Machine Learning

- Python
- XGBoost
- Scikit-learn
- Pandas
- NumPy

### Backend

- FastAPI
- Uvicorn

### Frontend

- HTML
- CSS
- JavaScript

### Development Tools

- VS Code
- Jupyter Notebook
- Git
- GitHub

### Deployment

- Render

---

## 📁 Project Structure

```text
screenWise/
│
├── backend/
│   └── main.py
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── models/
│   ├── final_xgb_model.pkl
│   └── preprocessor.pkl
│
├── notebooks/
│   └── machine learning notebooks
│
├── requirements.txt
│
└── README.md
```

---

## 💻 Running the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/NT-0017/screenWise.git
cd screenWise
```

### 2. Create a Virtual Environment

```bash
python -m venv venv
```

### 3. Activate the Virtual Environment

**Windows:**

```bash
venv\Scripts\activate
```

### 4. Install Dependencies

```bash
python -m pip install -r requirements.txt
```

### 5. Start the FastAPI Backend

```bash
uvicorn backend.main:app --reload
```

### 6. Open the Application

Open the frontend in your browser using the configured application setup.

---

## 🔐 Input Validation

ScreenWise validates user inputs before sending them to the prediction API.

The application checks for invalid values such as:

- Negative age
- Negative daily screen time
- Negative social media hours
- Negative gaming hours
- Negative work/study hours
- Negative sleep hours
- Negative notification counts
- Negative app opens
- Negative weekend screen time
- Missing gender selection
- Missing stress level selection
- Missing academic work impact selection

---

## 🌐 Deployment

ScreenWise is deployed as a web application using **Render**.

### Live Application

[**https://screenwise-cn11.onrender.com**](https://screenwise-cn11.onrender.com)

The deployed application provides:

- Web-based input form
- FastAPI prediction backend
- Trained XGBoost model
- Prediction probability
- Risk classification
- Interactive result display

---

## 📌 Project Status

The ScreenWise application currently includes:

- ✅ Machine learning model
- ✅ Preprocessing pipeline
- ✅ FastAPI backend
- ✅ Frontend interface
- ✅ Prediction system
- ✅ Risk probability calculation
- ✅ Risk-level classification
- ✅ Input validation
- ✅ GitHub repository
- ✅ Render deployment
- ✅ Live web application

---

## ⚠️ Disclaimer

ScreenWise is a machine learning project intended for educational and analytical purposes.

The predictions generated by this application should **not** be considered a medical diagnosis or professional assessment.

---

## 👨‍💻 Author

**NT-0017**

GitHub:  
https://github.com/NT-0017

---

## ⭐ Project Overview

ScreenWise demonstrates the integration of an end-to-end machine learning workflow with a web application:

```text
Machine Learning
       ↓
Data Preprocessing
       ↓
XGBoost Model
       ↓
FastAPI Backend
       ↓
HTML / CSS / JavaScript
       ↓
Render Deployment
       ↓
Live Web Application
```
