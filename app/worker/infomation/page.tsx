"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import OnWork from "@/src/components/onwork/OnWork";
import { FC } from "react";

const Infomation: FC = () => {
  return (
    <div className="min-w-[1440px] w-full min-h-[900px] flex h-screen">
      <Navbar />
      <main className="min-w-[1140px] w-full h-full flex flex-col">
        <div className="font-bold text-3xl mx-6 mt-14">내 정보</div>
        <div className="flex justify-end mt-4 gap-8 p-4 pr-8">
          <OnDate />
          <OnWork />
        </div>
        <div>
          <div className="min-h-[640px] p-4 my-8 px-4">
            <ul className="grid grid-cols-2 text-center w-32">
              <li className="w-32 mt-1">이름</li>
              <span className="ml-16 text-2xl">:</span>
              <li className="w-32 mt-1">E-Mail</li>
              <span className="ml-16 text-2xl">:</span>
              <li className="w-32 mt-1">지갑주소</li>
              <span className="ml-16 text-2xl">:</span>
              <li className="w-32 mt-1">근무 내역</li>
              <span className="ml-16 text-2xl">:</span>
            </ul>
            <div className="mt-20 mx-auto w-[1140px]">
              <div className=" px-4 mb-4 text-lg font-semibold">
                월급 지급 내역
              </div>
              <div className=" border-[1px]  border-black">
                <div className="flex justify-center">
                  <div className="bg-lightGreen w-1/4 py-2 text-center">
                    년/월
                  </div>
                  <div className="bg-lightGreen w-1/4 py-2 text-center">
                    지급금액
                  </div>
                  <div className="bg-lightGreen w-1/4 py-2 text-center">
                    지갑주소
                  </div>
                  <div className="bg-lightGreen w-1/4 py-2 text-center">
                    트렌잭션 주소
                  </div>
                </div>
                <div className=" min-h-[320px]"></div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
        <Footer />
      </main>
    </div>
  );
};

export default Infomation;
