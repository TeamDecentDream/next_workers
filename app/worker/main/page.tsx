"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import Image from "next/image";
import { FC } from "react";
import goals from "/public/images/goals.png";

const Main: FC = () => {
  return (
    <div>
      <div className="w-3/4 flex ">
        <Navbar />
        <main className="min-w-[1140px] h-full">
          <div>
            <div className="mx-[85%] mt-4">
              <OnDate />
            </div>
            <div className="p-8">
              <div className="flex justify-between">
                <div className="w-1/2 pl-12 h-[225px]">
                  <div className="font-bold w-32 text-3xl my-2">공지사항</div>
                  <div>
                    <div className="font-semibold text-lg mx-6 my-2">
                      전직원 공지사항
                    </div>
                    <div className=" h-[116px] mx-8">
                      - 1월 평가우수직원 보너스 안내
                    </div>
                    <div className="w-32 ml-80">게시글 더보기 {">"}</div>
                  </div>
                </div>
                <div className="w-0 border-x-2 border-dashed border-red-500"></div>
                <div className="w-1/2 h-[225px] flex justify-center items-center ">
                  <div>
                    긴급특이사항 <br /> A-3 전염병 발생
                  </div>
                </div>
              </div>

              <div className=" h-[300x] flex justify-between p-8">
                <div className=" w-[295px] h-[300px]">
                  <div className="font-bold text-3xl px-6 text-left">
                    농장상황
                  </div>
                  <div className="w-[295px] h-[264px] flex flex-col items-center justyfy-center">
                    <div className="my-4">
                      <Image src={goals} alt="goals" width={128} height={128} />
                    </div>
                    <div className="h-[90px] h-[300px] ">
                      <div>파종일 : 2024-01-22</div>
                      <div>예상 수확일 : 2024-07-22</div>
                    </div>
                    <div className="w-[264px] text-right">1.6% 진헹</div>
                  </div>
                </div>
                <div className="w-[448px] h-[264px] mt-[36px] bg-red-100 flex items-center">
                  <div className="h-[192px] w-[192px] bg-blue-100 mr-8">
                    이미지
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
                <div className="font-bold text-3xl bg-red-100 mb-6">
                  주간예보
                </div>
                <div className="h-[161px] bg-red-300">
                  <div className="flex gap-8 justify-center">
                    <div>
                      <div className="w-[92px] h-[92px] bg-blue-100">
                        이미지
                      </div>
                      <ul>
                        <li>1월 24일(금)</li>
                        <li>최고 : 5°C</li>
                        <li>최저 : -10°C</li>
                      </ul>
                    </div>
                    <div className="h-[161px]">
                      <div className="w-[92px] h-[92px] bg-blue-100">
                        이미지
                      </div>
                      <ul>
                        <li>1월 24일(금)</li>
                        <li>최고 : 5°C</li>
                        <li>최저 : -10°C</li>
                      </ul>
                    </div>
                    <div className="h-[161px]">
                      <div className="w-[92px] h-[92px] bg-blue-100">
                        이미지
                      </div>
                      <ul>
                        <li>1월 24일(금)</li>
                        <li>최고 : 5°C</li>
                        <li>최저 : -10°C</li>
                      </ul>
                    </div>
                    <div className="h-[161px]">
                      <div className="w-[92px] h-[92px] bg-blue-100">
                        이미지
                      </div>
                      <ul>
                        <li>1월 24일(금)</li>
                        <li>최고 : 5°C</li>
                        <li>최저 : -10°C</li>
                      </ul>
                    </div>
                    <div className="h-[161px]">
                      <div className="w-[92px] h-[92px] bg-blue-100">
                        이미지
                      </div>
                      <ul>
                        <li>1월 24일(금)</li>
                        <li>최고 : 5°C</li>
                        <li>최저 : -10°C</li>
                      </ul>
                    </div>
                    <div className="h-[161px]">
                      <div className="w-[92px] h-[92px] bg-blue-100">
                        이미지
                      </div>
                      <ul>
                        <li>1월 24일(금)</li>
                        <li>최고 : 5°C</li>
                        <li>최저 : -10°C</li>
                      </ul>
                    </div>
                    <div className="h-[161px]">
                      <div className="w-[92px] h-[92px] bg-blue-100">
                        이미지
                      </div>
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
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
