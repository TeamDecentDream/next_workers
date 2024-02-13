"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import { FC } from "react";

import OnWork from "@/src/components/onwork/OnWork";
import YouTube from "react-youtube"; //

const CCTV: FC = () => {
  return (
    <div className="min-w-[1440px] min-h-[800px] w-full flex h-screen">
      <Navbar />
      <main className="min-w-[1140px] w-full h-full flex flex-col items-center justify-center">
        <div className="w-full flex justify-end mt- gap-8 p-4 pr-8">
          <OnDate />
          <OnWork />
        </div>
        <div className=" min-w-[1140px] mb-6">
          <h1 className="font-bold w-full text-3xl">CCTV 관리</h1>
          <h3 className="font-semibold text-lg mt-4"> 스마트팜 토마토</h3>
        </div>
        <div>
          <div>
            <div className="flex min-w-[1140px] min-h-[500px]">
              <YouTube
                videoId="-JhoMGoAfFc" //동영상 주소
                opts={{
                  width: "1140px",
                  height: "620px",
                  playerVars: {
                    autoplay: 1, //자동 재생 여부
                    modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                    loop: 1, //반복 재생
                    playlist: "-JhoMGoAfFc" //반복 재생으로 재생할 플레이 리스트
                  }
                }}
                onReady={(e) => {
                  e.target.mute(); //소리 끔
                }}
              />
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
