import axios from "axios";
import { useEffect, useState } from "react";

export default function UseWeatherData() {
  const [forecastData, setForecastData] = useState<any>();

  useEffect(() => {
    const getWeatherForecast = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const apiKey = "1a99cba73f0cfedd5d8a576166871a98";

          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&weather.icon&appid=${apiKey}`
          );

          setForecastData(response.data);
          console.log(response.data);
        });
      } catch (error) {
        console.error(error);
      }
    };

    getWeatherForecast();
  }, []);

  return forecastData;
}
