import { useEffect, useState } from "react";

const OnDate = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const dateId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(dateId);
  }, []);

  return <div>{date.toLocaleDateString()}</div>;
};

export default OnDate;
