import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import { ITask } from "./interfaces";
import { TodoTask } from "./components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  // This defines the task we are editing (this will let us display
  // different inputs based on a condition (conditional rendering)
  const [taskEditing, setTaskEditing] = useState<string>("");

  // Text inside an editing input / taskName
  const [editigText, setEditingText] = useState<string>("");

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
  const editTask = (taskNameToEdit: string): void => {
    setTaskEditing(taskNameToEdit);

    console.log("Task to edit2 ", taskEditing); //gives empty string?!
  };

  const handleEditInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setEditingText(event.target.value);

    console.log("Text", editigText);
  };

  //handleEditSubmit does not update the array!

  const handleEditSubmit = (taskNameToEdit: string): void => {
    const updatedTodos: any = [...todoList].map((task) => {
      // task.taskName === taskNameToEdit ? task.taskName == editigText : task;

      if (task.taskName === taskNameToEdit) {
        task.taskName === editigText;
      }
      console.log("task", task);
      return task;
    });

    console.log("updatedList", updatedTodos);
    setTodoList(updatedTodos);
    setTaskEditing("");
    setEditingText("");
    console.log("submit works");
  };

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
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
              handleEditInput={handleEditInput}
              editigText={editigText}
              taskEditing={taskEditing}
              handleEditSubmit={handleEditSubmit}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
