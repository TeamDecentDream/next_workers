"use client";

import OauthEvaluationComponents from "@/src/components/Oauth/OauthEvaluationComponents";
import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Pagination from "@/src/components/functional/Pagination";
import Navbar from "@/src/components/navbar/Navbar";
import axios from "axios";
import { ChangeEvent, ChangeEventHandler, FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GinServerBaseURL = "http://localhost:8080"

const EvaluationList: FC = () => {

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
        <div className="font-bold w-64 text-3xl mx-6 mt-6">농부평가</div>
        <div className="ml-[90%]">
          <OnDate />
        </div>
        <div>
          <div className="mx-32 overflow-y-auto w-[1140px] h-[800px] bg-slate-50 p-4 rounded-[20px] relative">
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
                    style={{ width: "20%" }}
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
                    style={{ width: "20%" }}
                  >
                    평가일
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
                <OauthEvaluationComponents list={list} loadMember={loadMember}></OauthEvaluationComponents>
              </tbody>
            </table>
            <Pagination
            page={page}
            setPage={setPage}
            maxPage={maxPage}
          ></Pagination>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default EvaluationList;
