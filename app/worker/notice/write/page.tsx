"use client";

import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import NotificationInput from "@/src/components/notification/NotificationInput";
import React from "react";

const NoticeWrite = () => {
  return (
    
      <div className="min-w-[1440px] w-full min-h-[900px] flex h-screen">
        <Navbar />
        <main className="min-w-[1140px] w-full h-full flex flex-col">
          <div className="flex justify-end gap-8 p-4 pr-8">
            <OnDate />
            <button>출근</button>
          </div>
          <div className="px-12 w-full">
          <h1 className="font-bold w-full text-3xl my-2">공지사항 작성하기</h1>
            <NotificationInput></NotificationInput>
          </div>
          <Footer />
        </main>
      </div>
    
  );
};

export default NoticeWrite;
