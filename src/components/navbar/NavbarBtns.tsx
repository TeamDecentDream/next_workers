import Link from "next/link";
import { FC, useEffect } from "react";

interface NavbarBtnsProps {
  role:Array<any>
}

const NavbarBtns: FC<NavbarBtnsProps> = ({role}) => {
  useEffect(()=>{
    if(role[0]){
      console.log(role[0].Role)
    }
  },[role])

  return (
    <div className="flex flex-col mt-16 gap-8 items-center font-bold">
      {role[0] && (
        role[0].Role === "ROLE_ADMIN" ||
        role[0].Role === "ROLE_WORKER" ||
        role[0].Role === "ROLE_PRIME"
        ) ?<>
      <Link href="/worker/notice">공지사항</Link>
      {/* <Link href="./todo">할 일 관리</Link> */}
      <Link href="/worker/weather">일기예보</Link>
      <Link href="/worker/significant">{(role[0].Role === "ROLE_ADMIN" || role[0].Role === "ROLE_PRIME") ? "특이사항 보고/알림" : "특이사항 보고"}</Link>
      </> :<></>}
      {role[0] && role[0].Role === "ROLE_PRIME" ? 
      <Link href="/worker/evaluation">농부평가</Link>
      :<></>}      
      {role[0] && role[0].Role === "ROLE_ADMIN" ? 
      <>
      <Link href="/worker/transaction">거래내역</Link>
      <Link href="/worker/defi">전체농가상황</Link>
      </>
      :<></>}
      <Link href="/worker/defi">DeFi</Link>
    </div>
  );
};

export default NavbarBtns;
