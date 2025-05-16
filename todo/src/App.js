// import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useState, useRef } from "react";
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
]
function App() {
  const idRef = useRef(3);
  // 아이템이 3개 들어가서 3으로 저장.
  const [todo, setTodo] = useState(mockTodo);
  const onCreate = (content) => {
    let newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createDate: new Date().getTime(),
    }
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  }
  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  }
  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it)
    );
  };
  return (
    <div className="App">
      <Header></Header>
      <TodoEditor onCreate={onCreate}></TodoEditor>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}></TodoList>
    </div>
  );
}
export default App;