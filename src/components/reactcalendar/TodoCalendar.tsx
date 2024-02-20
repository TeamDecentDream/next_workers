import { FC, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "@/src/components/reactcalendar/TodoCalendar.css";
import axios from "axios";
import { useSelector } from "react-redux";

const GinServerBaseURL = "http://localhost:8080";

interface Todo {
  id: number;
  contents: string;
  regDate: string;
  state: number;
}

const TodoCalendar: FC = () => {
  const initTimeRange = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    return `${year}-${month}`;
  };

  const [value, onChange] = useState<any>(new Date());
  const [today, setToday] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeRange, setTimeRange] = useState<string>(initTimeRange());

  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const Auth: any = useSelector<any>((state) => state.authReducer);

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();
    setToday(currentDate);
    console.log("100", today);
  }, []);

  useEffect(() => {
    loadData();
  }, [timeRange]);

  function formatDateToYearMonth(isoDateString: any) {
    console.log(isoDateString);
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1 해줌
    return `${year}-${month}`;
  }

  const loadData = () => {
    axios
      .get(GinServerBaseURL + `/todo?timeRange=${timeRange}`, {
        headers: { Authorization: Auth.accessToken }
      })
      .then((resp) => {
        console.log(resp);
        setTodos(resp.data.todos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateData = (todo: any) => {
    const editedText = prompt("수정할 내용을 입력하세요.");

    axios
      .put(
        GinServerBaseURL + `/todo`,
        {
          id: todo.id,
          authorId: todo.authorId,
          contents: editedText,
          state: todo.state,
          updateDate: todo.updateDate,
          regDate: todo.regDate
        },
        {
          headers: { Authorization: Auth.accessToken }
        }
      )
      .then((resp) => {
        loadData();
        console.log(resp);
        alert("수정 성공");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDone = (todo: any) => {
    axios
      .put(
        GinServerBaseURL + `/todo`,
        {
          id: todo.id,
          authorId: todo.authorId,
          contents: todo.contents,
          state: 1,
          updateDate: todo.updateDate,
          regDate: todo.regDate
        },
        {
          headers: { Authorization: Auth.accessToken }
        }
      )
      .then((resp) => {
        loadData();
        console.log(resp);
        alert("수정 성공");
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
      axios
        .post(
          GinServerBaseURL + `/todo`,
          {
            contents: inputText,
            regDate: value
          },
          { headers: { Authorization: Auth.accessToken } }
        )
        .then((resp) => {
          loadData(); // 데이터 다시 불러오기

          alert("투두 생성 완료!");
        })
        .catch((error) => {
          console.log(error);
        });

      setInputText(""); // 입력 필드 초기화
    }
  };
  const removeTodo = (id: number) => {
    axios
      .delete(GinServerBaseURL + `/todo?id=${id}`, {
        headers: { Authorization: Auth.accessToken }
      })
      .then((resp) => {
        loadData();
        alert("삭제 성공");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function parseDateTimeString(dateTimeString: any) {
    const date = new Date(dateTimeString);

    const offset = date.getTimezoneOffset();
    const seoulOffset = +9 * 60;
    const seoulTime = new Date(
      date.getTime() + (seoulOffset + offset) * 60 * 1000
    );

    const year = seoulTime.getFullYear();
    const month = String(seoulTime.getMonth() + 1).padStart(2, "0");
    const day = String(seoulTime.getDate()).padStart(2, "0");
    const hours = String(seoulTime.getHours()).padStart(2, "0");
    const minutes = String(seoulTime.getMinutes()).padStart(2, "0");
    const seconds = String(seoulTime.getSeconds()).padStart(2, "0");

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
        {todos &&
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center mb-4 justify-center min-w-1/2"
            >
              <ul className="w-3/4 h-12  ml-4 flex items-center ">
                <li
                  className={` font-semibold text-xl mr-4 min-w-32 ${
                    todo.state === 1
                      ? "line-through text-gray-600"
                      : "text-darkGreen"
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
              {todo.state === 0 ? (
                <button
                  className="min-w-12 min-h-12 bg-green-400 rounded-xl ml-2 text-white font-semibold shadow-lg"
                  onClick={() => handleDone(todo)}
                >
                  Done
                </button>
              ) : (
                <></>
              )}
              {todo.state === 0 ? (
                <button
                  className="min-w-12 min-h-12 bg-blue-400 rounded-xl ml-2 text-white font-semibold shadow-lg"
                  onClick={() => updateData(todo)}
                >
                  Edit
                </button>
              ) : (
                <></>
              )}
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
