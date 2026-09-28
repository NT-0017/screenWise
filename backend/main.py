import joblib
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import pandas as pd

app = FastAPI()
app.mount("/static", StaticFiles(directory="frontend"), name="static")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class UserInput(BaseModel):
    age: float
    daily_screen_time_hours: float
    social_media_hours: float
    gaming_hours: float
    work_study_hours: float
    sleep_hours: float
    notifications_per_day: float
    app_opens_per_day: float
    weekend_screen_time: float
    gender: str
    stress_level: str
    academic_work_impact: str


preprocessor = joblib.load("models/preprocessor.pkl")
model = joblib.load("models/final_xgb_model.pkl")


@app.get("/")
def home():
    return FileResponse("frontend/index.html")

@app.post("/predict")
def predict(data: UserInput):

    input_data = data.model_dump()

    input_df = pd.DataFrame([input_data])

    processed_data = preprocessor.transform(input_df)

    prediction = model.predict(processed_data)[0]

    probability = model.predict_proba(processed_data)[0][1]

    return {
        "prediction": int(prediction),
        "probability": float(probability)
    }
