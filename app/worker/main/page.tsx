"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import { FC } from "react";

const Main: FC = () => {
  return (
    <div>
      <div className="flex">
        <div className="">
          <Navbar />
        </div>
        <main className="bg-red-100 w-[1440px] h-[1024px] grow">
          <div>
            <div className="bg-yellow-200 w-24 text-2xl mx-6 my-6">
              공지사항
            </div>
            <div className="ml-[90%]">
              <OnDate />
            </div>
            <div className="bg-blue-200 mx-6 my-6">
              <div className="lg:ml-16 mb-6 w-32">전직원 공지사항</div>
              <div className="flex gap-8 justify-between">
                <div className="w-[400px] h-[200px] bg-green-100 ml-20">
                  게시글
                </div>
                <div className="w-0 border-x-2 border-dashed border-red-500"></div>
                <div className="w-[400px] h-[200px] bg-green-100 mr-20">
                  긴급특이사항
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-yellow-200 w-24 text-2xl mx-6 my-6">
              농장상황
            </div>
            <div className="bg-blue-200 mx-6 my-6">
              <div className="lg:ml-16 mb-6 w-32">전직원 공지사항</div>
              <div className="flex gap-8 justify-between">
                <div className="w-[400px] h-[200px] bg-green-100 ml-20">
                  예상 수확량 등
                </div>
                <div className="w-0 border-x-2 border-dashed border-red-500"></div>
                <div className="w-[400px] h-[200px] bg-green-100 mr-20">
                  농가 온도계 등
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-yellow-200 w-24 text-2xl mx-6 my-6">
              주간예보
            </div>
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
