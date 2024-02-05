import Footer from "@/components/footer/Footer";
import { FC } from "react";

const Weather: FC = () => {
  return (
    <div className="flex flex-col items-center bg-red-100">
      Weather
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Weather;
