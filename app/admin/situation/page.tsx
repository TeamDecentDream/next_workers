"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import Image from "next/image";
import { FC } from "react";
import cctv from "/public/images/cctv.png";

import OnWork from "@/src/components/onwork/OnWork";

const Situation: FC = () => {
  return (
    <div className="min-w-[1440px] min-h-[800px] w-full flex h-screen">
      <Navbar />
      <main className="min-w-[1140px] w-full h-full flex flex-col items-center justify-center">
        <div className="w-full flex justify-end mt- gap-8 p-4 pr-8">
          <OnDate />
          <OnWork />
        </div>

        <div>
          <h1 className="font-bold w-full text-3xl">농가상황 모니터링</h1>
          <div className="my-8 pl-8">
            <ul>
              <li>농가 이름 : 스마트팜 토마토</li>
              <li>주소지 : 경기도 남양주시 다산동</li>
              <li>농작물 : 토마토(품종 : 완숙토마토)</li>
              <li>현재 농가 운영 인원 / 면적(평) : 8 / 3000</li>
            </ul>
          </div>
          <div className="flex min-w-[1140px] h-[290px] justify-between my-4">
            <div className="w-1/2 ">
              <div className="flex justify-between mx-16 my-8">
                <div className="text-lg font-bold">CCTV 관리</div>
                <button className="w-20 h-8 border-2 rounded-full border-darkGreen font-semibold">
                  이 동 {">"}
                </button>
              </div>
              <div className="flex justify-center gap-16 border-r-2 border-gray-300">
                <Image src={cctv} alt="cctv" width={225} height={225} />
                <ul className="mt-6">
                  <li>CCTV : 고정형(9대)</li>
                  <li>CCTV 고장 현황 : Cam 9</li>
                  <li>CCTV 보수 요청 : 1대</li>
                </ul>
              </div>
            </div>

            <div className="w-1/2 ">
              <div className="flex justify-between mx-16 my-8">
                <div className="text-lg font-bold">해당 농가 관리</div>
                <button className="w-20 h-8 border-2 rounded-full border-darkGreen font-semibold">
                  이 동 {">"}
                </button>
              </div>
              <ul className="mt-14 ml-8">
                <li>· 1월 소비품목 / 구매품목 보고</li>
                <li>· 상반기 예상 출하량</li>
                <li>· 2번 비닐하우스 / 2번 스프링쿨러 수리요청</li>
                <li>· 농가 인원 증원 요청</li>
              </ul>
            </div>
          </div>

          <div className="max-w-[1140px] mt-12">
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

export default Situation;
