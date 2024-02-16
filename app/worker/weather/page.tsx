"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import Image from "next/image";
import { FC } from "react";
import sun from "/public/images/sun.png";
import OnWork from "@/src/components/onwork/OnWork";

const Weather: FC = () => {
  return (
    <div className="min-w-[1440px] w-full min-h-[900px] flex h-screen">
      <Navbar />
      <main className="min-w-[1140px] w-full h-full flex flex-col">
        <div className="flex justify-end gap-8 p-4 pr-8">
          <OnDate />
          <OnWork />
        </div>

        <div className="pl-12">
          <h1 className="font-bold w-full text-3xl ">일기예보</h1>

          <div className="flex justify-between px-8 py-4">
            <div className="w-1/2  mt-[36px] flex items-center justify-center">
              <Image src={sun} alt="goals" width={256} height={256} />
            </div>
            <div className="w-1/2  mt-[36px] items-center">
              <div className="font-bold text-3xl px-4 text-center">
                <div>경기도 남양주시</div>
                <ul className="flex gap-4 text-lg font-normal mt-4 items-center justify-center">
                  <li className="border-r-[1px] pr-4 border-black">
                    24년 1월 24(금)
                  </li>
                  <li className="border-r-[1px] pr-4 border-black">
                    최고 : 5°C
                  </li>
                  <li>최저 : -10°C</li>
                </ul>
              </div>
              <div className=" flex mt-8">
                <div className="w-1/2 text-center my-auto text-4xl font-bold text-green-600">
                  ※기상 주의보※ <br /> 없음
                </div>
                <ul>
                  <li className="my-4">
                    현재 온도 : 18°C <br /> 설정온도 : 22°C
                  </li>
                  <li className="my-4">
                    현재 풍속 : 0.2m/s <br />
                    설정 풍속 : 0.2m/s
                  </li>
                  <li className="my-4">
                    설정 비료량 : 1kg/m² <br /> 설정 급수량 : 500ml/h
                  </li>
                  <li className="my-4">
                    토양 PH : 7.4 <br /> 토양 무기질 함유량 2g/m²
                  </li>
                </ul>
              </div>
            </div>
          </div>

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
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Weather;

// https://apihub.kma.go.kr/api/typ01/url/kma_sfctm2.php?tm=202402130900&stn=259&help=1&authKey=MpuEK3mATdabhCt5gB3WYw
// tm: 시간 2024년 2월 13일 09:00시
// stn: 관측소 지역넘버 : 서울 108 강원 100 경기(수원) 119 전남 강진 259 (https://www.weather.go.kr/w/weather/aws.do <= 지역번호 확인가능, stn=0으로 설정하면 전 지점번호 조회가능)
// help=1 : 주소창에 입력 시 모든 약어 설명, 설명 필요없다면 "&help=1"를 지울 것
// authKey=MpuEK3mATdabhCt5gB3WYw : 개인키
// 정확한 약어는 하단에 정리함

/* 
#  1. TM     : 관측시각 (KST)
#  2. STN    : 국내 지점번호
#  3. WD     : 풍향 (16방위)
#  4. WS     : 풍속 (m/s)
#  5. GST_WD : 돌풍향 (16방위)
#  6. GST_WS : 돌풍속 (m/s)
#  7. GST_TM : 돌풍속이 관측된 시각 (시분)
#  8. PA     : 현지기압 (hPa)
#  9. PS     : 해면기압 (hPa)
# 10. PT     : 기압변화경향 (Code 0200) 
# 11. PR     : 기압변화량 (hPa)
# 12. TA     : 기온 (C)
# 13. TD     : 이슬점온도 (C)
# 14. HM     : 상대습도 (%)
# 15. PV     : 수증기압 (hPa)
# 16. RN     : 강수량 (mm) : 여름철에는 1시간강수량, 겨울철에는 3시간강수량
# 17. RN_DAY : 일강수량 (mm) : 해당시간까지 관측된 양(통계표)
# 18. RN_JUN : 일강수량 (mm) : 해당시간까지 관측된 양을 전문으로 입력한 값(전문)
# 19. RN_INT : 강수강도 (mm/h) : 관측하는 곳이 별로 없음
# 20. SD_HR3 : 3시간 신적설 (cm) : 3시간 동안 내린 신적설의 높이
# 21. SD_DAY : 일 신적설 (cm) : 00시00분부터 위 관측시간까지 내린 신적설의 높이
# 22. SD_TOT : 적설 (cm) : 치우지 않고 그냥 계속 쌓이도록 놔눈 경우의 적설의 높이
# 23. WC     : GTS 현재일기 (Code 4677)
# 24. WP     : GTS 과거일기 (Code 4561) .. 3(황사),4(안개),5(가랑비),6(비),7(눈),8(소나기),9(뇌전)
# 25. WW     : 국내식 일기코드 (문자열 22개) : 2자리씩 11개까지 기록 가능 (코드는 기상자원과 문의)
# 26. CA_TOT : 전운량 (1/10)
# 27. CA_MID : 중하층운량 (1/10)
# 28. CH_MIN : 최저운고 (100m)
# 29. CT     : 운형 (문자열 8개) : 2자리 코드로 4개까지 기록 가능
# 30. CT_TOP : GTS 상층운형 (Code 0509)
# 31. CT_MID : GTS 중층운형 (Code 0515)
# 32. CT_LOW : GTS 하층운형 (Code 0513)
# 33. VS     : 시정 (10m)
# 34. SS     : 일조 (hr)
# 35. SI     : 일사 (MJ/m2)
# 36. ST_GD  : 지면상태 코드 (코드는 기상자원과 문의)
# 37. TS     : 지면온도 (C)
# 38. TE_005 : 5cm 지중온도 (C)
# 39. TE_01  : 10cm 지중온도 (C)
# 40. TE_02  : 20cm 지중온도 (C)
# 41. TE_03  : 30cm 지중온도 (C)
# 42. ST_SEA : 해면상태 코드 (코드는 기상자원과 문의)
# 43. WH     : 파고 (m) : 해안관측소에서 목측한 값
# 44. BF     : Beaufart 최대풍력(GTS코드)
# 45. IR     : 강수자료 유무 (Code 1819) .. 1(Sec1에 포함), 2(Sec3에 포함), 3(무강수), 4(결측)
# 46. IX     : 유인관측/무인관측 및 일기 포함여부 (code 1860) .. 1,2,3(유인) 4,5,6(무인) / 1,4(포함), 2,5(생략), 3,6(결측)
*/
