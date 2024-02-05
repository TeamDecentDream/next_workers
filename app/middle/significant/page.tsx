"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/midnavbar/Navbar";
import { FC } from "react";

const Significant: FC = () => {
  return (
    <div>
      <div className="flex">
        <div className="">
          <Navbar />
        </div>
        <main className="w-[1440px] h-full grow">
          <div className="font-bold w-64 text-3xl mx-6 mt-6">특이사항 보고</div>
          <div className="ml-[90%]">
            <OnDate />
          </div>
          <div>
            <div className="text-lg ml-16 mb-4 font-semibold">농부</div>
            <div className="flex ml-24 gap-4 my-8">
              <div>
                <OnDate />
              </div>
              <div>작성자</div>
            </div>
            <div className="bg-red-100 mx-32 h-[700px] mb-[100px]">
              특이사항 보고(게시판)
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Significant;
