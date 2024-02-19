"use client";
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
    <div className="flex flex-col">
      {forecastData ? (
        <>
          {[...Array(5)].map((_, dayIndex) => {
            const startDate = new Date();
            startDate.setDate(startDate.getDate() + dayIndex);
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + 1);
            const dailyForecast = forecastData.list.filter((item: any) => {
              const forecastDate = new Date(item.dt * 1000);
              return forecastDate >= startDate && forecastDate < endDate;
            })[0];
            return (
              <div key={dayIndex} className="forecast-item flex">
                <div>{startDate.toLocaleDateString().substring(2)}</div>
                <div className="">
                  {dailyForecast ? (
                    <>
                      <div>- 최저: {dailyForecast.main.temp_min}℃</div>
                      <div>- 최고: {dailyForecast.main.temp_max}℃</div>
                    </>
                  ) : (
                    <div>데이터 없음</div>
                  )}
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ForecastBar;
