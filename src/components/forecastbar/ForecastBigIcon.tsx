import Image from "next/image";
import UseWeatherData from "./UseWeatherData";

const ForecastBigIcon = () => {
  const forecastData = UseWeatherData(); // UseWeatherData에서 직접 forecastData를 가져옴
  const now = new Date(); // 현재 시간
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    0,
    0
  ); // 오늘의 시작
  const endOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    0,
    0
  ); // 내일의 시작 (오늘 자정)
  const dailyForecast = forecastData?.list.find((item: any) => {
    const forecastDate = new Date(item.dt * 1000);
    return forecastDate >= startOfToday && forecastDate < endOfToday;
  });

  let iconUrl = "";
  if (dailyForecast && dailyForecast.weather && dailyForecast.weather[0]) {
    iconUrl = `https://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}.png`;
    return (
      <div className="bg-gray-200 rounded-full w-[350px] h-[350px]">
        <Image src={iconUrl} alt="Weather Icon" width={380} height={380} />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default ForecastBigIcon;
