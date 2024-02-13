"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import Image from "next/image";
import { FC } from "react";
import monitoring from "/public/images/monitoring.png";

import OnWork from "@/src/components/onwork/OnWork";

const CCTV: FC = () => {
  return (
    <div className="min-w-[1440px] min-h-[800px] w-full flex h-screen">
      <Navbar />
      <main className="min-w-[1140px] w-full h-full flex flex-col items-center justify-center">
        <div className="w-full flex justify-end mt- gap-8 p-4 pr-8">
          <OnDate />
          <OnWork />
        </div>
        <div className="bg-red-200 min-w-[1140px] mb-8">
          <h1 className="font-bold w-full text-3xl">CCTV 관리</h1>
          <h3 className="font-semibold text-lg mt-4"> 스마트팜 토마토</h3>
        </div>
        <div>
          <div>
            <div className="flex min-w-[1140px] min-h-[500px] bg-red-200">
              <video src="https://www.youtube.com/watch?v=-JhoMGoAfFc"></video>
            </div>
          </div>
          <ul>
            <li>CCTV 업체명 : 멋사 CCTV</li>
            <li>CCTV A/S 연락처 : 010-1234-5678 (담당자 : 김경석)</li>
          </ul>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default CCTV;
