import { FC, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "@/src/components/reactcalendar/TodoCalendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Todo {
  id: number;
  text: string;
  date: string;
  done: boolean;
}

const TodoCalendar: FC = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [today, setToday] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();
    setToday(currentDate);
  }, []);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
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
      setTodos([
        ...todos,
        { text: inputText, id: Date.now(), date: currentDate, done: false }
      ]);
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

  return (
    <div className="flex h-full">
      <div className="w-1/2 mx-auto min-w-[630px] flex flex-col border-r-2 border-gray-300 items-center justify-center">
        <Calendar
          onChange={onChange}
          value={value}
          onClickDay={handleDateClick}
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
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center mb-4 justify-center min-w-1/2"
          >
            <ul className="w-3/4 h-12  ml-4 flex items-center ">
              <li
                className={`text-darkGreen font-semibold text-xl mr-4 min-w-32 ${
                  todo.done ? "line-through" : ""
                }`}
              >
                {todo.date}
              </li>
              <li
                className={`text-lg overflow-hidden min-w-[180px] max-w-[330px] ${
                  todo.done ? "line-through" : ""
                }`}
              >
                {todo.text}
              </li>
            </ul>
            <button
              className="min-w-12 min-h-12 bg-green-400 rounded-xl ml-2 text-white font-semibold shadow-lg"
              onClick={() => toggleDone(todo.id)}
            >
              Done
            </button>
            <button
              className="min-w-12 min-h-12 bg-blue-400 rounded-xl ml-2 text-white font-semibold shadow-lg"
              onClick={() => editTodo(todo.id)}
            >
              Edit
            </button>
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
