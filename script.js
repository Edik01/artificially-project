import { getWeather } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("cityInput");
  const fetchWeatherButton = document.getElementById("fetchWeather");
  const output = document.getElementById("output");

  if (fetchWeatherButton && cityInput && output) {
    fetchWeatherButton.addEventListener("click", async () => {
      const city = cityInput.value;
      try {
        const data = await getWeather(city);
        output.innerText = `Погода в ${city}: ${data.main.temp}°C, ${data.weather[0].description}`;
      } catch (err) {
        output.innerText = "Ошибка при получении погоды.";
      }
    });
  }

  const messageButton = document.getElementById("messageButton");
  const message = document.getElementById("message");
  if (messageButton && message) {
    messageButton.addEventListener("click", () => {
      message.textContent = "Вы нажали кнопку!";
    });
  }

  const faithingButton = document.getElementById("faithingButton");
  if (faithingButton) {
    faithingButton.addEventListener("click", () => {
      window.location.href = "faithingPage.html";
    });
  }

  const backToHomeButton = document.getElementById("backToHomeButton");
  if (backToHomeButton) {
    backToHomeButton.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
});
