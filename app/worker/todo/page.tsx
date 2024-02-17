"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import TodoCalendar from "@/src/components/reactcalendar/TodoCalendar";
import { FC } from "react";

const Todo: FC = () => {
  return (
    <div className="min-w-[1440px] w-full min-h-[900px] flex h-screen">
        
        <Navbar />
        
        <main className="min-w-[1140px] w-full h-full flex flex-col">
        <div className="font-bold w-64 text-3xl mx-6 mt-6">할 일 관리</div>
          <div className="ml-[90%]">
            <OnDate />
          </div>
          <div className="bg-gray-200 w-full h-full p-12">
            <div className="bg-gray-400 w-full h-full ">
              <TodoCalendar />
            </div>
          </div>
          <Footer />
        </main>
      </div>

  );
};

export default Todo;
