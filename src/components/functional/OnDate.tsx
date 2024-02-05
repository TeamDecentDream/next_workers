import { useEffect, useState } from "react";

const OnDate = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return <div>{time.toLocaleDateString()}</div>;
};

export default OnDate;
