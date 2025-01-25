import { getWeather } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  const button = document.querySelector("#fetchWeather");
  const cityInput = document.querySelector("#cityInput");

  button.addEventListener("click", async () => {
    const city = cityInput.value;
    try {
      const weatherData = await getWeather(city);
      console.log(weatherData);
      document.querySelector("#output").innerText = `
        Погода в ${city}: ${weatherData.main.temp}°C, ${weatherData.weather[0].description}
      `;
    } catch (error) {
      document.querySelector("#output").innerText = "Ошибка получения данных.";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  button.addEventListener("click", changeMessage);

  const faithingButton = document.getElementById("faithingButton");
  faithingButton.addEventListener("click", function () {
    window.location.href = "faithingPage.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Логика кнопки "Back to Home"
  const backToHomeButton = document.getElementById("backToHomeButton");
  backToHomeButton.addEventListener("click", function () {
    window.location.href = "index.html"; // Путь к домашней странице
  });
});

function changeMessage() {
  document.getElementById("message").textContent = "You clicked the button";
}

function dronControl() {
  document.getElementById("control").managementContent =
    "You can controlled drone";
}
