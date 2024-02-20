import UseWeatherData from "./UseWeatherData";

const ForecastHeader = () => {
  const forecastData = UseWeatherData();

  // 오늘 날짜 정보 가져오기
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  // 최고 기온과 최저 기온 찾기
  const dailyForecast = forecastData?.list.find((item: any) => {
    const forecastDate = new Date(item.dt * 1000);
    return forecastDate.getDate() === date; // 오늘 날짜와 일치하는지 확인
  });

  // 최고 기온과 최저 기온 값 가져오기
  let maxTemp = "-";
  let minTemp = "-";
  if (dailyForecast) {
    maxTemp = dailyForecast.main.temp_max;
    minTemp = dailyForecast.main.temp_min;
  }

  return (
    <div className="font-bold text-3xl px-4 text-center">
      <div>경기도 남양주 시</div>
      <ul className="flex gap-4 text-lg font-normal mt-4 items-center justify-center">
        <li className="border-r-[1px] pr-4 border-black">
          {year}년 {month}월 {date}일(금)
        </li>
        <li className="border-r-[1px] pr-4 border-black">최고 : {maxTemp}°C</li>
        <li>최저 : {minTemp}°C</li>
      </ul>
    </div>
  );
};

export default ForecastHeader;
