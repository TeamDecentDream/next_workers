"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";

const TransactionList: FC = () => {
  return (
    <div className="min-w-[1440px] w-full min-h-[900px] flex h-screen">
      <Navbar />

      <main className="min-w-[1140px] w-full h-full flex flex-col">
        <div className="font-bold w-64 text-3xl mx-6 mt-6">거래내역</div>
        <div className="ml-[90%]">
          <OnDate />
        </div>
        
          <div className="mx-32 mt-4 mb-2 overflow-y-auto h-[760px] bg-slate-50 p-4 rounded-[20px] relative">
            <table className="w-full">
              <thead>
                <tr>
                  <th
                    className="border border-gray-500 px-4 py-2"
                    style={{ width: "30%" }}
                  >
                    거래내용
                  </th>
                  <th
                    className="border border-gray-500 px-4 py-2"
                    style={{ width: "10%" }}
                  >
                    판매/구매
                  </th>
                  <th
                    className="border border-gray-500 px-4 py-2"
                    style={{ width: "20%" }}
                  >
                    거래처
                  </th>
                  <th
                    className="border border-gray-500 px-4 py-2"
                    style={{ width: "20%" }}
                  >
                    거래금액
                  </th>
                  <th
                    className="border border-gray-500 px-4 py-2"
                    style={{ width: "10%" }}
                  >
                    회계확인
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-500 px-4 py-2">
                    메로나
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    판매
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    GS편의점
                  </td>
                  <td className="border border-gray-500 px-4 py-2">1500원</td>
                  <td className="border border-gray-500 px-4 py-2">확인</td>
                  
                </tr>

              </tbody>
            </table>
            <div className="flex w-1/3 m-auto justify-center gap-4 absolute bottom-4 right-4">
                <button>이전</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>다음</button>
              </div>
          </div>
        
        <Footer />
      </main>
    </div>
  );
};

export default TransactionList;
