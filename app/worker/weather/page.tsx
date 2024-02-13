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

          <div className="flex justify-between p-8">
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
