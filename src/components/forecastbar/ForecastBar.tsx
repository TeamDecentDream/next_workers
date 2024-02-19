const ForecastBar = () => {
  return (
    <div className="h-[311px] p-8">
      <div className="font-bold text-3xl mb-6 px-4">주간예보</div>
      <div className="h-[161px] bg-red-300">
        <div className="flex gap-8 justify-center">
          <div>
            <div className="w-[92px] h-[92px] bg-blue-100">이미지</div>
            <ul>
              <li>1월 24일(금)</li>
              <li>최고 : 5°C</li>
              <li>최저 : -10°C</li>
            </ul>
          </div>
          <div className="h-[161px]">
            <div className="w-[92px] h-[92px] bg-blue-100">이미지</div>
            <ul>
              <li>1월 24일(금)</li>
              <li>최고 : 5°C</li>
              <li>최저 : -10°C</li>
            </ul>
          </div>
          <div className="h-[161px]">
            <div className="w-[92px] h-[92px] bg-blue-100">이미지</div>
            <ul>
              <li>1월 24일(금)</li>
              <li>최고 : 5°C</li>
              <li>최저 : -10°C</li>
            </ul>
          </div>
          <div className="h-[161px]">
            <div className="w-[92px] h-[92px] bg-blue-100">이미지</div>
            <ul>
              <li>1월 24일(금)</li>
              <li>최고 : 5°C</li>
              <li>최저 : -10°C</li>
            </ul>
          </div>
          <div className="h-[161px]">
            <div className="w-[92px] h-[92px] bg-blue-100">이미지</div>
            <ul>
              <li>1월 24일(금)</li>
              <li>최고 : 5°C</li>
              <li>최저 : -10°C</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastBar;
