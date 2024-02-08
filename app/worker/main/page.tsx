"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import { FC } from "react";

const Main: FC = () => {
  return (
    <div>
      <div className="flex min-w-[1440px]">
         <Navbar />
         <main className="w-3/4 min-w-[1140px] h-full grow">
          <div>
            <div className="font-bold w-32 text-3xl mx-6 mt-12">공지사항</div>
            <div className="ml-[90%]">
              <OnDate />
            </div>
            <div className="mx-6 my-6">
              <div className="font-semibold text-lg ml-16 mb-6 w-36">
                전직원 공지사항
              </div>
              <div className="flex justify-between">
                <div className="w-[480px] h-[300px] bg-green-100 mx-auto">
                  게시글
                </div>
                <div className="w-0 border-x-2 border-dashed border-red-500"></div>
                <div className="w-[480px] h-[300px] bg-green-100 mx-auto">
                  긴급특이사항
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold w-32 text-3xl mx-6 my-6">농장상황</div>
            <div className="mx-6 my-12">
              <div className="flex gap-8 justify-between">
                <div className="w-[480px] h-[300px] bg-green-100 mx-auto">
                  예상 수확량 등
                </div>
                <div className="w-0 border-x-2 border-dashed border-red-500"></div>
                <div className="w-[480px] h-[300px] bg-green-100 mx-auto">
                  농가 온도계 등
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold w-32 text-3xl mx-6 my-6">주간예보</div>
            <div className="w-800 h-48 items-center text-center bg-red-300">
              주간 예보 데이터 svg 정리예정
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
