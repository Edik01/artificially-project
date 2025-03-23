import React, { useEffect, useState } from "react";
import { getWeather } from "./api";

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather("London").then((data) => setWeather(data));
  }, []);

  return (
    <div>
      {weather ? (
        <p>
          weather: {weather.main.temp}°C, {weather.weather[0].description}
        </p>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
}

export default Weather;
