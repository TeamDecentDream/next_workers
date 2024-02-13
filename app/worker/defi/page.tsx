"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import { FC } from "react";

const Defi: FC = () => {
  return (
    <div className="min-w-[1440px] w-full min-h-[900px] flex h-screen">
      <Navbar />

      <main className="min-w-[1140px] w-full h-full flex flex-col">
        <div className="font-bold w-48 text-3xl mx-6 mt-6">DeFi</div>
        <div className="ml-[90%]">
          <OnDate />
        </div>
        <div className="h-full">
          <div className="text-lg ml-16 mb-4 font-semibold">통계</div>
          <div className="flex ml-24 gap-4 my-8">
            <div>
              <OnDate />
            </div>
            <div>해당 농가</div>
          </div>
          <div className="bg-red-100 mx-32 h-5/6 mb-20">
            LP 풀 정보(예정)
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Defi;
