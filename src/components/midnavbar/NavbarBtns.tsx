import Link from "next/link";
import { FC } from "react";

const NavbarBtns: FC = () => {
  return (
    <div className="flex flex-col mt-16 gap-8 items-center font-bold">
      <Link href="./notice">공지사항</Link>
      <Link href="./todo">할 일 관리</Link>
      <Link href="./weather">일기예보</Link>
      <Link href="./significant">특이사항 보고</Link>
      <Link href="./alart">특이사항 알림</Link>
      <Link href="./defi">DeFi</Link>
    </div>
  );
};

export default NavbarBtns;
