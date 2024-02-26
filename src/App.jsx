import { useState, useEffect } from "react";

import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function saveToLS() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todosFromLs = JSON.parse(localStorage.getItem("todos"));
      setTodos(todosFromLs);
    }
  }, []);

  function handleTextField(e) {
    setNewTodo(e.target.value);
  }

  function handleAdd() {
    if (newTodo.trim() !== "") {
      const newTodoItem = { id: todos.length, newTodo, isCompleted: false };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");

      saveToLS();
    }
  }

  function handleDone(index) {
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);

    saveToLS();
  }

  function handleDelete(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);

    saveToLS();
  }

  return (
    <>
      <div className="main bg-gradient-to-br from-dark-blue from-10% via-light-blue via-30% to-light-greenish-yellow to-90% min-h-screen">
        <div className="w-2/4 mx-auto py-28">
          <h1 className="text-3xl text-center font-medium">
            One Task at a Time.
          </h1>
          <div className="inputs mt-6 flex justify-center">
            <input
              onChange={handleTextField}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAdd();
                }
              }}
              value={newTodo}
              type="text"
              placeholder="Add a Task..."
              className="w-[429px] h-[38px] bg-dark-blue border rounded-l-xl p-2 border-none text-slate-300"
            />
            <button
              onClick={handleAdd}
              className="w-[95px] h-[38px] border border-none rounded-r-xl p-2 bg-slate-300"
            >
              I Got this!
            </button>
          </div>

          <p className="text-center m-4">2/21/2024, 7:50:50 PM</p>

          {todos.map((todo, index) => {
            return (
              <div
                key={todo.id}
                className="tasks flex justify-between max-w-max mx-auto py-2 px-3 gap-5 border-2 border-solid rounded-full border-black bg-sea-green mt-4"
              >
                <p
                  className={
                    todo.isCompleted ? "text-lg line-through" : "text-lg"
                  }
                >
                  {todo.newTodo}
                </p>
                <div className="buttons flex gap-2">
                  <button onClick={() => handleDone(index)}>
                    <FaRegCheckCircle size={20} />
                  </button>
                  <button onClick={() => handleDelete(index)}>
                    <FaRegTrashAlt size={20} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
