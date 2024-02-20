import axios from "axios";
import { FC, useEffect, useState } from "react";

const ForecastBar: FC = () => {
  const [forecastData, setForecastData] = useState<any>();

  useEffect(() => {
    const getWeatherForecast = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const apiKey = "1a99cba73f0cfedd5d8a576166871a98";

          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
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

  return (
    <div>
      {forecastData ? (
        <div className=" grid grid-cols-5 h-[311px] px-32">
          {Array.from({ length: 5 }, (_, dayIndex) => {
            const startDate = new Date();
            startDate.setDate(startDate.getDate() + dayIndex);
            const startOfNoon = new Date(startDate);
            startOfNoon.setHours(12, 0, 0, 0);

            const endOfMidnight = new Date(startDate);
            endOfMidnight.setHours(23, 59, 59, 999);

            const dailyForecasts = forecastData.list.filter((item: any) => {
              const forecastDate = new Date(item.dt * 1000);
              return (
                forecastDate >= startOfNoon && forecastDate <= endOfMidnight
              );
            });

            let minTemp = Infinity;
            let maxTemp = -Infinity;

            dailyForecasts.forEach((forecast: any) => {
              minTemp = Math.min(minTemp, forecast.main.temp_min);
              maxTemp = Math.max(maxTemp, forecast.main.temp_max);
            });

            console.log("최저 온도:", minTemp);
            console.log("최고 온도:", maxTemp);
            return (
              <div
                key={dayIndex}
                className="forecast-item bg-red-100 w-[150px] h-[200px]"
              >
                <div className="bg-red-300 날씨 카드 flex flex-col items-center w-[150px] h-[220px]">
                  <div className=" 오늘 아이콘 카드">
                    <div className="w-32 h-32 bg-blue-100">이미지</div>
                    <div>{startDate.toLocaleDateString().substring(2)}</div>
                  </div>
                  {dailyForecasts ? (
                    <div className="오늘 최저, 최저기온">
                      <div>- 최저: {minTemp}℃</div>
                      <div>- 최고: {maxTemp}℃</div>
                    </div>
                  ) : (
                    <div>데이터 없음</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ForecastBar;
