"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import { FC } from "react";

const Notice: FC = () => {
  return (
    <div>
      <div className="min-w-[1440px] w-full min-h-[900px] flex h-screen">
        
        <Navbar />
        
        <main className="min-w-[1140px] w-full h-full flex flex-col">
          <div className="font-bold w-32 text-3xl mx-6 mt-6">공지사항</div>
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
            <div className="bg-red-100 mx-32 h-96 overflow-y-auto">게시글 내용</div>
          </div>
          <div>
            <div className="bg-blue-100 mx-32 h-64 mt-12">공지사항 List</div>
          </div>
          <Footer />
        </main>
      </div>

    </div>
  );
};

export default Notice;
