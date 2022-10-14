import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
    //console.log(task);
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
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        <button className="addButton"> Add Task</button>
      </div>
    </div>
  );
};

export default App;
