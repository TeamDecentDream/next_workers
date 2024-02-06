"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/midnavbar/Navbar";
import { FC } from "react";

const Notice: FC = () => {
  return (
    <div>
      <div className="flex">
        <div className="">
          <Navbar />
        </div>
        <main className="w-[1440px] h-full grow">
          <div className="font-bold w-32 text-3xl mx-6 mt-6">일기예보</div>
          <div className="ml-[90%]">
            <OnDate />
          </div>
          <div>
            <div className="text-lg ml-16 mb-4 font-semibold">
              1월 평가 우수 직원 보너스 안내
            </div>
            <div className="flex ml-24 gap-4 mb-6">
              <div>날짜</div>
              <div>작성자</div>
            </div>
            <div className="flex justify-between items-center mx-32 h-96 gap-12">
              <div className="bg-red-200 w-[480px] h-96">SVG 예정</div>
              <div className="bg-blue-200 w-64 h-24 items-center">
                기상 주의보 유무 Alart
              </div>
              <div className="bg-red-200 w-[480px] h-96">게시글 내용</div>
            </div>
          </div>
          <div>
            <div className="bg-blue-100 mx-32 h-64 mt-20">
              일기 예보 날짜별(1주 예정)
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Notice;
