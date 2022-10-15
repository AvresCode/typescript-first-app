import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import { ITask } from "./interfaces";
import { TodoTask } from "./components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [taskEditing, setTaskEditing] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<string>(task);

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

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  const editTask = (taskNameToDelete: string): void => {
    setTaskEditing(true);
  };

  const handleEdit = (event: ChangeEvent<HTMLInputElement>): void => {
    setEditedText(event.target.value);

    // console.log(task);
  };

  return (
    <div className="App">
      <div>
        {" "}
        <h1>To Do List:</h1>
      </div>
      <div className="addTaskContainer">
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
      </div>
      <div className="todoList">
        {" "}
        {todoList.map((task: ITask, key: number) => (
          <div key={key}>
            {" "}
            <TodoTask
              key={key}
              task={task}
              deleteTask={deleteTask}
              editTask={editTask}
              handleEdit={handleEdit}
              editedText={editedText}
              taskEditing={taskEditing}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
