import { useEffect, useState } from "react";

const OnDate = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const dateId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(dateId);
  }, []);

  const getDayOfWeek = (date: Date) => {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    return daysOfWeek[date.getDay()];
  };

  const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date
    .getDate()
    .toString()
    .padStart(2, "0")}(${getDayOfWeek(date)})`;

  return <div>{formattedDate}</div>;
};

export default OnDate;
