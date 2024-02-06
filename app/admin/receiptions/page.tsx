"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/adminnavbar/Navbar";
import { FC } from "react";

const Receiptions: FC = () => {
  return (
    <div>
      <div className="flex">
        <div className="">
          <Navbar />
        </div>
        <main className="w-[1440px] h-full grow">
          <div className="font-bold w-32 text-3xl mx-6 mt-6">거래내역</div>
          <div className="ml-[90%]">
            <OnDate />
          </div>
          <div>
            <div className="text-lg ml-16 mb-4 font-semibold">1월</div>
            <div className="flex ml-24 gap-4 mb-6">
              <div>날짜</div>
              <div>작성자</div>
            </div>
            <div className="bg-red-100 mx-32 h-[700px]">게시글 내용</div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Receiptions;
