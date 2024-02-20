import axios from "axios";
import Image from "next/image";
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

  return (
    <div>
      {forecastData ? (
        <div className=" grid grid-cols-5 h-[311px] mt-8 px-32">
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

            const iconUrl = `https://openweathermap.org/img/wn/${dailyForecasts[0]?.weather[0]?.icon}.png`;

            return (
              <div key={dayIndex} className="forecast-itemw-[150px] h-[3110px]">
                <div className="날씨 카드 flex flex-col items-center w-[150px] h-[270px] bg-lightGreen rounded-3xl shadow-xl ">
                  <div className=" 오늘 아이콘 카드 ">
                    <Image
                      src={iconUrl}
                      alt="Weather Icon"
                      width={192}
                      height={192}
                    />
                    <div className="w-[150] text-center mb-4">
                      {startDate.toLocaleDateString().substring(0, 12)}
                    </div>
                  </div>
                  {dailyForecasts ? (
                    <div className="오늘 최저, 최저기온">
                      <div>최저: {minTemp}℃</div>
                      <div>최고: {maxTemp}℃</div>
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
