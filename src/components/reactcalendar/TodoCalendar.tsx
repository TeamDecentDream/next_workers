import { FC, useState } from "react";
import Calendar from 'react-calendar';
import '@/src/components/reactcalendar/TodoCalendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Todo {
  id: number;
  text: string;
  date: string;
}

const TodoCalendar: FC = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Calendar

  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setShowModal(true);
  }; // Calendar

  const addTodo = () => {
    if (inputText.trim() === "") {
      alert("내용을 입력해주세요.");
    } else {
      const currentDate = new Date().toISOString().slice(0, 10);
      setTodos([...todos, { text: inputText, id: Date.now(), date: currentDate }]);
      setInputText("");
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number) => {
    const editedText = prompt("수정할 내용을 입력하세요.", todos.find(todo => todo.id === id)?.text || "");
    if (editedText !== null) {
      setTodos(todos.map(todo => todo.id === id ? { ...todo, text: editedText } : todo));
    }
  }; //Todo

  const filteredTodos = todos.filter(todo => {
    return todo.date === (selectedDate?.toISOString().slice(0,10) ?? "");
  });
  return (
    <div>
      <Calendar onChange={onChange} value={value} onClickDay={handleDateClick} />
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">선택된 날짜</h2>
            <p>{selectedDate?.toLocaleDateString()}</p>
            <div>
              <div className="flex items-center justify-center mb-4">
                <input
                  className="w-96 h-16"
                  placeholder="할 일을 입력하세요."
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <button className="ml-8 w-12 h-12 rounded-2xl bg-darkGreen" onClick={addTodo}>+</button>
              </div>
              {todos.map((todo) => (
                <div key={todo.id} className="flex items-center mb-4">
                  <ul className="w-96 h-16 bg-yellow-300 flex items-center">
                    <li>{todo.text}</li>
                  </ul>
                  <button className="min-w-16 min-h-16 bg-blue-400 rounded-2xl ml-2" onClick={() => editTodo(todo.id)}>수정</button>
                  <button className="min-w-16 min-h-16 bg-red-400 rounded-2xl ml-2" onClick={() => removeTodo(todo.id)}>삭제</button>
                </div>
              ))}
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setShowModal(false)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoCalendar;