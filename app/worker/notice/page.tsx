"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Pagination from "@/src/components/functional/Pagination";
import Navbar from "@/src/components/navbar/Navbar";
import NotificationList from "@/src/components/notification/NotificationList";
import axios from "axios";
import { error } from "console";
import { jwtDecode } from "jwt-decode";
import { headers } from "next/headers";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GinServerBaseURL = "http://localhost:8080"


const Notice: FC = () => {
  const Auth:any = useSelector<any>(state => state.authReducer)
  const [role, setRole] = useState<Array<any>>([]);
  const [detail , setDetail] = useState({});
  const [list , setList] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(-1);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${year}/${month}/${day} ${hours}:${minutes}`;
};

  useEffect(() => {
    if (Auth.accessToken) {
      const claim: any = jwtDecode(Auth.accessToken);
      console.log(claim.authorities);
      setRole(claim.authorities);
    }
    axios.get(GinServerBaseURL+'/notification/count',{headers:{Authorization:Auth.accessToken}})
    .then((resp)=>{
      setMaxPage(Math.floor((resp.data.count-1)/5)+1)
    }).catch((error)=>{
      console.log(error)
    })

    axios.get(GinServerBaseURL+`/notification?page=${page}`,{headers:{Authorization:Auth.accessToken}})
    .then((resp)=>{
      console.log(resp)
      setList(resp.data)
      setDetail(resp.data[0])
    })
    .catch((error)=>console.log(error))
  }, []);

  


  return (
    
      <div className="min-w-[1440px] w-full min-h-[900px] flex h-screen">
        
        <Navbar />
        
        <main className="min-w-[1140px] w-full h-full flex flex-col">
          <div className="font-bold w-32 text-3xl mx-6 mt-6">공지사항</div>
          <div className="ml-[90%]">
            <OnDate />
          </div>
          <div>
            <div className="ml-16 mb-4 flex">
              <p className="text-lg font-semibold">{detail.title}</p>
              {role[0] && role[0].Role === "ROLE_ADMIN"?
              <Link href="./notice/write"><button className="mx-2 hover:text-cyan-500">공지사항 작성하기</button></Link>
              :<></>}
            </div>
            <div className="flex ml-24 gap-4 mb-6">
              <div>날짜 : {formatDate(detail.update_date)}</div>
              <div>작성자 : {detail.author_id}</div>
            </div>
            <div className="mx-32 h-96 overflow-y-auto bg-slate-200 p-4 rounded-[20px]">{detail.contents}</div>
          </div>
          <hr className="mt-6 border-1 border-gray-300 border-solid"/>
          <div>
            <div className="relative mx-32 h-64 mt-6 ">
              <h1 className="text-xl font-bold">공지사항 List</h1>
              <NotificationList list={list} setDetail={setDetail}></NotificationList>
              <Pagination page={page} setPage={setPage} maxPage={maxPage} ></Pagination>
            </div>
          </div>
          <Footer />
        </main>
      </div>

    
  );
};

export default Notice;
