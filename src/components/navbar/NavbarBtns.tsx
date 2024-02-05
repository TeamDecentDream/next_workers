import Link from "next/link";
import { FC } from "react";

const NavbarBtns: FC = () => {
  return (
    <div className="flex flex-col mt-16 gap-8 items-center font-bold">
      <Link href="./notice">공지사항</Link>
      <Link href="./Todo">할 일 관리</Link>
      <Link href="./Weather">일기예보</Link>
      <Link href="./Significant">특이사항 보고</Link>
      <Link href="./Defi">DeFi</Link>
    </div>
  );
};

export default NavbarBtns;
