"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import OnWork from "@/src/components/onwork/OnWork";
import Link from "next/link";
import { useSelector } from "react-redux";
import { FC, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Pagination from "@/src/components/functional/Pagination";
import SignificantList from "@/src/components/significant/SignificantList";
import { useRouter } from "next/navigation";

const GinServerBaseURL = "http://localhost:8080"

const Significant: FC = () => {
  const router = useRouter()
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

const decreaseSignificance = () => {
  axios.put(GinServerBaseURL+'/significant',{
    id:detail.id,
    contents:detail.contents,
    warn:0,
    author_id:detail.author_id,
    reg_date:detail.reg_date,
    update_date:detail.update_date,
  },{headers:{Authorization:Auth.accessToken}})
  .then(resp=>{
    console.log(resp)
    setDetail(prev => ({
      ...prev,
      warn: 0
    }));
  })
  .catch(err => {console.log(err)})
}

const handleDelete = (id:number) => {
  axios.delete(GinServerBaseURL+`/significant?id=${id}`,{headers:{Authorization:Auth.accessToken}})
  .then((resp)=>console.log(resp))
  .catch((err)=> console.log(err))
}

const increaseSignificance = () => {
  axios.put(GinServerBaseURL+'/significant',{
    id:detail.id,
    contents:detail.contents,
    warn:1,
    author_id:detail.author_id,
    reg_date:detail.reg_date,
    update_date:detail.update_date,
  },{headers:{Authorization:Auth.accessToken}})
  .then(resp=>{
    console.log(resp)
    setDetail(prev => ({
      ...prev,
      warn: 1
    }));
  })
  .catch(err => {console.log(err)})
}

useEffect(() => {
  if (Auth.accessToken) {
    const claim: any = jwtDecode(Auth.accessToken);
    setRole(claim.authorities);
  }
  axios.get(GinServerBaseURL+'/significant/count',{headers:{Authorization:Auth.accessToken}})
  .then((resp)=>{
    setMaxPage(Math.floor((resp.data.count-1)/5)+1)
  }).catch((error)=>{
    console.log(error)
  })

  axios.get(GinServerBaseURL+`/significant?page=${page}`,{headers:{Authorization:Auth.accessToken}})
  .then((resp)=>{
    setList(resp.data)
    setDetail(resp.data[0])
  })
  .catch((error)=>console.log(error))
}, []);

  return (
    
      <div className="min-w-[1440px] w-full min-h-[900px] flex h-screen">
        
        <Navbar />
        
        <main className="min-w-[1140px] w-full h-full flex flex-col">
          <div className="font-bold w-64 text-3xl mx-6 mt-6">특이사항 목록</div>
          <div className="ml-[90%]">
            <OnDate />
          </div>
          <div>
            <div className="ml-16 mb-4 flex items-center">
              {role[0] && role[0].Role === "ROLE_ADMIN"?
              <>
              <button className="ml-10 border-solid border-red-500 border-[1px] p-1 rounded-md text-red-500 hover:text-white hover:bg-red-500"
              onClick={increaseSignificance}>알리기</button>
              <button className="ml-2 border-solid border-green-500 border-[1px] p-1 rounded-md text-green-500 hover:text-white hover:bg-green-500"
              onClick={decreaseSignificance}>내리기</button>
              </>
              :<></>}
              { detail.author_id===jwtDecode(Auth.accessToken).name || (role[0] && role[0].Role === "ROLE_ADMIN") ? 
              <button className="ml-2 border-solid border-red-500 border-[1px] p-1 rounded-md text-red-500 hover:text-white hover:bg-red-500"
              onClick={()=>{
                handleDelete(detail.id)
              }}>삭제</button>:<></>}
            </div>
            <div className="flex ml-24 gap-4 mb-6">
              <div>날짜 : {detail.update_date?formatDate(detail.update_date):""}</div>
              <div>작성자 : {detail.author_id&&detail.author_id}</div>
            </div>
            <div className={`mx-32 h-96 overflow-y-auto p-4 rounded-[20px] ${detail.warn == 1 ? 'bg-red-200' : 'bg-slate-200'}`}>{detail.contents}</div>
          </div>
          <hr className="mt-6 border-1 border-gray-300 border-solid"/>
          <div>
            <div className="relative mx-32 h-64 mt-6 ">
              <div className="w-full flex gap-4">
              <h1 className="text-xl font-bold">특이사항 List</h1>
              <Link href="./significant/write">
                <button className="hover:text-cyan-500">특이사항 작성</button>
              </Link>
              </div>
              <SignificantList list={list} setDetail={setDetail}></SignificantList>
              <Pagination page={page} setPage={setPage} maxPage={maxPage} ></Pagination>
            </div>
          </div>
          <Footer />
        </main>
      </div>
  );
};

export default Significant;
