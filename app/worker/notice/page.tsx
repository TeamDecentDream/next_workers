"use client";

import Footer from "@/components/footer/Footer";
import OnDate from "@/components/functional/OnDate";
import Navbar from "@/components/navbar/Navbar";
import { FC } from "react";

const Notice: FC = () => {
  return (
    <div>
      <div className="flex">
        <Navbar />
        <main>
          <OnDate />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Notice;
