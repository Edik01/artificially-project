const API_KEY = "fef9a7cade8ebaf536dda87676ea2bb3"; // ← вставь свой ключ OpenWeatherMap
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getWeather(city) {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) throw new Error("Ошибка при запросе погоды");
  return await response.json();
}
