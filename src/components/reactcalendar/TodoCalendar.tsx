import { FC, useEffect, useState } from "react";
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
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Calendar
  const [today, setToday] = useState<string>(''); // 현재 날짜를 문자열로 저장

  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();
    setToday(currentDate);
  }, []);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  }; // Calendar

  const addTodo = () => {
    if (inputText.trim() === "") {
      alert("내용을 입력해주세요.");
    } else {
      const currentDate = selectedDate ? selectedDate.toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10);
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
    return todo.date === (selectedDate?.toISOString().slice(0, 10) ?? "");
  });

  return (
    <div className="flex h-full items-center">
      <div className="bg-red-200">
      <div className="w-1/2">
        <Calendar onChange={onChange} value={value} onClickDay={handleDateClick} />
      </div>
      <div className="flex mt-8 items-center">
          <input
            className="w-96 h-12"
            placeholder="할 일을 입력하세요."
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        
          <button className="ml-8 w-12 h-12 rounded-2xl bg-darkGreen" onClick={addTodo}>+</button>
        
        </div>
      </div>
      <div className="h-full w-1/2 pt-4">
      
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="flex items-center mb-4 justify-center">
            <ul className="w-2/3 h-12 bg-yellow-300 ml-4 flex items-center">
              <li className="mr-4">{today}</li> 
              <li>{todo.text}</li>
            </ul>
            <button className="min-w-12 min-h-12 bg-blue-400 rounded-2xl ml-2" onClick={() => editTodo(todo.id)}>수정</button>
            <button className="min-w-12 min-h-12 bg-red-400 rounded-2xl ml-2" onClick={() => removeTodo(todo.id)}>삭제</button>
          </div>
        ))}
      </div>
      </div>
    
  );
}

export default TodoCalendar;
