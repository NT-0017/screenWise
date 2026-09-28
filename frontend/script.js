const predictBtn = document.getElementById("predictBtn");

predictBtn.addEventListener("click", function () {

    predictBtn.textContent = "Predicting...";
    predictBtn.disabled = true;

    const age = Number(document.getElementById("age").value);

    if (age <= 0) {
        alert("Please enter a valid age.");
        return;
    }

    const dailyScreenTime = Number(
    document.getElementById("daily_screen_time_hours").value
);

if (dailyScreenTime < 0) {
    alert("Daily screen time cannot be negative.");
    return;
}

    const socialMediaHours = Number(
    document.getElementById("social_media_hours").value
);

const gamingHours = Number(
    document.getElementById("gaming_hours").value
);

const workStudyHours = Number(
    document.getElementById("work_study_hours").value
);

const sleepHours = Number(
    document.getElementById("sleep_hours").value
);

const notificationsPerDay = Number(
    document.getElementById("notifications_per_day").value
);

const appOpensPerDay = Number(
    document.getElementById("app_opens_per_day").value
);

const weekendScreenTime = Number(
    document.getElementById("weekend_screen_time").value
);

if (socialMediaHours < 0) {
    alert("Social media hours cannot be negative.");
    return;
}

if (gamingHours < 0) {
    alert("Gaming hours cannot be negative.");
    return;
}

if (workStudyHours < 0) {
    alert("Work/Study hours cannot be negative.");
    return;
}

if (sleepHours < 0) {
    alert("Sleep hours cannot be negative.");
    return;
}

if (notificationsPerDay < 0) {
    alert("Notifications per day cannot be negative.");
    return;
}

if (appOpensPerDay < 0) {
    alert("App opens per day cannot be negative.");
    return;
}

if (weekendScreenTime < 0) {
    alert("Weekend screen time cannot be negative.");
    return;
}

const gender = document.getElementById("gender").value;
const stressLevel = document.getElementById("stress_level").value;
const academicWorkImpact = document.getElementById("academic_work_impact").value;

if (gender === "") {
    alert("Please select your gender.");
    return;
}

if (stressLevel === "") {
    alert("Please select your stress level.");
    return;
}

if (academicWorkImpact === "") {
    alert("Please select the academic work impact.");
    return;
}


    const inputData = {
        age: Number(document.getElementById("age").value),
        daily_screen_time_hours: Number(document.getElementById("daily_screen_time_hours").value),
        social_media_hours: Number(document.getElementById("social_media_hours").value),
        gaming_hours: Number(document.getElementById("gaming_hours").value),
        work_study_hours: Number(document.getElementById("work_study_hours").value),
        sleep_hours: Number(document.getElementById("sleep_hours").value),
        notifications_per_day: Number(document.getElementById("notifications_per_day").value),
        app_opens_per_day: Number(document.getElementById("app_opens_per_day").value),
        weekend_screen_time: Number(document.getElementById("weekend_screen_time").value),
        gender: document.getElementById("gender").value,
        stress_level: document.getElementById("stress_level").value,
        academic_work_impact: document.getElementById("academic_work_impact").value
    };

   fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(inputData)
})
.then(response => response.json())
.then(result => {
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";

    const probability = result.probability * 100;

let riskLevel;

if (probability >= 70) {
    riskLevel = "High Risk";
} else if (probability >= 40) {
    riskLevel = "Moderate Risk";
} else {
    riskLevel = "Low Risk";
}


    resultDiv.innerHTML = `
        <h2>${result.prediction === 1 ? "🔴 Smartphone Addiction Detected" : "🟢 No Smartphone Addiction Detected"}</h2>
        <p>
    Prediction:
    <strong class="${result.prediction === 1 ? "addicted" : "not-addicted"}">
        ${result.prediction === 1 ? "Addicted" : "Not Addicted"}
    </strong>
</p>
        <p>
    Risk Level:
    <strong class="${riskLevel.toLowerCase().replace(" ", "-")}">
        ${riskLevel}
    </strong>
</p>
        <p>Risk Probability: ${probability.toFixed(2)}%</p>

<div class="risk-bar">
    <div class="risk-fill" style="width: ${probability}%"></div>
</div>
    `;

    predictBtn.textContent = "Predict";
    predictBtn.disabled = false;
})

.catch(error => {
    console.error(error);

    alert("Unable to connect to the prediction server. Please try again.");

    predictBtn.textContent = "Predict";
    predictBtn.disabled = false;
});


});