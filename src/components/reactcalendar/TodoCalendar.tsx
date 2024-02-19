import { FC, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "@/src/components/reactcalendar/TodoCalendar.css";
import axios from "axios";
import { useSelector } from "react-redux";

const GinServerBaseURL = "http://localhost:8080";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Todo {
  id: number;
  text: string;
  date: string;
  done: boolean;
}

const TodoCalendar: FC = () => {
  const initTimeRange = () => {
    const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1 해줌
      
      return `${year}-${month}`;
  }


  const [value, onChange] = useState<Value>(new Date());
  const [today, setToday] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeRange, setTimeRange] = useState<any>(initTimeRange());

  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [list, setList] = useState([]);

  const Auth: any = useSelector<any>((state) => state.authReducer);

  function formatDateToYearMonth(isoDateString: any) {
    console.log(isoDateString);
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1 해줌
    return `${year}-${month}`;
  }

  
  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();
    setToday(currentDate);
  }, []);

  useEffect(() => {
    loadData();
  }, [timeRange]);

  const loadData = () => {
    axios
      .get(GinServerBaseURL + `/todo?timeRange=${timeRange}`, {
        headers: { Authorization: Auth.accessToken },
      })
      .then((resp) => {
        console.log(resp);
        setTodos(resp.data.todos)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleMonthClick = (value: any) => {
    const _timeRange = formatDateToYearMonth(value.activeStartDate);
    console.log(_timeRange);
    setTimeRange(_timeRange);
  };

  const addTodo = () => {
    if (inputText.trim() === "") {
      alert("내용을 입력해주세요.");
    } else {
      const currentDate = selectedDate
        ? new Date(
            selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000
          )
            .toISOString()
            .slice(0, 10)
        : new Date().toISOString().slice(0, 10);
      axios
        .post(
          GinServerBaseURL + `/todo`,
          {
            contents: inputText,
          },
          { headers: { Authorization: Auth.accessToken } }
        )
        .then((resp) => {
          loadData();
          alert("투두 생성 완료!");
        })
        .catch((error) => {
          console.log(error);
        });
      setInputText("");
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number) => {
    const editedText = prompt(
      "수정할 내용을 입력하세요.",
      todos.find((todo) => todo.id === id)?.text || ""
    );
    if (editedText !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: editedText } : todo
        )
      );
    }
  };

  const toggleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  function parseDateTimeString(dateTimeString:any) {
    // 주어진 문자열을 Date 객체로 파싱합니다.
    const date = new Date(dateTimeString);
  
    // Asia/Seoul 시간대로 변환합니다.
    const offset = date.getTimezoneOffset();
    const seoulOffset = +9 * 60; // Asia/Seoul 시간대는 UTC+9 입니다.
    const seoulTime = new Date(date.getTime() + (seoulOffset + offset) * 60 * 1000);
  
    // 필요한 형식으로 날짜와 시간을 반환합니다.
    const year = seoulTime.getFullYear();
    const month = String(seoulTime.getMonth() + 1).padStart(2, "0");
    const day = String(seoulTime.getDate()).padStart(2, "0");
    const hours = String(seoulTime.getHours()).padStart(2, "0");
    const minutes = String(seoulTime.getMinutes()).padStart(2, "0");
    const seconds = String(seoulTime.getSeconds()).padStart(2, "0");
  
    // 예시 형식: "2024-02-19 14:24:10"
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
    return formattedDateTime;
  }

  return (
    <div className="flex h-full">
      <div className="w-1/2 mx-auto min-w-[630px] flex flex-col border-r-2 border-gray-300 items-center justify-center">
        <Calendar
          onChange={onChange}
          value={value}
          onClickDay={handleDateClick}
          onActiveStartDateChange={handleMonthClick}
        />

        <div className="flex mt-8 items-center">
          <input
            className="w-96 h-12 border-2 pl-4 border-gray-300 "
            placeholder="할 일을 입력하세요."
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <button
            className="ml-8 w-12 h-12 rounded-xl text-white font-semibold shadow-lg bg-darkGreen"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
      </div>
      <div className="w-1/2 pt-4 h-auto overflow-y-scroll">
        {todos && todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center mb-4 justify-center min-w-1/2"
          >
            <ul className="w-3/4 h-12  ml-4 flex items-center ">
              <li
                className={` font-semibold text-xl mr-4 min-w-32 ${
                  todo.state === 1 ? "line-through text-gray-600" : "text-darkGreen"
                }`}
              >
                {parseDateTimeString(todo.regDate)}
              </li>
              <li
                className={`text-lg overflow-hidden min-w-[180px] max-w-[330px] ${
                  todo.state === 1 ? "line-through" : ""
                }`}
              >
                {todo.contents}
              </li>
            </ul>
            {todo.state === 0 ? <button
              className="min-w-12 min-h-12 bg-green-400 rounded-xl ml-2 text-white font-semibold shadow-lg"
              onClick={() => toggleDone(todo.id)}
            >
              Done
            </button>:<></>}
            {todo.state ===0 ?<button
              className="min-w-12 min-h-12 bg-blue-400 rounded-xl ml-2 text-white font-semibold shadow-lg"
              onClick={() => editTodo(todo.id)}
            >
              Edit
            </button>:<></>}
            <button
              className="min-w-12 min-h-12 bg-red-400 rounded-xl ml-2 text-white font-semibold shadow-lg"
              onClick={() => removeTodo(todo.id)}
            >
              Del
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoCalendar;
