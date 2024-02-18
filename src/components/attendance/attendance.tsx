import React, { FC } from "react";

interface AttendanceProps {
    list: Array<any>;
}

const Attendance: FC<AttendanceProps> = ({ list }) => {

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear().toString().slice(2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
        return `${year}/${month}/${day} ${hours}:${minutes}`;
    };

  return (

    <div className="w-full">
      {list &&
        list.map((attendance, index) => (
          <div key={attendance.id} className="flex w-full">
            <div className="w-1/2 py-2 text-center text-sm">{formatDate(attendance.enter_time)}</div>
            <div className="w-1/2 py-2 text-center text-sm">{formatDate(attendance.leave_time)}</div>
          </div>
        ))}
    </div>
  );
};

export default Attendance;
