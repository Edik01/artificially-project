import { getWeather } from "./api.js";

// Ждём, пока HTML полностью загрузится
document.addEventListener("DOMContentLoaded", () => {
  const fetchWeatherButton = document.getElementById("fetchWeather");
  const cityInput = document.getElementById("cityInput");
  const output = document.getElementById("output");

  if (fetchWeatherButton && cityInput && output) {
    fetchWeatherButton.addEventListener("click", async () => {
      const city = cityInput.value;
      try {
        const weatherData = await getWeather(city);
        output.innerText = `Погода в ${city}: ${weatherData.main.temp}°C, ${weatherData.weather[0].description}`;
      } catch (error) {
        output.innerText = "Ошибка при получении данных.";
      }
    });
  }

  // Кнопка перехода на страницу faithing
  const faithingButton = document.getElementById("faithingButton");
  if (faithingButton) {
    faithingButton.addEventListener("click", () => {
      window.location.href = "faithingPage.html";
    });
  }

  // Кнопка возврата на главную
  const backToHomeButton = document.getElementById("backToHomeButton");
  if (backToHomeButton) {
    backToHomeButton.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  // Пример изменения текста при нажатии
  const messageButton = document.getElementById("messageButton");
  const message = document.getElementById("message");
  if (messageButton && message) {
    messageButton.addEventListener("click", () => {
      message.textContent = "Вы нажали на кнопку!";
    });
  }
});
