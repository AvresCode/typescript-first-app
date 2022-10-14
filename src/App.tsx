import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import { ITask } from "./interfaces";
import { TodoList } from "./components/TodoList";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);

    // console.log(task);
  };

  const addTask = (): void => {
    const newTask = { taskName: task };
    setTodoList([...todoList, newTask]);
    setTask("");
    console.log(todoList);
  };

  return (
    <div className="App">
      <div>
        {" "}
        <h1>To Do List:</h1>
      </div>
      <div>
        {" "}
        <input
          className="inputContainer"
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        <button className="addButton" onClick={addTask}>
          {" "}
          Add Task
        </button>
      </div>
      <div className="todoList">
        {" "}
        {todoList.map((task: ITask, key: number) => (
          <TodoList key={key} task={task} />
        ))}
      </div>
    </div>
  );
};

export default App;
