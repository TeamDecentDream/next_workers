"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import { FC } from "react";

const Notice: FC = () => {
  return (
    <div>
      <div className="flex">
        <div className="">
          <Navbar />
        </div>
        <main className="w-[1440px] h-full grow">
          <div className="font-bold w-32 text-3xl mx-6 mt-6">공지사항</div>
          <div className="ml-[90%]">
            <OnDate />
          </div>
          <div className="">
            <div>1월 평가 우수 직원 보너스 안내</div>
            <div className="flex gap-8">
              <div>날짜</div>
              <div>작성자</div>
            </div>
            <div className="bg-red-100 mx-32 h-96">게시글 내용</div>
          </div>
          <div>
            <div>공지사항 List</div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Notice;
