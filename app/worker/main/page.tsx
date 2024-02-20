"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import goals from "/public/images/goals.png";
import sand from "/public/images/sand.png";
import OnWork from "@/src/components/onwork/OnWork";
import Link from "next/link";
import ForecastBar from "@/src/components/forecastbar/ForecastBar";
import axios from "axios";
import { useSelector } from "react-redux";

const GinServerBaseURL = "http://localhost:8080"

const Main: FC = () => {
  const [list , setList] = useState([]);
  const [significant , setSignificant] = useState<string>("");
  const [color , setColor] = useState<string>("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const Auth:any = useSelector<any>(state => state.authReducer)
  const startDate = new Date('2024-01-22');
  const endDate = new Date('2024-07-22');

  const calculateProgress = () => {
    const totalDuration = endDate.getTime() - startDate.getTime();
    const passedDuration = currentDate.getTime() - startDate.getTime();
    const progress = (passedDuration / totalDuration) * 100;
    return progress.toFixed(1); // 소수점 첫째 자리까지 표시
  };

  useEffect(() => {
    setCurrentDate(new Date());

    axios.get(GinServerBaseURL+`/notification?page=1`,{headers:{Authorization:Auth.accessToken}})
    .then((resp)=>{
      setList(resp.data)
    })
    .catch((error)=>console.log(error))

    axios.get(GinServerBaseURL+`/significant/alert`)
    .then((resp)=>{
      if(resp.data.significant){
        setSignificant(resp.data)
        setColor("red")
      } else {
        setColor("green")
      }
    })
    .catch((err)=>{console.log(err)})
  }, []);




  return (
    <div className="min-w-[1440px] w-full min-h-[800px] flex h-screen">
      <Navbar />
      <main className="min-w-[1140px] w-full h-full flex flex-col">
        <div className="flex justify-end gap-8 p-4 pr-8">
          <OnDate />
          <OnWork></OnWork>
        </div>

        <div>
          <div className="flex justify-between h-[200px]">
            <div className="w-1/2 pl-12 h-full">
              <h1 className="font-bold w-full text-3xl my-2">공지사항</h1>
              <div className="font-semibold text-lg ml-2 my-2">
                전직원 공지사항
              </div>
              <div className="w-full h-2/3 mx-8">
                <ul className="list-disc">
                  {list && list.map((value,index)=>(
                    <li key={value.id}>{value.title}</li>
                    ))}
                </ul>
              </div>
              <div className="text-right pr-8">
                <Link
                  href="/worker/notice"
                  className="cursor-pointer hover:text-blue-500"
                >
                  게시글 더보기 {">"}
                </Link>
              </div>
            </div>

            <div className={`mt-10 w-0 border-x-2 border-dashed border-${color}-500 h-full`}></div>

            <div className="w-1/2 h-[225px] flex justify-center items-center flex-col">
              <h1 className="font-bold text-2xl">{color==="red"?"긴급특이사항":"특이사항 없음"}</h1>
              <h3 className="text-xl mt-2">{color==="red"?significant.content:"특이사항 없음"}</h3>
            </div>
          </div>

          <div className="h-[300px] flex justify-between p-8">
            <div className="w-1/2 h-[300px]">
              <div className="font-bold text-3xl px-4 text-left">농장상황</div>
              <div className="w-full h-[264px] flex flex-col items-center justyfy-center">
                <div className="my-4">
                  <Image src={goals} alt="goals" width={128} height={128} />
                </div>
                <div className="h-[90px] w-full flex-col items-center justify-center ">
                  <div className="text-center">파종일 : {startDate.toLocaleDateString()}</div>
                  <div className="text-center">예상 수확일 : {endDate.toLocaleDateString()}</div>
                </div>
                <div className="w-[264px] text-right">{calculateProgress()}% 진행</div>
              </div>
            </div>

            <div className="w-1/2 h-[264px] mt-[36px] flex items-center">
              <div className="px-8">
                <Image src={sand} alt="sand" width={192} height={192} />
              </div>
              <ul>
                <li className="my-4">
                  현재 온도 : 18°C <br /> 설정온도 : 22°C
                </li>
                <li className="my-4">
                  현재 풍속 : 0.2m/s <br />
                  설정 풍속 : 0.2m/s
                </li>
                <li className="my-4">
                  설정 비료량 : 1kg/m² <br /> 설정 급수량 : 500ml/h
                </li>
                <li className="my-4">
                  토양 PH : 7.4 <br /> 토양 무기질 함유량 2g/m²
                </li>
              </ul>
            </div>
          </div>

          <div className="h-[311px] p-8">
            <div className="font-bold text-3xl mb-6 px-4">주간예보</div>
            <ForecastBar />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Main;
