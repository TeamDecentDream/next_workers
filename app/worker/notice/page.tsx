"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
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
