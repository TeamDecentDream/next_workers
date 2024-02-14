"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import { FC } from "react";
import OnWork from "@/src/components/onwork/OnWork";

const Reported: FC = () => {
  return (
    <div className="min-w-[1440px] min-h-[800px] w-full flex h-screen">
      <Navbar />
      <main className="min-w-[1140px] w-full h-full flex flex-col items-center justify-center">
        <div className="w-full flex justify-end mt-4 gap-8 p-4 pr-8">
          <OnDate />
          <OnWork />
        </div>
        <div className="min-w-[1140px] mb-6">
          <h1 className="font-bold w-full text-3xl">농가상황 모니터링</h1>
          <h3 className="font-semibold text-lg my-4 ml-8">
            해당 농가 보고현황
          </h3>
        </div>
        <div className="min-w-[1140px] min-h-[650px] ml-16">
          <div className="my-4 ml-4">• 1월 소비품목 / 구매 품목 보고</div>
          <ul>
            <li>사업장 : 스마트팜 토마토</li>
            <li>주소지 : 경기도 남양주시 다산동</li>
          </ul>
          <div className="my-4 ml-4">• 보고내역</div>
          <div className="my-4">
            <div className="my-4">1. 농기구</div>
            <ul>
              <li>1) 농기구 1 : 1,211,000,000</li>
              <li>2) 농기구 2 : 3,341,000,000</li>
              <li>3) 농기구 3 : 21,000,000</li>
            </ul>
          </div>
          <div className="my-4">
            <div className="my-4">2. 소비재</div>
            <ul>
              <li>1) 비료(퇴비) : 12,000,000</li>
              <li>2) 비료(깻묵) : 21,000,000</li>
              <li>3) 영양제1(...) : 3,000,000</li>
              <li>4) 영양제2(...) : 2,000,000</li>
              <li>5) 영양제3(...) : 4,000,000</li>
              <li>6) 영양제4(...) : 5,000,000</li>
            </ul>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Reported;
