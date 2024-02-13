"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import OnWork from "@/src/components/onwork/OnWork";
import { FC } from "react";

const Notice: FC = () => {
  return (
    <div className="min-w-[1440px] w-full min-h-[900px] flex h-screen">
      <Navbar />
      <main className="min-w-[1140px] w-full h-full flex flex-col">
        <div className="font-bold text-3xl mx-6 mt-14">특이사항 보고</div>
        <div className="flex justify-end gap-8 p-4 pr-8">
          <OnDate />
          <OnWork />
        </div>
        <div>
          <div className="min-h-[640px] p-4 my-8 px-4">
            <ul className="grid grid-cols-2 text-center text-lg w-36">
              <li className="w-32 mt-1">사항명</li>
              <span className="ml-16 text-2xl">:</span>
              <li className="w-32 mt-1">사업 중요도</li>
              <span className="ml-16 text-2xl">:</span>
              <li className="w-32 mt-1">사항 발견시각</li>
              <span className="ml-16 text-2xl">:</span>
              <li className="w-32 mt-4">비고</li>
            </ul>
          </div>
        </div>

        <div></div>
        <Footer />
      </main>
    </div>
  );
};

export default Notice;
