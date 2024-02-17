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
        <div className="flex  justify-between  mx-12 mt-12">
          <div className="font-bold w-64 text-3xl">할 일 관리</div>
          <OnDate />
        </div>
        <div className="w-full h-full px-12 pt-16">
          <div className="w-full h-[600px] ">
            <TodoCalendar />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Todo;
