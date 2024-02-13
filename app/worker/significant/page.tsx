"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import OnWork from "@/src/components/onwork/OnWork";
import { FC } from "react";

const Significant: FC = () => {
  return (
    
      <div className="min-w-[1440px] w-full min-h-[900px] flex h-screen">
        
        <Navbar />
        
        <main className="min-w-[1140px] w-full h-full flex flex-col">
          <div className="font-bold w-64 text-3xl mx-6 mt-6">특이사항 목록</div>
          <div className="ml-[90%]">
            <OnDate />
          </div>
          <div>
            <div className="ml-16 mb-4 flex items-center">
              <p className="text-lg font-semibold">1월 평가 우수 직원 보너스 안내</p>
              <button className="ml-10 border-solid border-green-500 border-[1px] p-1 rounded-md text-green-500 hover:text-white hover:bg-green-500">공지올리기</button>
              <button className="ml-2 border-solid border-red-500 border-[1px] p-1 rounded-md text-red-500 hover:text-white hover:bg-red-500">공지내리기</button>
            </div>
            <div className="flex ml-24 gap-4 mb-6">
              <div>날짜</div>
              <div>작성자</div>
            </div>
            <div className="mx-32 h-96 overflow-y-auto bg-slate-200 p-4 rounded-[20px]">게시글 내용</div>
          </div>
          <hr className="mt-6 border-1 border-gray-300 border-solid"/>
          <div>
            <div className="relative mx-32 h-64 mt-6 ">
              <h1 className="text-xl font-bold">특이사항 List</h1>
              <div className="absolute bottom-4 right-4 flex gap-4">
                <button>이전</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>다음</button>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
  );
};

export default Significant;
