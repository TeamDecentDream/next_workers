"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";

const EvaluationList: FC = () => {
  return (
    <div className="min-w-[1440px] w-full min-h-[900px] flex h-screen">
      <Navbar />

      <main className="min-w-[1140px] w-full h-full flex flex-col">
        <div className="font-bold w-64 text-3xl mx-6 mt-6">농부평가</div>
        <div className="ml-[90%]">
          <OnDate />
        </div>
        <div>
          <div className="ml-16 mb-4 flex items-start flex-col">
            <p className="text-xl font-semibold">평가 대상 : ㅁㅁㅁ님</p>
          </div>
          <div className="flex ml-24 gap-4 mb-6">
            <div>날짜</div>
            <div>작성자</div>
          </div>
          <div className="mx-32 overflow-y-auto h-[700px] bg-slate-50 p-4 rounded-[20px] relative">
            <table className="w-full">
              <thead>
                <tr>
                  <th
                    className="border border-gray-500 px-4 py-2"
                    style={{ width: "10%" }}
                  >
                    이름
                  </th>
                  <th
                    className="border border-gray-500 px-4 py-2"
                    style={{ width: "30%" }}
                  >
                    이메일
                  </th>
                  <th
                    className="border border-gray-500 px-4 py-2"
                    style={{ width: "30%" }}
                  >
                    지갑 주소
                  </th>
                  <th
                    className="border border-gray-500 px-4 py-2"
                    style={{ width: "10%" }}
                  >
                    계급
                  </th>
                  <th
                    className="border border-gray-500 px-4 py-2"
                    style={{ width: "10%" }}
                  >
                    농가명
                  </th>
                  <th
                    className="border border-gray-500 px-4 py-2"
                    style={{ width: "10%" }}
                  >
                    평가하기
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-500 px-4 py-2">
                    이름 데이터
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    이메일 데이터
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    지갑 주소 데이터
                  </td>
                  <td className="border border-gray-500 px-4 py-2">계급</td>
                  <td className="border border-gray-500 px-4 py-2">농가</td>
                  <td className="border border-gray-500 px-4 py-2">
                    <button>평가</button>
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-500 px-4 py-2">
                    이름 데이터
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    이메일 데이터
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    지갑 주소 데이터
                  </td>
                  <td className="border border-gray-500 px-4 py-2">계급</td>
                  <td className="border border-gray-500 px-4 py-2">농가</td>
                  <td className="border border-gray-500 px-4 py-2">
                    <button>평가</button>
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-500 px-4 py-2">
                    이름 데이터
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    이메일 데이터
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    지갑 주소 데이터
                  </td>
                  <td className="border border-gray-500 px-4 py-2">계급</td>
                  <td className="border border-gray-500 px-4 py-2">농가</td>
                  <td className="border border-gray-500 px-4 py-2">
                    <button>평가</button>
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-500 px-4 py-2">
                    이름 데이터
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    이메일 데이터
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    지갑 주소 데이터
                  </td>
                  <td className="border border-gray-500 px-4 py-2">계급</td>
                  <td className="border border-gray-500 px-4 py-2">농가</td>
                  <td className="border border-gray-500 px-4 py-2">
                    <button>평가</button>
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-500 px-4 py-2">
                    이름 데이터
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    이메일 데이터
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    지갑 주소 데이터
                  </td>
                  <td className="border border-gray-500 px-4 py-2">계급</td>
                  <td className="border border-gray-500 px-4 py-2">농가</td>
                  <td className="border border-gray-500 px-4 py-2">
                    <button>평가</button>
                  </td>
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
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default EvaluationList;
