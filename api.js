import axios from "axios";

const API_KEY = "fef9a7cade8ebaf536dda87676ea2bb3"; // Вставьте свой API-ключ
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric", // Для температур в Цельсиях
      },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    throw error;
  }
};
