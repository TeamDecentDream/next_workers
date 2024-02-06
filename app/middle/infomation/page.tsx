"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/midnavbar/Navbar";
import { FC } from "react";

const infomation: FC = () => {
  return (
    <div>
      <div className="flex">
        <div className="">
          <Navbar />
        </div>
        <main className="w-[1440px] h-full grow">
          <div className="font-bold w-48 text-3xl mx-6 mt-6">내 정보</div>
          <div className="ml-[90%]">
            <OnDate />
          </div>
          <div>
            <div className="flex ml-24 gap-4 my-8">
              <div>
                <div>이름 :</div>
                <div>E-mail :</div>
                <div>지갑 주소 :</div>
                <div>근무내역 :</div>
              </div>
            </div>
            <div className="bg-red-100 mx-32 h-[700px] mb-[100px]">
              월급 지급 내역 (도표 생성 예정)
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default infomation;
