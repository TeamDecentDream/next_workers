"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import Image from "next/image";
import { FC } from "react";
import goals from "/public/images/goals.png";
import sand from "/public/images/sand.png";
import OnWork from "@/src/components/onwork/OnWork";

const Main: FC = () => {
  return (
    <div className="min-w-[1440px] w-full min-h-[800px] flex h-screen">
      <Navbar />
      <main className="min-w-[1140px] w-full h-full flex flex-col">
        <div className="flex justify-end gap-8 p-4 pr-8">
          <OnDate />
          <OnWork></OnWork>
        </div>

        <div>
          <div className="flex justify-between h-[200px]">
            <div className="w-1/2 pl-12 h-full">
              <h1 className="font-bold w-full text-3xl my-2">공지사항</h1>
              <div className="font-semibold text-lg ml-2 my-2">
                전직원 공지사항
              </div>
              <div className="w-full h-2/3 mx-8">
                <ul className="list-disc">
                  <li>1월 평가우수직원 보너스 안내</li>
                </ul>
              </div>
              <div className="text-right pr-8">
                <a className="cursor-pointer hover:text-blue-500">
                  게시글 더보기 {">"}
                </a>
              </div>
            </div>

            <div className="mt-10 w-0 border-x-2 border-dashed border-red-500 h-full"></div>

            <div className="w-1/2 h-[225px] flex justify-center items-center flex-col">
              <h1 className="font-bold text-2xl">긴급특이사항</h1>
              <h3 className="text-xl mt-2">A-3 전염병 발생</h3>
            </div>
          </div>

          <div className="h-[300px] flex justify-between p-8">
            <div className="w-1/2 h-[300px]">
              <div className="font-bold text-3xl px-4 text-left">농장상황</div>
              <div className="w-full h-[264px] flex flex-col items-center justyfy-center">
                <div className="my-4">
                  <Image src={goals} alt="goals" width={128} height={128} />
                </div>
                <div className="h-[90px] w-full flex-col items-center justify-center ">
                  <div className="text-center">파종일 : 2024-01-22</div>
                  <div className="text-center">예상 수확일 : 2024-07-22</div>
                </div>
                <div className="w-[264px] text-right">1.6% 진헹</div>
              </div>
            </div>

            <div className="w-1/2 h-[264px] mt-[36px] flex items-center">
              <div className="px-8">
                <Image src={sand} alt="sand" width={192} height={192} />
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

export default Main;
