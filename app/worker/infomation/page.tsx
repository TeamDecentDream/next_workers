"use client";

import Attendance from "@/src/components/attendance/attendance";
import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import OnWork from "@/src/components/onwork/OnWork";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GinServerBaseURL="http://localhost:8080"

const Infomation: FC = () => {
  const Auth:any = useSelector<any>(state => state.authReducer)
  const [attendanceList, setAttendanceList] = useState([]);

  useEffect(()=>{
    axios.get(GinServerBaseURL+`/attendance/timelogs`,{headers: {Authorization:Auth.accessToken}})
    .then((resp)=>{
      console.log(resp)
      setAttendanceList(resp.data.timeLogs)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div className="min-w-[1440px] w-full min-h-[900px] flex h-screen">
      <Navbar />
      <main className="min-w-[1140px] w-full h-full flex flex-col">
        <div className="flex justify-end gap-8 p-4 pr-8 mt-4">
          <OnDate />
          <OnWork />
        </div>
        <div className="font-bold text-3xl mx-12">내 정보</div>
        <div>
          <div className="min-h-[640px] w-full px-16 py-8">
            
            <ul className="">
              <li className="w-full mt-1 flex">
              <span className="ml-16 w-full">이름  :  {Auth.accessToken && jwtDecode(Auth.accessToken)?.name}</span>
              </li>
              <li className="w-full mt-1">
              <span className="ml-16 w-full">E-Mail : {Auth.accessToken && jwtDecode(Auth.accessToken)?.email}</span>
              </li>
              <li className="w-full mt-1">
              <span className="ml-16 w-full">권한 : {Auth.accessToken && jwtDecode(Auth.accessToken).authorities[0].Role}</span>
              </li>
              <li className="w-full mt-1">
              <span className="ml-16 w-full">지갑주소 : {Auth.address}</span>
              </li>
            </ul>

            <div className="mt-4 mx-auto w-5/6">
              <div className=" px-4 mb-4 text-lg font-semibold">
                월급 지급 내역
              </div>
              <div className=" border-[1px]  border-black">
                <div className="flex justify-center">
                  <div className="bg-lightGreen w-1/4 py-2 text-center">
                    년/월
                  </div>
                  <div className="bg-lightGreen w-1/4 py-2 text-center">
                    지급금액
                  </div>
                  <div className="bg-lightGreen w-1/4 py-2 text-center">
                    지갑주소
                  </div>
                  <div className="bg-lightGreen w-1/4 py-2 text-center">
                    트렌잭션 주소
                  </div>
                </div>
                <div className=" min-h-48"></div>
              </div>
            </div>

            <div className="mt-4 mx-auto w-5/6">
              <div className=" px-4 mb-4 text-lg font-semibold">
                출/퇴근 내역
              </div>
              <div className=" border-[1px]  border-black">
                <div className="flex justify-center">
                  <div className="bg-lightGreen w-1/2 py-2 text-center">
                    출근시각
                  </div>
                  <div className="bg-lightGreen w-1/2 py-2 text-center">
                    퇴근시각
                  </div>
                </div>
                <div className=" min-h-48">
                  <Attendance list={attendanceList}></Attendance>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
        <Footer />
      </main>
    </div>
  );
};

export default Infomation;
