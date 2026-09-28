# ScreenWise 📱

## Smartphone Addiction Prediction System

ScreenWise is a machine learning-based web application that predicts the risk of smartphone addiction based on a user's smartphone usage patterns, lifestyle factors, stress level, and academic work impact.

The application uses a trained **XGBoost classification model** with a FastAPI backend and a web-based frontend.

---

## 🎯 Project Objective

The objective of ScreenWise is to use machine learning to analyze smartphone usage behavior and estimate whether a user is likely to be classified as **Addicted** or **Not Addicted**.

The application also provides a **risk probability** and categorizes the result into:

- 🟢 Low Risk
- 🟠 Moderate Risk
- 🔴 High Risk

---

## ✨ Features

- Smartphone addiction prediction
- XGBoost machine learning model
- Risk probability calculation
- Low, Moderate, and High risk classification
- Input validation
- Interactive web interface
- FastAPI backend
- Machine learning preprocessing pipeline
- Real-time prediction
- User-friendly result display

---

## 📊 Input Features

The model uses the following 12 features:

1. Age
2. Daily Screen Time (hours)
3. Social Media Hours
4. Gaming Hours
5. Work/Study Hours
6. Sleep Hours
7. Notifications Per Day
8. App Opens Per Day
9. Weekend Screen Time (hours)
10. Gender
11. Stress Level
12. Academic Work Impact

---

## 🤖 Machine Learning Model

The application uses **XGBoost** for smartphone addiction classification.

The trained model and preprocessing pipeline are stored in the `models` directory.

### Model Files

- `final_xgb_model.pkl` — trained XGBoost model
- `preprocessor.pkl` — preprocessing pipeline

---

## 🏗️ System Architecture

```text
User
  │
  ▼
Frontend
(HTML + CSS + JavaScript)
  │
  │ JSON Request
  ▼
FastAPI Backend
  │
  ▼
Preprocessing Pipeline
  │
  ▼
XGBoost Model
  │
  ▼
Prediction + Probability
  │
  ▼
Risk Classification
  │
  ▼
Frontend Result
```

---

## 🔄 How It Works

1. The user enters their smartphone usage information.
2. The frontend validates the input.
3. The frontend sends the data to the FastAPI backend.
4. The backend applies the preprocessing pipeline.
5. The XGBoost model generates a prediction.
6. The application calculates the risk probability.
7. The probability is converted into a risk level.
8. The result is displayed on the web interface.

---

## 🚦 Risk Classification

The application uses the predicted probability to classify risk:

| Risk Level | Probability |
|---|---:|
| Low Risk | Below 40% |
| Moderate Risk | 40% – 69.99% |
| High Risk | 70% and above |

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

---

## 💻 Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/NT-0017/screenWise.git
cd screenWise
```

### 2. Create and activate a virtual environment

```bash
python -m venv venv
```

**Windows:**

```bash
venv\Scripts\activate
```

### 3. Install dependencies

```bash
python -m pip install -r requirements.txt
```

### 4. Start the FastAPI backend

```bash
uvicorn backend.main:app --reload
```

### 5. Open the frontend

Open:

```text
frontend/index.html
```

in a web browser.

---

## 🔐 Input Validation

ScreenWise includes validation to prevent invalid input values such as:

- Negative age
- Negative screen time
- Negative gaming hours
- Negative social media hours
- Negative sleep hours
- Negative notification counts
- Negative app opens
- Negative weekend screen time
- Missing required selections

---

## 📌 Project Status

The ScreenWise application currently includes:

- ✅ Machine learning model
- ✅ Preprocessing pipeline
- ✅ FastAPI backend
- ✅ Frontend interface
- ✅ Prediction system
- ✅ Risk probability
- ✅ Risk-level classification
- ✅ Input validation
- ✅ GitHub repository

---

## ⚠️ Disclaimer

ScreenWise is a machine learning project intended for educational and analytical purposes. Its predictions should not be considered a medical diagnosis or professional assessment.

---

## 👨‍💻 Author

**NT-0017**

GitHub:  
https://github.com/NT-0017
