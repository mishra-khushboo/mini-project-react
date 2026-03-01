
# 🌦️ Weather App (React Project)

A simple and responsive **Weather Application** built using **React.js** that allows users to search for any city and view real-time weather information using the **OpenWeatherMap API**.

---

## 🚀 Features

✅ Search weather by city name
✅ Real-time weather data using API
✅ Temperature, humidity, min & max temperature display
✅ Weather description & feels-like temperature
✅ Dynamic weather icons and background images
✅ Error handling for invalid city names
✅ Modern UI using **Material UI**

---

## 🛠️ Tech Stack

* **React.js**
* **Vite**
* **JavaScript (ES6)**
* **Material UI**
* **OpenWeatherMap API**
* **CSS**

---

## 📂 Project Structure

```
src/
│
├── App.jsx
├── WeatherApp.jsx
├── SearchBox.jsx
├── InfoBox.jsx
├── App.css
├── SearchBox.css
└── InfoBox.css
```

---

## ⚙️ How It Works (Flow)

### 1️⃣ App Component

* Loads the main `WeatherApp` component.

```
App → WeatherApp
```

---

### 2️⃣ WeatherApp (Parent Component)

* Stores weather data using **useState**
* Passes a function `updateInfo()` to child component
* Updates UI whenever new weather data is received

**State Managed:**

* City
* Temperature
* Humidity
* Weather Description
* Feels Like Temperature

---

### 3️⃣ SearchBox (Child Component)

* User enters city name
* Fetches weather data from **OpenWeatherMap API**
* Sends updated data back to parent component

👉 Uses **Props Function Passing**

```
WeatherApp → updateInfo() → SearchBox
SearchBox → returns new data → WeatherApp
```

---

### 4️⃣ InfoBox Component

Displays:

* Weather details
* Weather icons
* Dynamic background image based on conditions

**Logic Used**

* Rain → Rain Image 🌧️
* Hot → Sunny Image ☀️
* Cold → Snow Image ❄️

---

## 🌐 API Used

OpenWeatherMap API

```
https://api.openweathermap.org/data/2.5/weather
```

---

## 🔑 Environment Setup

Create a `.env` file in root directory:

```
VITE_API_KEY=your_api_key_here
```

👉 Get API key from:
[https://openweathermap.org/api](https://openweathermap.org/api)

---

## ▶️ Installation & Run

### 1. Clone Repository

```bash
git clone https://github.com/mishra-khushboo/react-weather-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

---

## 📸 UI Preview

* Search city
* Weather card updates dynamically
* Clean Material UI design

---

## 🎯 Learning Outcomes

This project demonstrates:

* React Component Structure
* Props & State Management
* Parent → Child Communication
* API Fetching using `fetch()`
* Async/Await Handling
* Error Handling
* Environment Variables in Vite
* Conditional Rendering

---

## ✨ Future Improvements

* 🌍 Auto location detection
* ⭐ Save favorite cities
* 📅 5-day weather forecast
* 🌙 Dark mode
* 📱 Fully responsive mobile UI

---

## 👩‍💻 Author

**Khushboo Mishra**

Built as part of React learning and frontend development practice.


