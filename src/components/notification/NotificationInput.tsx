import axios from "axios";
import { headers } from "next/headers";
import {useState, ChangeEvent} from "react";
import React from "react";

const GinServerBaseURL = "http://localhost:8080"

interface Notification {
    title: string;
    contents: string;
  }

const NotificationInput = () => {
    const [notification, setNotification] = useState<Notification>({
        title:"",
        contents:""
    });

    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNotification(prevState => ({
          ...prevState,
          title: e.target.value
        }));
      };
      const handleContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNotification(prevState => ({
          ...prevState,
          contents: e.target.value
        }));
      };


      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const response = await axios.post(
            GinServerBaseURL + "/significant",
            { notification },
            {
              headers: {
                Authorization: sessionStorage.getItem("token")
              }
            }
          );
          console.log(response.data);
        
        } catch (error) {
          console.log("공지사항 제출 중 오류");
          
        }
      };
  return (
    <>
      <form className="mt-5 min-h-[720px] h-full flex-col flex" onSubmit={handleSubmit}>
        <fieldset className="w-5/6 min-w-[940px] h-full" >
          <legend className="font-bold">공지사항 제목</legend>
          <input
            className="w-full h-10 px-2 py-0.5 focus:outline-[#00B050]"
            style={{ background: "rgba(180,229,87,0.44)" }}
            type="text"
            value={notification.title}
            onChange={handleTitle}
          ></input>
          <legend className="font-bold mt-1">내용</legend>
          <textarea
            className="w-full min-h-[560px] px-2 py-0.5 focus:outline-[#00B050]"
            style={{ background: "rgba(180,229,87,0.44)" }}
            value={notification.contents}
            onChange={handleContents}
          ></textarea>
          
        </fieldset>
        <button className="w-5/6 border-[#00B050] text-[#00B050] border-solid border-2 bg-white text-xl px-4 py-2 rounded-2xl" type="submit">제출</button>
      </form>
    </>
  );
};

export default NotificationInput;
