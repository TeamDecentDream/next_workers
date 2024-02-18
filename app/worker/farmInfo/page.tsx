"use client";

import OauthDetailComponents from "@/src/components/Oauth/OauthDetailComponents";
import Attendance from "@/src/components/attendance/attendance";
import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Pagination from "@/src/components/functional/Pagination";
import Navbar from "@/src/components/navbar/Navbar";
import OnWork from "@/src/components/onwork/OnWork";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GinServerBaseURL="http://localhost:8080"

const FarmInfomation: FC = () => {
  const Auth:any = useSelector<any>(state => state.authReducer)
  const [list, setList] = useState([]);
  const [maxPage, setMaxPage] = useState(-1);
  const [page, setPage] = useState<number>(1);

  useEffect(()=>{
    loadMember();
  },[])

  const loadMember = ()=>{
    axios.get(GinServerBaseURL+'/member/count',{headers:{Authorization:Auth.accessToken}})
      .then((resp)=>{
        setMaxPage(Math.floor((resp.data.count-1)/5)+1)
      }).catch((error)=>{
        console.log(error)
      })
    
      axios.get(GinServerBaseURL+`/member?page=${page}`,{headers:{Authorization:Auth.accessToken}})
      .then((resp)=>{
        console.log(resp)
        setList(resp.data)
      })
      .catch((error)=>console.log(error))
  }


  return (
    <div className="min-w-[1440px] w-full min-h-[900px] flex h-screen">
      <Navbar />

      <main className="min-w-[1140px] w-full h-full flex flex-col">
        <div className="font-bold w-64 text-3xl mx-6 mt-6">전체 회원</div>
        <div className="ml-[90%]">
          <OnDate />
        </div>

        <div className="mx-32 mt-4 mb-2 overflow-y-auto h-[760px] p-4 rounded-[20px] relative">
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th
                  className="border border-gray-500 px-4 py-2"
                  style={{ width: "8%" }}
                >
                  이름
                </th>
                <th
                  className="border border-gray-500 px-4 py-2"
                  style={{ width: "8%" }}
                >
                  이메일
                </th>
                <th
                  className="border border-gray-500 px-4 py-2"
                  style={{ width: "10%" }}
                >
                  권한
                </th>
                <th
                  className="border border-gray-500 px-4 py-2"
                  style={{ width: "18%" }}
                >
                  지갑주소
                </th>
                <th
                  className="border border-gray-500 px-4 py-2"
                  style={{ width: "12%" }}
                >
                  신청일
                </th>
                <th
                  className="border border-gray-500 px-4 py-2"
                  style={{ width: "12%" }}
                >
                  확인일
                </th>
                <th
                  className="border border-gray-500 px-4 py-2"
                  style={{ width: "6%" }}
                >
                  신청상태
                </th>
                <th
                  className="border border-gray-500 px-4 py-2"
                  style={{ width: "7%" }}
                >
                  처리
                </th>
              </tr>
            </thead>
            <tbody>
              <OauthDetailComponents list={list} loadMember={loadMember}></OauthDetailComponents>
            </tbody>
          </table>
          <Pagination
            page={page}
            setPage={setPage}
            maxPage={maxPage}
          ></Pagination>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default FarmInfomation;
