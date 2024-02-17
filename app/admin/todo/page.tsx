"use client"

import { NextPage } from "next";
import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/adminnavbar/Navbar";
import TodoList from "@/src/components/todolist/TodoList";
import TodoCalendar from "@/src/components/reactcalendar/TodoCalendar";




const Todo: NextPage = () => {

  return (
    <div className="min-w-[1440px] w-full min-h-[800px] flex h-screen">
      <Navbar />
      <main className="min-w-[1140px] w-full h-full flex flex-col">
        <div className="font-bold w-64 text-3xl mx-6 mt-6">할 일 관리</div>
        <div className="ml-[90%]">
          <OnDate />
        </div>
        <div className="bg-gray-400 w-full h-full flex items-center justify-center">
          <div className="bg-gray-200 w-1/2 h-full">
            <TodoCalendar />
          </div>
          <TodoList/>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Todo;
